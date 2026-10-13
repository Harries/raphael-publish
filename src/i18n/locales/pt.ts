import type { Messages } from './zh';

const pt: Messages = {
    header: {
        subtitle: ' - Editor de artigos para WeChat',
        switchLanguage: 'Mudar idioma',
        toggleTheme: 'Alternar modo escuro / claro'
    },
    tabs: {
        editor: 'Editar',
        preview: 'Pré-visualizar'
    },
    editor: {
        placeholder: 'Digite seu Markdown aqui...',
        pasteHintBefore: 'Cole texto formatado do ',
        pasteHintSources: 'Lark, Notion, Word e outros',
        pasteHintAfter: ' — limpo automaticamente para Markdown',
        pasteHintAfterShort: ' — conversão automática',
        charCount: (count: number) => `${count} caracteres`
    },
    toolbar: {
        deviceMobile: 'Visualização móvel (480px)',
        deviceTablet: 'Visualização tablet (768px)',
        devicePc: 'Visualização desktop (PC)',
        scrollSyncEnable: 'Ativar sincronização de rolagem',
        scrollSyncDisable: 'Desativar sincronização de rolagem',
        scrollSyncOn: 'Sincronização ativada',
        scrollSyncOff: 'Sincronização desativada',
        scrollSyncOnShort: 'Sinc. on',
        scrollSyncOffShort: 'Sinc. off',
        exportPdf: 'Exportar PDF',
        exportHtml: 'Exportar HTML',
        copy: 'Copiar para o WeChat',
        copyShort: 'Copiar',
        copying: 'Empacotando imagens...',
        copyingShort: 'Empacotando...',
        copied: 'Copiado! Cole no WeChat',
        copiedShort: 'Copiado',
        copyFailed: 'Falha ao copiar. Verifique a permissão da área de transferência do navegador.'
    },
    themeSelector: {
        label: 'Tema',
        all: (count: number) => `Todos os ${count} temas`,
        panelTitle: (count: number) => `Escolha um tema · ${count} disponíveis`,
        groupCount: (count: number) => `${count}`,
        nameSeparator: ': ',
        groups: {
            classic: 'Clássicos',
            modern: 'Tendências',
            extra: 'Mais estilos'
        }
    },
    paste: {
        imageAlt: 'Imagem',
        imageFailed: 'Falha ao colar a imagem. Tente novamente.'
    },
    themes: {
        apple: { name: 'Mac', description: 'Limpo, moderno e com bastante espaço em branco: a escolha versátil do dia a dia' },
        claude: { name: 'Claude', description: 'Fundo quente em tom de aveia, feito para textos longos e ensaios literários' },
        wechat: { name: 'WeChat nativo', description: 'Os detalhes verdes oficiais que os leitores já conhecem: uma escolha segura' },
        media: { name: 'NYT', description: 'Papel de jornal creme clássico, com a seriedade da reportagem aprofundada' },
        medium: { name: 'Medium', description: 'Tipografia de blog ocidental, suave e minimalista, para estilo de vida e ensaios' },
        stripe: { name: 'Stripe', description: 'Estilo de negócios do Vale do Silício, com sensação flutuante e destaques vivos' },
        workspace: { name: 'Lark Workspace', description: 'Azul profundo, sóbrio e rigoroso, para produtividade e gestão' },
        linear: { name: 'Linear', description: 'Puro estilo geek em modo escuro, o lar dos tutoriais e diários de desenvolvimento' },
        retro: { name: 'Retro', description: 'Pergaminho envelhecido com vermelho lacre, para história, humanidades e arte' },
        bloomberg: { name: 'Bloomberg', description: 'Um antigo terminal de Wall Street renascido, feito para tecnologia e código' },
        notion: { name: 'Notion', description: 'Preto, branco e cinza contidos para uma escrita densa e sem distrações' },
        github: { name: 'GitHub', description: 'A tela de leitura que os desenvolvedores mais conhecem: clima de README' },
        sspai: { name: 'SSPAI', description: 'Referência da mídia digital chinesa: vermelho marcante e tipografia refinada' },
        dracula: { name: 'Dracula', description: 'Estética vampiresca em roxo escuro, com contraste marcante de rosa e ciano' },
        nord: { name: 'Nord', description: 'Azul gelo do Ártico, com uma estética de aurora calma e contida' },
        sakura: { name: 'Sakura', description: 'Estética japonesa em rosa suave para textos delicados e sensíveis' },
        ocean: { name: 'Oceano profundo', description: 'Azul meia-noite com laranja coral para narrativas imersivas de ar marinho' },
        mint: { name: 'Menta', description: 'Fundo verde-menta refrescante para estilo de vida e bem-estar' },
        sunset: { name: 'Pôr do sol', description: 'Tons âmbar quentes do entardecer para prosa, viagens e emoções' },
        monokai: { name: 'Monokai', description: 'A paleta clássica do editor de código: o romance supremo do programador' },
        solarized: { name: 'Solarized', description: 'A clássica paleta quente dos desenvolvedores, suave e confortável para os olhos' },
        cyberpunk: { name: 'Cyberpunk', description: 'Um mundo cyberpunk em neon onde o magenta colide com o ciano' },
        ink: { name: 'Nanquim', description: 'Puro estilo nanquim em preto e branco: leitura minimalista sem ruído de cor' },
        lavender: { name: 'Lavanda', description: 'Romantismo roxo e sonhador para textos poéticos e inspirados' },
        forest: { name: 'Floresta densa', description: 'Verde selva escuro e profundo para histórias imersivas de natureza e mistério' },
        glacier: { name: 'Geleira', description: 'Azul gelo límpido para análises técnicas e relatórios serenos e racionais' },
        coffee: { name: 'Café', description: 'Marrons de chocolate intensos com o aconchego de um café à tarde' },
        bauhaus: { name: 'Bauhaus', description: 'Cores primárias da Bauhaus: vermelho, azul e amarelo em choque modernista' },
        copper: { name: 'Cobre', description: 'Bronze antigo na escuridão: um tema escuro, profundo, quente e metálico' },
        pastel: { name: 'Pastel', description: 'Tons macaron suaves e coloridos, com um ar alegre, doce e jovem' }
    }
};

export default pt;
