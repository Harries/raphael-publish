import type { Messages } from './zh';

const fr: Messages = {
    header: {
        subtitle: ' - Éditeur d’articles WeChat',
        switchLanguage: 'Changer de langue',
        toggleTheme: 'Basculer mode sombre / clair'
    },
    tabs: {
        editor: 'Éditer',
        preview: 'Aperçu'
    },
    editor: {
        placeholder: 'Saisissez votre Markdown ici...',
        pasteHintBefore: 'Collez du texte enrichi depuis ',
        pasteHintSources: 'Lark, Notion, Word, etc.',
        pasteHintAfter: ' — nettoyé automatiquement en Markdown',
        pasteHintAfterShort: ' — conversion automatique',
        charCount: (count: number) => `${count} caractères`
    },
    toolbar: {
        deviceMobile: 'Vue mobile (480px)',
        deviceTablet: 'Vue tablette (768px)',
        devicePc: 'Vue bureau (PC)',
        scrollSyncEnable: 'Activer la synchronisation du défilement',
        scrollSyncDisable: 'Désactiver la synchronisation du défilement',
        scrollSyncOn: 'Défilement synchronisé',
        scrollSyncOff: 'Défilement libre',
        scrollSyncOnShort: 'Sync. oui',
        scrollSyncOffShort: 'Sync. non',
        exportPdf: 'Exporter en PDF',
        exportHtml: 'Exporter en HTML',
        copy: 'Copier pour WeChat',
        copyShort: 'Copier',
        copying: 'Regroupement des images...',
        copyingShort: 'En cours...',
        copied: 'Copié ! Collez dans WeChat',
        copiedShort: 'Copié',
        copyFailed: 'Échec de la copie. Vérifiez l’autorisation du presse-papiers de votre navigateur.'
    },
    themeSelector: {
        label: 'Thème',
        all: (count: number) => `Les ${count} thèmes`,
        panelTitle: (count: number) => `Choisir un thème · ${count} disponibles`,
        groupCount: (count: number) => `${count}`,
        nameSeparator: ' : ',
        groups: {
            classic: 'Classiques',
            modern: 'Tendance',
            extra: 'Autres styles'
        }
    },
    paste: {
        imageAlt: 'Image',
        imageFailed: 'Impossible de coller l’image. Veuillez réessayer.'
    },
    themes: {
        apple: { name: 'Mac', description: 'Épuré, moderne et généreux en espaces blancs : le choix polyvalent du quotidien' },
        claude: { name: 'Claude', description: 'Fond chaleureux couleur avoine, pensé pour les longs textes et les essais littéraires' },
        wechat: { name: 'WeChat natif', description: 'Les accents verts officiels que les lecteurs connaissent : un choix sûr et familier' },
        media: { name: 'NYT', description: 'Papier journal crème classique, avec le sérieux du grand reportage' },
        medium: { name: 'Medium', description: 'Typographie de blog occidentale, douce et minimaliste, pour l’art de vivre et les essais' },
        stripe: { name: 'Stripe', description: 'Style business de la Silicon Valley, effet flottant et mises en avant éclatantes' },
        workspace: { name: 'Lark Workspace', description: 'Bleu profond, sobre et rigoureux, pour la productivité et le management' },
        linear: { name: 'Linear', description: 'Pur style geek en mode sombre, le repaire des tutoriels et journaux de développement' },
        retro: { name: 'Retro', description: 'Parchemin vieilli et rouge cire à cacheter, pour l’histoire, les lettres et l’art' },
        bloomberg: { name: 'Bloomberg', description: 'Un vieux terminal de Wall Street ressuscité, taillé pour la tech pure et le code' },
        notion: { name: 'Notion', description: 'Noir, blanc et gris tout en retenue, pour une écriture dense et sans distraction' },
        github: { name: 'GitHub', description: 'La vue de lecture préférée des développeurs : ambiance README garantie' },
        sspai: { name: 'SSPAI', description: 'Référence des médias numériques chinois : rouge emblématique et typographie soignée' },
        dracula: { name: 'Dracula', description: 'Esthétique vampire violet sombre, avec un contraste rose et cyan percutant' },
        nord: { name: 'Nord', description: 'Bleu givre arctique, une esthétique d’aurore calme et retenue' },
        sakura: { name: 'Sakura', description: 'Esthétique japonaise rose tendre pour des textes doux et sensibles' },
        ocean: { name: 'Océan profond', description: 'Bleu nuit et orange corail pour des récits immersifs aux accents marins' },
        mint: { name: 'Menthe', description: 'Fond vert menthe rafraîchissant pour l’art de vivre et le bien-être' },
        sunset: { name: 'Coucher de soleil', description: 'Tons ambrés du crépuscule pour la prose, les carnets de voyage et l’émotion' },
        monokai: { name: 'Monokai', description: 'La palette classique de l’éditeur de code : le romantisme ultime du développeur' },
        solarized: { name: 'Solarized', description: 'La palette chaude classique des développeurs, douce et reposante pour les yeux' },
        cyberpunk: { name: 'Cyberpunk', description: 'Un monde cyberpunk aux néons où le magenta percute le cyan' },
        ink: { name: 'Encre de Chine', description: 'Pur style à l’encre noir et blanc : une lecture minimaliste sans bruit coloré' },
        lavender: { name: 'Lavande', description: 'Romantisme violet et rêveur pour des textes poétiques et inspirés' },
        forest: { name: 'Forêt profonde', description: 'Vert jungle sombre et profond pour des récits de nature et de mystère' },
        glacier: { name: 'Glacier', description: 'Bleu glace limpide pour des analyses techniques et rapports posés' },
        coffee: { name: 'Café', description: 'Bruns chocolat intenses, avec la chaleur studieuse d’un café l’après-midi' },
        bauhaus: { name: 'Bauhaus', description: 'Couleurs primaires du Bauhaus : rouge, bleu et jaune en choc moderniste' },
        copper: { name: 'Cuivre', description: 'Bronze ancien dans la nuit : un thème sombre, profond, chaud et métallique' },
        pastel: { name: 'Pastel', description: 'Tons macaron doux et colorés, pour une ambiance vive, sucrée et juvénile' }
    }
};

export default fr;
