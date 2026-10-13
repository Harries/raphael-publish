import type { Messages } from './zh';

const de: Messages = {
    header: {
        subtitle: ' - WeChat-Artikel-Editor',
        switchLanguage: 'Sprache wechseln',
        toggleTheme: 'Dunkel- / Hellmodus umschalten'
    },
    tabs: {
        editor: 'Bearbeiten',
        preview: 'Vorschau'
    },
    editor: {
        placeholder: 'Markdown hier eingeben...',
        pasteHintBefore: 'Rich Text aus ',
        pasteHintSources: 'Lark, Notion, Word u. a.',
        pasteHintAfter: ' einfügen – wird automatisch zu Markdown bereinigt',
        pasteHintAfterShort: ' einfügen – automatisch konvertiert',
        charCount: (count: number) => `${count} Zeichen`
    },
    toolbar: {
        deviceMobile: 'Mobilansicht (480px)',
        deviceTablet: 'Tablet-Ansicht (768px)',
        devicePc: 'Desktop-Ansicht (PC)',
        scrollSyncEnable: 'Scroll-Synchronisierung einschalten',
        scrollSyncDisable: 'Scroll-Synchronisierung ausschalten',
        scrollSyncOn: 'Scroll-Sync an',
        scrollSyncOff: 'Scroll-Sync aus',
        scrollSyncOnShort: 'Sync an',
        scrollSyncOffShort: 'Sync aus',
        exportPdf: 'PDF exportieren',
        exportHtml: 'HTML exportieren',
        copy: 'Für WeChat kopieren',
        copyShort: 'Kopieren',
        copying: 'Bilder werden gebündelt...',
        copyingShort: 'Bündeln...',
        copied: 'Kopiert! In WeChat einfügen',
        copiedShort: 'Kopiert',
        copyFailed: 'Kopieren fehlgeschlagen. Bitte prüfe die Zwischenablage-Berechtigung deines Browsers.'
    },
    themeSelector: {
        label: 'Design',
        all: (count: number) => `Alle ${count} Designs`,
        panelTitle: (count: number) => `Design wählen · ${count} verfügbar`,
        groupCount: (count: number) => `${count}`,
        nameSeparator: ': ',
        groups: {
            classic: 'Klassiker',
            modern: 'Im Trend',
            extra: 'Weitere Stile'
        }
    },
    paste: {
        imageAlt: 'Bild',
        imageFailed: 'Bild konnte nicht eingefügt werden. Bitte erneut versuchen.'
    },
    themes: {
        apple: { name: 'Mac', description: 'Klar, modern und mit viel Weißraum – die Allround-Wahl für den Alltag' },
        claude: { name: 'Claude', description: 'Warmer Haferton als Hintergrund, ideal für lange Texte und literarische Essays' },
        wechat: { name: 'WeChat Nativ', description: 'Die vertrauten offiziellen Grünakzente – eine sichere, gewohnte Wahl' },
        media: { name: 'NYT', description: 'Klassisches cremefarbenes Zeitungspapier mit der Seriosität tiefgehender Reportagen' },
        medium: { name: 'Medium', description: 'Weiche, minimalistische Blog-Typografie für Lifestyle-Texte und Essays' },
        stripe: { name: 'Stripe', description: 'Silicon-Valley-Business-Stil mit schwebender Anmutung und kräftigen Akzenten' },
        workspace: { name: 'Lark Workspace', description: 'Ruhiges, strenges Tiefblau für Produktivitäts- und Management-Themen' },
        linear: { name: 'Linear', description: 'Purer Geek-Stil im Dunkelmodus – die Heimat für Tutorials und Entwicklerlogs' },
        retro: { name: 'Retro', description: 'Gealtertes Pergament mit Siegellackrot, für Geschichte, Geisteswissenschaft und Kunst' },
        bloomberg: { name: 'Bloomberg', description: 'Ein altes Wall-Street-Terminal neu belebt – gemacht für harte Technik und Code' },
        notion: { name: 'Notion', description: 'Zurückhaltendes Schwarz, Weiß und Grau für dichtes, ablenkungsfreies Schreiben' },
        github: { name: 'GitHub', description: 'Die Leseansicht, die Entwickler am besten kennen – echtes README-Feeling' },
        sspai: { name: 'SSPAI', description: 'Maßstab chinesischer Digitalmedien: markantes Rot und feine Typografie' },
        dracula: { name: 'Dracula', description: 'Dunkelviolette Vampirästhetik mit kräftigem Kontrast aus Pink und Cyan' },
        nord: { name: 'Nord', description: 'Arktisches Frostblau mit ruhiger, zurückhaltender Polarlicht-Ästhetik' },
        sakura: { name: 'Sakura', description: 'Zartrosa japanische Ästhetik für sanfte, gefühlvolle Texte' },
        ocean: { name: 'Tiefsee', description: 'Mitternachtsblau mit Korallenorange für immersives, maritimes Erzählen' },
        mint: { name: 'Minze', description: 'Kühler mintgrüner Hintergrund für Lifestyle- und Gesundheitsthemen' },
        sunset: { name: 'Sonnenuntergang', description: 'Warme Bernsteintöne der Dämmerung für Prosa, Reiseberichte und Gefühle' },
        monokai: { name: 'Monokai', description: 'Die klassische Code-Editor-Palette – die ultimative Romantik für Programmierer' },
        solarized: { name: 'Solarized', description: 'Die klassische warme Entwicklerpalette, weich und augenschonend' },
        cyberpunk: { name: 'Cyberpunk', description: 'Eine neonleuchtende Cyberpunk-Welt, in der Magenta auf Cyan trifft' },
        ink: { name: 'Tusche', description: 'Purer schwarz-weißer Tuschestil: minimalistisches Lesen ohne Farbrauschen' },
        lavender: { name: 'Lavendel', description: 'Verträumte violette Romantik für poetische, inspirierte Texte' },
        forest: { name: 'Tiefer Wald', description: 'Tiefes, dunkles Dschungelgrün für immersive Geschichten über Natur und Geheimnis' },
        glacier: { name: 'Gletscher', description: 'Klares Eisblau für ruhige, sachliche Technikanalysen und Berichte' },
        coffee: { name: 'Kaffee', description: 'Satte Schokoladenbrauntöne mit der Wärme eines Cafés am Nachmittag' },
        bauhaus: { name: 'Bauhaus', description: 'Bauhaus-Grundfarben – Rot, Blau und Gelb im modernistischen Zusammenspiel' },
        copper: { name: 'Kupfer', description: 'Alte Bronze im Dunkeln: ein tiefes, warmes, metallisches Dunkel-Design' },
        pastel: { name: 'Pastell', description: 'Weiche, bunte Macaron-Töne mit lebhafter, süßer, jugendlicher Note' }
    }
};

export default de;
