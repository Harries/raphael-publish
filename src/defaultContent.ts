import type { Locale } from './i18n/core';
import zh from './i18n/content/zh';
import zhTW from './i18n/content/zh-TW';
import en from './i18n/content/en';
import ja from './i18n/content/ja';
import ko from './i18n/content/ko';
import es from './i18n/content/es';
import fr from './i18n/content/fr';
import de from './i18n/content/de';
import pt from './i18n/content/pt';
import ru from './i18n/content/ru';

/** Sample article shown in the editor on first load, one per language. */
export const DEFAULT_CONTENTS: Record<Locale, string> = {
    zh: zh,
    'zh-TW': zhTW,
    en: en,
    ja: ja,
    ko: ko,
    es: es,
    fr: fr,
    de: de,
    pt: pt,
    ru: ru
};
