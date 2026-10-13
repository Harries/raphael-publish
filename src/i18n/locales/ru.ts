import type { Messages } from './zh';

const ru: Messages = {
    header: {
        subtitle: ' — редактор статей для WeChat',
        switchLanguage: 'Сменить язык',
        toggleTheme: 'Переключить тёмную / светлую тему'
    },
    tabs: {
        editor: 'Редактор',
        preview: 'Просмотр'
    },
    editor: {
        placeholder: 'Введите Markdown здесь...',
        pasteHintBefore: 'Вставьте форматированный текст из ',
        pasteHintSources: 'Lark, Notion, Word и др.',
        pasteHintAfter: ' — он автоматически превратится в Markdown',
        pasteHintAfterShort: ' — автоконвертация',
        charCount: (count: number) => `${count} симв.`
    },
    toolbar: {
        deviceMobile: 'Мобильный вид (480px)',
        deviceTablet: 'Планшетный вид (768px)',
        devicePc: 'Десктопный вид (PC)',
        scrollSyncEnable: 'Включить синхронную прокрутку',
        scrollSyncDisable: 'Выключить синхронную прокрутку',
        scrollSyncOn: 'Синхр. прокрутка вкл.',
        scrollSyncOff: 'Синхр. прокрутка выкл.',
        scrollSyncOnShort: 'Синхр. вкл.',
        scrollSyncOffShort: 'Синхр. выкл.',
        exportPdf: 'Экспорт в PDF',
        exportHtml: 'Экспорт в HTML',
        copy: 'Копировать для WeChat',
        copyShort: 'Копировать',
        copying: 'Упаковка изображений...',
        copyingShort: 'Упаковка...',
        copied: 'Скопировано! Вставьте в WeChat',
        copiedShort: 'Скопировано',
        copyFailed: 'Не удалось скопировать. Проверьте разрешение на доступ к буферу обмена в браузере.'
    },
    themeSelector: {
        label: 'Тема',
        all: (count: number) => `Все темы: ${count}`,
        panelTitle: (count: number) => `Выберите тему · всего ${count}`,
        groupCount: (count: number) => `${count}`,
        nameSeparator: ': ',
        groups: {
            classic: 'Классика',
            modern: 'Тренды',
            extra: 'Другие стили'
        }
    },
    paste: {
        imageAlt: 'Изображение',
        imageFailed: 'Не удалось вставить изображение. Попробуйте ещё раз.'
    },
    themes: {
        apple: { name: 'Mac', description: 'Чисто, современно и много воздуха — универсальный выбор на каждый день' },
        claude: { name: 'Claude', description: 'Тёплый овсяный фон для лонгридов и литературных эссе' },
        wechat: { name: 'WeChat стандарт', description: 'Знакомые официальные зелёные акценты — надёжный привычный выбор' },
        media: { name: 'NYT', description: 'Классическая кремовая газетная бумага и серьёзность больших репортажей' },
        medium: { name: 'Medium', description: 'Мягкая минималистичная блоговая вёрстка для лайфстайла и эссе' },
        stripe: { name: 'Stripe', description: 'Деловой стиль Кремниевой долины: эффект парения и яркие акценты' },
        workspace: { name: 'Lark Workspace', description: 'Строгий глубокий синий для текстов о продуктивности и управлении' },
        linear: { name: 'Linear', description: 'Чистый гик-стиль в тёмном режиме — дом для туториалов и девлогов' },
        retro: { name: 'Retro', description: 'Состаренный пергамент и сургучный красный — для истории и искусства' },
        bloomberg: { name: 'Bloomberg', description: 'Старый терминал с Уолл-стрит — для хардкорной техники и кода' },
        notion: { name: 'Notion', description: 'Сдержанные чёрный, белый и серый для плотного письма без отвлечений' },
        github: { name: 'GitHub', description: 'Самый привычный разработчикам вид чтения — настоящий README' },
        sspai: { name: 'SSPAI', description: 'Эталон китайских цифровых медиа: фирменный красный и тонкая типографика' },
        dracula: { name: 'Dracula', description: 'Тёмно-фиолетовая вампирская эстетика с контрастом розового и циана' },
        nord: { name: 'Nord', description: 'Арктический морозный синий и спокойная эстетика северного сияния' },
        sakura: { name: 'Сакура', description: 'Нежно-розовая японская эстетика для мягких, чувственных текстов' },
        ocean: { name: 'Глубокий океан', description: 'Полночный синий и коралловый оранжевый для морских историй с погружением' },
        mint: { name: 'Мята', description: 'Прохладный мятно-зелёный фон для лайфстайла и здоровья' },
        sunset: { name: 'Закат', description: 'Тёплые янтарные тона сумерек для прозы, путевых заметок и эмоций' },
        monokai: { name: 'Monokai', description: 'Классическая палитра редактора кода — главная романтика программиста' },
        solarized: { name: 'Solarized', description: 'Классическая тёплая палитра разработчиков, мягкая и щадящая глаза' },
        cyberpunk: { name: 'Cyberpunk', description: 'Неоновый мир киберпанка, где пурпур сталкивается с цианом' },
        ink: { name: 'Тушь', description: 'Чистый чёрно-белый стиль туши: минималистичное чтение без цветового шума' },
        lavender: { name: 'Лаванда', description: 'Мечтательная фиолетовая романтика для поэтичных, вдохновенных текстов' },
        forest: { name: 'Густой лес', description: 'Глубокая тёмная зелень джунглей для историй о природе и тайне' },
        glacier: { name: 'Ледник', description: 'Чистый ледяной синий для спокойной технической аналитики и отчётов' },
        coffee: { name: 'Кофе', description: 'Насыщенные шоколадные оттенки и книжное тепло кафе после полудня' },
        bauhaus: { name: 'Bauhaus', description: 'Основные цвета Баухауса — красный, синий и жёлтый в духе модернизма' },
        copper: { name: 'Медь', description: 'Древняя бронза во тьме: глубокая, тёплая, металлическая тёмная тема' },
        pastel: { name: 'Пастель', description: 'Мягкие разноцветные тона макарон — живо, сладко и по-юношески' }
    }
};

export default ru;
