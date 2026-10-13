import fs from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';
import {
    DEFAULT_LOCALE,
    SEO_LOCALES,
    SEO_LOCALE_CODES,
    X_DEFAULT_LOCALE,
    localeFromPath,
    localeUrl,
    type SeoLocale
} from './src/i18n/seo';

const BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;

function escapeHtml(value: string): string {
    return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function alternateLinks(indent: string, tag: (hreflang: string, href: string) => string): string {
    return [
        ...SEO_LOCALE_CODES.map((code) => tag(SEO_LOCALES[code].hreflang, localeUrl(code))),
        tag('x-default', localeUrl(X_DEFAULT_LOCALE))
    ].join(`\n${indent}`);
}

function headTags(locale: SeoLocale): string {
    const seo = SEO_LOCALES[locale];
    const url = localeUrl(locale);
    const title = escapeHtml(seo.title);
    const description = escapeHtml(seo.description);
    const jsonLd = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Raphael Publish',
        url,
        description: seo.description,
        inLanguage: seo.hreflang,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
    }).replace(/</g, '\\u003c');
    const indent = '    ';

    return [
        '<!--seo:start-->',
        `<title>${title}</title>`,
        `<meta name="description" content="${description}" />`,
        `<meta name="keywords" content="${escapeHtml(seo.keywords)}" />`,
        `<link rel="canonical" href="${url}" />`,
        alternateLinks(indent, (hreflang, href) => `<link rel="alternate" hreflang="${hreflang}" href="${href}" />`),
        '<meta property="og:type" content="website" />',
        '<meta property="og:site_name" content="Raphael Publish" />',
        `<meta property="og:title" content="${title}" />`,
        `<meta property="og:description" content="${description}" />`,
        `<meta property="og:url" content="${url}" />`,
        `<meta property="og:locale" content="${seo.ogLocale}" />`,
        ...SEO_LOCALE_CODES.filter((code) => code !== locale).map(
            (code) => `<meta property="og:locale:alternate" content="${SEO_LOCALES[code].ogLocale}" />`
        ),
        '<meta name="twitter:card" content="summary" />',
        `<meta name="twitter:title" content="${title}" />`,
        `<meta name="twitter:description" content="${description}" />`,
        `<script type="application/ld+json">${jsonLd}</script>`,
        '<!--seo:end-->'
    ].join(`\n${indent}`);
}

function localizeHtml(html: string, locale: SeoLocale): string {
    return html
        .replace(/<html lang="[^"]*"/, `<html lang="${SEO_LOCALES[locale].hreflang}"`)
        .replace(BLOCK, () => headTags(locale));
}

function buildSitemap(): string {
    const lastmod = new Date().toISOString().slice(0, 10);
    const urls = SEO_LOCALE_CODES.map((code) => `  <url>
    <loc>${localeUrl(code)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${code === DEFAULT_LOCALE ? '1.0' : '0.9'}</priority>
    ${alternateLinks('    ', (hreflang, href) => `<xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}" />`)}
  </url>`);

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
}

/**
 * Fills the <!--seo:start--> block of index.html with per-language meta tags, and at build
 * time writes one static HTML page per language (e.g. dist/en/index.html) plus sitemap.xml
 * and robots.txt, so every language has its own crawlable URL on static hosting.
 */
export default function seoPlugin(): Plugin {
    let outDir = 'dist';

    return {
        name: 'raphael-seo',
        configResolved(config) {
            outDir = path.resolve(config.root, config.build.outDir);
        },
        transformIndexHtml: {
            order: 'pre',
            handler(html, ctx) {
                // The dev server answers /en/ with this same file, so pick the language from the URL there.
                const locale = ctx.server && ctx.originalUrl ? localeFromPath(ctx.originalUrl.split('?')[0]) : DEFAULT_LOCALE;
                return localizeHtml(html, locale);
            }
        },
        closeBundle() {
            const indexFile = path.join(outDir, 'index.html');
            if (!fs.existsSync(indexFile)) return;
            const html = fs.readFileSync(indexFile, 'utf-8');

            for (const code of SEO_LOCALE_CODES) {
                if (code === DEFAULT_LOCALE) continue;
                const dir = path.join(outDir, SEO_LOCALES[code].path);
                fs.mkdirSync(dir, { recursive: true });
                fs.writeFileSync(path.join(dir, 'index.html'), localizeHtml(html, code));
            }

            fs.writeFileSync(path.join(outDir, 'sitemap.xml'), buildSitemap());
            fs.writeFileSync(path.join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${localeUrl(DEFAULT_LOCALE)}sitemap.xml\n`);
        }
    };
}
