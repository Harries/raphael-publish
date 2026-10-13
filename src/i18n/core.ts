import { createContext, useContext } from 'react';
import zh, { type Messages } from './locales/zh';
import zhTW from './locales/zh-TW';
import en from './locales/en';
import ja from './locales/ja';
import ko from './locales/ko';
import es from './locales/es';
import fr from './locales/fr';
import de from './locales/de';
import pt from './locales/pt';
import ru from './locales/ru';
import type { Theme } from '../lib/themes/types';
import { DEFAULT_LOCALE, SEO_LOCALE_CODES, localeFromPath, type SeoLocale } from './seo';

// To add a language: create ./locales/<code>.ts implementing Messages, register it here
// and give it a URL + metadata in ./seo.ts.
export const LOCALES = {
    zh: { label: '简体中文', shortLabel: '简', messages: zh },
    'zh-TW': { label: '繁體中文', shortLabel: '繁', messages: zhTW },
    en: { label: 'English', shortLabel: 'EN', messages: en },
    ja: { label: '日本語', shortLabel: '日', messages: ja },
    ko: { label: '한국어', shortLabel: '한', messages: ko },
    es: { label: 'Español', shortLabel: 'ES', messages: es },
    fr: { label: 'Français', shortLabel: 'FR', messages: fr },
    de: { label: 'Deutsch', shortLabel: 'DE', messages: de },
    pt: { label: 'Português', shortLabel: 'PT', messages: pt },
    ru: { label: 'Русский', shortLabel: 'RU', messages: ru }
} satisfies Record<SeoLocale, { label: string; shortLabel: string; messages: Messages }>;

export type Locale = SeoLocale;
export type { Messages };

export const LOCALE_CODES = SEO_LOCALE_CODES;

/** The language is decided by the URL (`/` → zh, `/en/` → en, `/ja/` → ja, …) so every language is separately indexable. */
export function detectLocale(): Locale {
    return typeof location === 'undefined' ? DEFAULT_LOCALE : localeFromPath(location.pathname);
}

// Module-level copy of the active locale so non-React code (e.g. paste handling) can translate too.
let currentLocale: Locale = detectLocale();

export function getLocale(): Locale {
    return currentLocale;
}

export function getMessages(): Messages {
    return LOCALES[currentLocale].messages;
}

export function setCurrentLocale(locale: Locale): void {
    currentLocale = locale;
}

/** Localized name/description of a theme; falls back to the theme's own text. */
export function localizeTheme(theme: Theme, messages: Messages): { name: string; description: string } {
    const translated = messages.themes[theme.id];
    return {
        name: translated?.name ?? theme.name,
        description: translated?.description ?? theme.description
    };
}

export interface I18nContextValue {
    locale: Locale;
    t: Messages;
    setLocale: (locale: Locale) => void;
}

export const I18nContext = createContext<I18nContextValue>({
    locale: currentLocale,
    t: LOCALES[currentLocale].messages,
    setLocale: () => {}
});

export function useI18n(): I18nContextValue {
    return useContext(I18nContext);
}
