// Per-language URLs and SEO metadata. Shared by the app (runtime) and the build
// (vite-plugin-seo.ts generates the localized HTML pages and sitemap.xml from it),
// so keep this file free of browser / React imports.
export const SITE_URL = 'https://publish.raphael.app';

export const SEO_LOCALES = {
    zh: {
        path: '/',
        hreflang: 'zh-CN',
        ogLocale: 'zh_CN',
        title: 'Raphael Publish - 公众号排版大师｜Markdown 微信公众号排版编辑器',
        description: 'Raphael Publish 是免费的在线微信公众号 Markdown 排版工具：支持从飞书、Notion、Word 粘贴富文本自动转 Markdown，30 套精美主题，一键复制到公众号，图片自动转 Base64，还可导出 PDF 与 HTML。',
        keywords: '公众号排版,微信公众号编辑器,Markdown 排版,Markdown 转公众号,公众号排版工具,微信排版,Markdown 编辑器'
    },
    'zh-TW': {
        path: '/zh-tw/',
        hreflang: 'zh-TW',
        ogLocale: 'zh_TW',
        title: 'Raphael Publish - 公眾號排版大師｜Markdown 微信公眾號排版編輯器',
        description: 'Raphael Publish 是免費的線上微信公眾號 Markdown 排版工具：支援從飛書、Notion、Word 貼上富文字並自動轉為 Markdown，30 套精美主題，一鍵複製到公眾號，圖片自動轉 Base64，還可匯出 PDF 與 HTML。',
        keywords: '公眾號排版,微信公眾號編輯器,Markdown 排版,Markdown 轉公眾號,公眾號排版工具,微信排版,Markdown 編輯器'
    },
    en: {
        path: '/en/',
        hreflang: 'en',
        ogLocale: 'en_US',
        title: 'Raphael Publish - Markdown Editor & Formatter for WeChat Articles',
        description: 'Raphael Publish is a free online Markdown editor for WeChat Official Account articles: paste rich text from Lark, Notion or Word, pick from 30 polished themes, then copy to WeChat in one click or export to PDF and HTML.',
        keywords: 'WeChat article formatter,WeChat Official Account editor,Markdown to WeChat,Markdown editor,WeChat typesetting,Markdown formatter'
    },
    ja: {
        path: '/ja/',
        hreflang: 'ja',
        ogLocale: 'ja_JP',
        title: 'Raphael Publish - WeChat 公式アカウント向け Markdown 組版エディタ',
        description: 'Raphael Publish は WeChat 公式アカウントの記事を作るための無料オンライン Markdown エディタです。Lark・Notion・Word からリッチテキストを貼り付けて自動変換、30 種類のテーマ、ワンクリックで WeChat にコピー、PDF・HTML の書き出しに対応。',
        keywords: 'WeChat 記事 組版,WeChat 公式アカウント エディタ,Markdown WeChat 変換,Markdown エディタ,WeChat 記事 作成,Markdown 組版'
    },
    ko: {
        path: '/ko/',
        hreflang: 'ko',
        ogLocale: 'ko_KR',
        title: 'Raphael Publish - 위챗 공식계정용 Markdown 편집·조판 도구',
        description: 'Raphael Publish는 위챗 공식계정 글을 위한 무료 온라인 Markdown 편집기입니다. Lark, Notion, Word의 서식 있는 텍스트를 붙여넣으면 자동 변환되고, 30가지 테마 제공, 클릭 한 번으로 위챗에 복사, PDF·HTML 내보내기를 지원합니다.',
        keywords: '위챗 공식계정 편집기,위챗 글 조판,Markdown 위챗 변환,Markdown 편집기,위챗 편집 도구,Markdown 조판'
    },
    es: {
        path: '/es/',
        hreflang: 'es',
        ogLocale: 'es_ES',
        title: 'Raphael Publish - Editor Markdown para artículos de WeChat',
        description: 'Raphael Publish es un editor Markdown en línea y gratuito para artículos de cuentas oficiales de WeChat: pega texto enriquecido de Lark, Notion o Word, elige entre 30 temas cuidados y copia a WeChat con un clic o exporta a PDF y HTML.',
        keywords: 'editor de artículos WeChat,cuenta oficial de WeChat,Markdown a WeChat,editor Markdown,maquetación WeChat,formato Markdown'
    },
    fr: {
        path: '/fr/',
        hreflang: 'fr',
        ogLocale: 'fr_FR',
        title: 'Raphael Publish - Éditeur Markdown pour articles WeChat',
        description: 'Raphael Publish est un éditeur Markdown en ligne et gratuit pour les articles de comptes officiels WeChat : collez du texte enrichi depuis Lark, Notion ou Word, choisissez parmi 30 thèmes soignés, puis copiez vers WeChat en un clic ou exportez en PDF et HTML.',
        keywords: 'éditeur d’articles WeChat,compte officiel WeChat,Markdown vers WeChat,éditeur Markdown,mise en page WeChat,formatage Markdown'
    },
    de: {
        path: '/de/',
        hreflang: 'de',
        ogLocale: 'de_DE',
        title: 'Raphael Publish - Markdown-Editor für WeChat-Artikel',
        description: 'Raphael Publish ist ein kostenloser Online-Markdown-Editor für Artikel offizieller WeChat-Konten: Rich Text aus Lark, Notion oder Word einfügen, aus 30 ausgearbeiteten Designs wählen und mit einem Klick nach WeChat kopieren oder als PDF und HTML exportieren.',
        keywords: 'WeChat-Artikel-Editor,offizielles WeChat-Konto,Markdown zu WeChat,Markdown-Editor,WeChat-Layout,Markdown-Formatierung'
    },
    pt: {
        path: '/pt/',
        hreflang: 'pt',
        ogLocale: 'pt_BR',
        title: 'Raphael Publish - Editor Markdown para artigos do WeChat',
        description: 'Raphael Publish é um editor Markdown online e gratuito para artigos de contas oficiais do WeChat: cole texto formatado do Lark, Notion ou Word, escolha entre 30 temas caprichados e copie para o WeChat com um clique ou exporte em PDF e HTML.',
        keywords: 'editor de artigos WeChat,conta oficial do WeChat,Markdown para WeChat,editor Markdown,diagramação WeChat,formatação Markdown'
    },
    ru: {
        path: '/ru/',
        hreflang: 'ru',
        ogLocale: 'ru_RU',
        title: 'Raphael Publish — Markdown-редактор статей для WeChat',
        description: 'Raphael Publish — бесплатный онлайн-редактор Markdown для статей официальных аккаунтов WeChat: вставляйте форматированный текст из Lark, Notion или Word, выбирайте из 30 продуманных тем и копируйте в WeChat одним кликом или экспортируйте в PDF и HTML.',
        keywords: 'редактор статей WeChat,официальный аккаунт WeChat,Markdown в WeChat,Markdown-редактор,вёрстка WeChat,форматирование Markdown'
    }
};

export type SeoLocale = keyof typeof SEO_LOCALES;

export const SEO_LOCALE_CODES = Object.keys(SEO_LOCALES) as SeoLocale[];

/** Language served at the site root. */
export const DEFAULT_LOCALE: SeoLocale = 'zh';

/** Language search engines should offer to users whose language we don't support (hreflang="x-default"). */
export const X_DEFAULT_LOCALE: SeoLocale = 'en';

export function localeUrl(locale: SeoLocale): string {
    return SITE_URL + SEO_LOCALES[locale].path;
}

/** Which language a URL path belongs to: `/en/...` → en, `/ja/...` → ja, everything else → the default language. */
export function localeFromPath(pathname: string): SeoLocale {
    const normalized = (pathname.endsWith('/') ? pathname : `${pathname}/`).toLowerCase();
    const match = SEO_LOCALE_CODES.find((code) => code !== DEFAULT_LOCALE && normalized.startsWith(SEO_LOCALES[code].path));
    return match ?? DEFAULT_LOCALE;
}
