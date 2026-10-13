import type { Messages } from './zh';

const en: Messages = {
    header: {
        subtitle: ' - WeChat Article Formatter',
        switchLanguage: 'Switch language',
        toggleTheme: 'Toggle dark / light mode'
    },
    tabs: {
        editor: 'Edit',
        preview: 'Preview'
    },
    editor: {
        placeholder: 'Type your Markdown here...',
        pasteHintBefore: 'Paste rich text from ',
        pasteHintSources: 'Lark, Notion, Word and more',
        pasteHintAfter: ' — cleaned into Markdown automatically',
        pasteHintAfterShort: ' — auto-converted',
        charCount: (count: number) => `${count} chars`
    },
    toolbar: {
        deviceMobile: 'Mobile view (480px)',
        deviceTablet: 'Tablet view (768px)',
        devicePc: 'Desktop view (PC)',
        scrollSyncEnable: 'Turn on scroll sync',
        scrollSyncDisable: 'Turn off scroll sync',
        scrollSyncOn: 'Scroll sync on',
        scrollSyncOff: 'Scroll sync off',
        scrollSyncOnShort: 'Sync on',
        scrollSyncOffShort: 'Sync off',
        exportPdf: 'Export PDF',
        exportHtml: 'Export HTML',
        copy: 'Copy for WeChat',
        copyShort: 'Copy',
        copying: 'Bundling images...',
        copyingShort: 'Bundling...',
        copied: 'Copied! Paste into WeChat',
        copiedShort: 'Copied',
        copyFailed: 'Copy failed. Please check the clipboard permission of your browser.'
    },
    themeSelector: {
        label: 'Theme',
        all: (count: number) => `All ${count} themes`,
        panelTitle: (count: number) => `Choose a theme · ${count} available`,
        groupCount: (count: number) => `${count}`,
        nameSeparator: ': ',
        groups: {
            classic: 'Classic',
            modern: 'Trending',
            extra: 'More styles'
        }
    },
    paste: {
        imageAlt: 'Image',
        imageFailed: 'Failed to paste the image. Please try again.'
    },
    themes: {
        apple: { name: 'Mac', description: 'Clean, modern and generous with whitespace — the all-round pick for everyday writing' },
        claude: { name: 'Claude', description: 'Warm oatmeal-khaki background, made for long-form and literary essays' },
        wechat: { name: 'WeChat Native', description: 'The official green accents readers already know — a safe, familiar choice' },
        media: { name: 'NYT', description: 'Classic cream newsprint with the gravitas of in-depth reporting' },
        medium: { name: 'Medium', description: 'Soft, minimal Western blog typography for lifestyle pieces and essays' },
        stripe: { name: 'Stripe', description: 'Silicon Valley business style with a floating feel and vivid highlights' },
        workspace: { name: 'Lark Workspace', description: 'Steady, rigorous deep blue for productivity and management writing' },
        linear: { name: 'Linear', description: 'Pure dark-mode geek style, the natural home of tutorials and dev logs' },
        retro: { name: 'Retro', description: 'Aged parchment with sealing-wax red, for history, humanities and art' },
        bloomberg: { name: 'Bloomberg', description: 'An old Wall Street terminal reborn — built for hardcore tech and code' },
        notion: { name: 'Notion', description: 'Restrained black, white and grey for dense, distraction-free writing' },
        github: { name: 'GitHub', description: 'The reading view developers know best — instant README vibes' },
        sspai: { name: 'SSPAI', description: 'A benchmark of Chinese digital media: signature red and refined typography' },
        dracula: { name: 'Dracula', description: 'Dark purple vampire aesthetics with a punchy pink-and-cyan contrast' },
        nord: { name: 'Nord', description: 'Arctic frost blue with calm, restrained aurora aesthetics' },
        sakura: { name: 'Sakura', description: 'Soft pink Japanese aesthetics for gentle, heartfelt writing' },
        ocean: { name: 'Deep Ocean', description: 'Midnight blue with coral orange for immersive, ocean-like storytelling' },
        mint: { name: 'Mint', description: 'A cool mint-green backdrop for lifestyle and wellness content' },
        sunset: { name: 'Sunset', description: 'Warm amber dusk tones for prose, travel notes and personal stories' },
        monokai: { name: 'Monokai', description: 'The classic code editor palette — a programmer\'s ultimate romance' },
        solarized: { name: 'Solarized', description: 'The classic warm developer palette, soft and easy on the eyes' },
        cyberpunk: { name: 'Cyberpunk', description: 'A neon-lit cyberpunk world where magenta collides with cyan' },
        ink: { name: 'Ink Wash', description: 'Pure black-and-white ink style: minimal reading with zero color noise' },
        lavender: { name: 'Lavender', description: 'Dreamy purple romance for poetic and inspired writing' },
        forest: { name: 'Deep Forest', description: 'Deep, dark jungle green for immersive stories of nature and mystery' },
        glacier: { name: 'Glacier', description: 'Crisp ice blue for calm, rational tech analysis and reports' },
        coffee: { name: 'Coffee', description: 'Rich chocolate browns with the bookish warmth of an afternoon café' },
        bauhaus: { name: 'Bauhaus', description: 'Bauhaus primaries — red, blue and yellow in a modernist clash' },
        copper: { name: 'Copper', description: 'Ancient bronze in the dark: a deep, warm, metallic dark theme' },
        pastel: { name: 'Pastel Candy', description: 'Soft, colorful macaron tones with a lively, sweet, youthful feel' }
    }
};

export default en;
