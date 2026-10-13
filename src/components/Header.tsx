import { useEffect, useRef, useState } from 'react';
import { Moon, Sun, Github, Languages, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { LOCALES, LOCALE_CODES, useI18n } from '../i18n/core';
import { SEO_LOCALES } from '../i18n/seo';

interface HeaderProps {
    themeMode: 'light' | 'dark';
    onToggleTheme: () => void;
}

export default function Header({ themeMode, onToggleTheme }: HeaderProps) {
    const { locale, t, setLocale } = useI18n();
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const languageMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isLanguageOpen) return;

        const onPointerDown = (e: MouseEvent) => {
            if (!languageMenuRef.current?.contains(e.target as Node)) setIsLanguageOpen(false);
        };
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsLanguageOpen(false);
        };

        document.addEventListener('mousedown', onPointerDown);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('mousedown', onPointerDown);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [isLanguageOpen]);

    return (
        <header className="glass flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 sticky top-0 z-[100]">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[8px] flex items-center justify-center bg-black dark:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] dark:shadow-[0_2px_12px_rgba(255,255,255,0.15)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 7.5L5 19H10.5C13.5376 19 16 16.5376 16 13.5C16 10.4624 13.5376 8 10.5 8H8.5V11.5L16.5 7.5Z" fill="var(--color-fg)" className="fill-white dark:fill-black" />
                        <path d="M8.5 4H10.5C15.7467 4 20 8.25329 20 13.5C20 18.7467 15.7467 23 10.5 23H4V4H8.5Z" fill="none" strokeWidth="2.5" stroke="currentColor" className="text-white dark:text-black" />
                        <path d="M4 11.5H8.5" strokeWidth="2.5" strokeLinecap="round" stroke="currentColor" className="text-white dark:text-black" />
                    </svg>
                </div>
                <span className="font-bold text-lg tracking-tight text-black dark:text-white">Raphael Publish<span className="hidden sm:inline">{t.header.subtitle}</span></span>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/Harries/raphael-publish"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                    <Github size={20} />
                </motion.a>
                <div ref={languageMenuRef} className="relative">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        data-testid="language-toggle"
                        onClick={() => setIsLanguageOpen((open) => !open)}
                        title={t.header.switchLanguage}
                        aria-label={t.header.switchLanguage}
                        aria-haspopup="menu"
                        aria-expanded={isLanguageOpen}
                        className="flex items-center gap-1.5 px-2.5 py-2 rounded-full text-[13px] font-semibold hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                        <Languages size={18} />
                        {LOCALES[locale].shortLabel}
                    </motion.button>
                    {/* Always rendered as real links (just hidden when closed), so crawlers can discover every language URL */}
                    <nav
                        data-testid="language-menu"
                        className={`${isLanguageOpen ? 'block' : 'hidden'} absolute right-0 top-11 w-44 max-h-[70vh] overflow-y-auto p-1.5 bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-apple-lg border border-[#00000015] dark:border-[#ffffff15]`}
                    >
                        {LOCALE_CODES.map((code) => (
                            <a
                                key={code}
                                data-testid={`language-option-${code}`}
                                href={SEO_LOCALES[code].path}
                                hrefLang={SEO_LOCALES[code].hreflang}
                                lang={SEO_LOCALES[code].hreflang}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setLocale(code);
                                    setIsLanguageOpen(false);
                                }}
                                className={`flex items-center justify-between px-3 py-2 rounded-xl text-[13px] font-medium transition-colors ${code === locale
                                    ? 'text-[#0066cc] dark:text-[#0a84ff] bg-[#0066cc]/8 dark:bg-[#0a84ff]/10'
                                    : 'text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-[#00000008] dark:hover:bg-[#ffffff10]'
                                    }`}
                            >
                                {LOCALES[code].label}
                                {code === locale && <Check size={14} />}
                            </a>
                        ))}
                    </nav>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onToggleTheme}
                    title={t.header.toggleTheme}
                    aria-label={t.header.toggleTheme}
                    className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                    {themeMode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </motion.button>
            </div>
        </header>
    );
}
