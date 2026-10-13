import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { I18nContext, LOCALES, detectLocale, getLocale, setCurrentLocale, type Locale } from './core';
import { SEO_LOCALES, localeUrl } from './seo';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(getLocale);

    const applyLocale = useCallback((next: Locale) => {
        setCurrentLocale(next);
        setLocaleState(next);
    }, []);

    const setLocale = useCallback((next: Locale) => {
        if (next !== detectLocale()) {
            history.pushState(null, '', SEO_LOCALES[next].path + location.search + location.hash);
        }
        applyLocale(next);
    }, [applyLocale]);

    useEffect(() => {
        // Back / forward between language URLs
        const onPopState = () => applyLocale(detectLocale());
        window.addEventListener('popstate', onPopState);
        return () => window.removeEventListener('popstate', onPopState);
    }, [applyLocale]);

    useEffect(() => {
        // Keep the head in line with the static per-language pages after an in-app switch
        const seo = SEO_LOCALES[locale];
        document.documentElement.lang = seo.hreflang;
        document.title = seo.title;
        document.querySelector('meta[name="description"]')?.setAttribute('content', seo.description);
        document.querySelector('link[rel="canonical"]')?.setAttribute('href', localeUrl(locale));
    }, [locale]);

    const value = useMemo(() => ({ locale, t: LOCALES[locale].messages, setLocale }), [locale, setLocale]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
