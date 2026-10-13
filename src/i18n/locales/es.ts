import type { Messages } from './zh';

const es: Messages = {
    header: {
        subtitle: ' - Editor de artículos para WeChat',
        switchLanguage: 'Cambiar idioma',
        toggleTheme: 'Alternar modo oscuro / claro'
    },
    tabs: {
        editor: 'Editar',
        preview: 'Vista previa'
    },
    editor: {
        placeholder: 'Escribe aquí tu Markdown...',
        pasteHintBefore: 'Pega texto enriquecido de ',
        pasteHintSources: 'Lark, Notion, Word y más',
        pasteHintAfter: ' y se limpia a Markdown automáticamente',
        pasteHintAfterShort: ' — conversión automática',
        charCount: (count: number) => `${count} caracteres`
    },
    toolbar: {
        deviceMobile: 'Vista móvil (480px)',
        deviceTablet: 'Vista tableta (768px)',
        devicePc: 'Vista escritorio (PC)',
        scrollSyncEnable: 'Activar sincronización de desplazamiento',
        scrollSyncDisable: 'Desactivar sincronización de desplazamiento',
        scrollSyncOn: 'Sincronización activada',
        scrollSyncOff: 'Sincronización desactivada',
        scrollSyncOnShort: 'Sinc. sí',
        scrollSyncOffShort: 'Sinc. no',
        exportPdf: 'Exportar PDF',
        exportHtml: 'Exportar HTML',
        copy: 'Copiar para WeChat',
        copyShort: 'Copiar',
        copying: 'Empaquetando imágenes...',
        copyingShort: 'Empaquetando...',
        copied: '¡Copiado! Pégalo en WeChat',
        copiedShort: 'Copiado',
        copyFailed: 'No se pudo copiar. Revisa el permiso del portapapeles en tu navegador.'
    },
    themeSelector: {
        label: 'Tema',
        all: (count: number) => `Los ${count} temas`,
        panelTitle: (count: number) => `Elige un tema · ${count} disponibles`,
        groupCount: (count: number) => `${count}`,
        nameSeparator: ': ',
        groups: {
            classic: 'Clásicos',
            modern: 'Tendencia',
            extra: 'Más estilos'
        }
    },
    paste: {
        imageAlt: 'Imagen',
        imageFailed: 'No se pudo pegar la imagen. Inténtalo de nuevo.'
    },
    themes: {
        apple: { name: 'Mac', description: 'Limpio, moderno y con mucho espacio en blanco: la opción todoterreno para el día a día' },
        claude: { name: 'Claude', description: 'Fondo cálido color avena, ideal para textos largos y ensayos literarios' },
        wechat: { name: 'WeChat nativo', description: 'Los acentos verdes oficiales de siempre: una elección segura y familiar' },
        media: { name: 'NYT', description: 'Papel de periódico color crema con la seriedad del periodismo de fondo' },
        medium: { name: 'Medium', description: 'Tipografía de blog occidental, suave y minimalista, para estilo de vida y ensayos' },
        stripe: { name: 'Stripe', description: 'Estilo de negocios de Silicon Valley, con sensación flotante y resaltados vivos' },
        workspace: { name: 'Lark Workspace', description: 'Azul profundo, sobrio y riguroso, para productividad y gestión' },
        linear: { name: 'Linear', description: 'Puro estilo geek en modo oscuro, el hogar de tutoriales y diarios de desarrollo' },
        retro: { name: 'Retro', description: 'Pergamino envejecido con rojo lacre, para historia, humanidades y arte' },
        bloomberg: { name: 'Bloomberg', description: 'Una vieja terminal de Wall Street, hecha para tecnología dura y código' },
        notion: { name: 'Notion', description: 'Negro, blanco y gris contenidos para escribir sin distracciones' },
        github: { name: 'GitHub', description: 'La vista de lectura que mejor conocen los desarrolladores: puro README' },
        sspai: { name: 'SSPAI', description: 'Referente de los medios digitales chinos: rojo característico y tipografía cuidada' },
        dracula: { name: 'Dracula', description: 'Estética vampírica en púrpura oscuro con un contraste intenso de rosa y cian' },
        nord: { name: 'Nord', description: 'Azul escarcha del Ártico, con una estética de aurora serena y contenida' },
        sakura: { name: 'Sakura', description: 'Estética japonesa en rosa suave para textos delicados y emotivos' },
        ocean: { name: 'Océano profundo', description: 'Azul medianoche con naranja coral para relatos inmersivos de aire marino' },
        mint: { name: 'Menta', description: 'Fondo verde menta refrescante para estilo de vida y bienestar' },
        sunset: { name: 'Atardecer', description: 'Tonos ámbar cálidos de crepúsculo para prosa, viajes y emociones' },
        monokai: { name: 'Monokai', description: 'La paleta clásica del editor de código: el romance definitivo del programador' },
        solarized: { name: 'Solarized', description: 'La clásica paleta cálida para desarrolladores, suave y descansada para la vista' },
        cyberpunk: { name: 'Cyberpunk', description: 'Un mundo cyberpunk de neón donde el magenta choca con el cian' },
        ink: { name: 'Tinta china', description: 'Puro estilo de tinta en blanco y negro: lectura minimalista sin ruido de color' },
        lavender: { name: 'Lavanda', description: 'Romanticismo púrpura de ensueño para textos poéticos e inspirados' },
        forest: { name: 'Bosque profundo', description: 'Verde selva oscuro y profundo para relatos de naturaleza y misterio' },
        glacier: { name: 'Glaciar', description: 'Azul hielo nítido para análisis técnicos e informes serenos y racionales' },
        coffee: { name: 'Café', description: 'Marrones chocolate intensos con la calidez libresca de un café por la tarde' },
        bauhaus: { name: 'Bauhaus', description: 'Colores primarios Bauhaus: rojo, azul y amarillo en choque modernista' },
        copper: { name: 'Cobre', description: 'Bronce antiguo en la oscuridad: un tema oscuro, profundo, cálido y metálico' },
        pastel: { name: 'Pastel', description: 'Tonos macaron suaves y coloridos, con un aire alegre, dulce y juvenil' }
    }
};

export default es;
