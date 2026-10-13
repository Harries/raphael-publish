import type { Messages } from './zh';

const zhTW: Messages = {
    header: {
        subtitle: ' - 公眾號排版大師',
        switchLanguage: '切換語言',
        toggleTheme: '切換深色 / 淺色模式'
    },
    tabs: {
        editor: '編輯',
        preview: '預覽'
    },
    editor: {
        placeholder: '在這裡輸入 Markdown 內容...',
        pasteHintBefore: '支援直接貼上 ',
        pasteHintSources: '飛書、Notion 或 Word 等',
        pasteHintAfter: ' 富文字，自動淨化為 Markdown',
        pasteHintAfterShort: ' 富文字，自動轉換',
        charCount: (count: number) => `${count} 字`
    },
    toolbar: {
        deviceMobile: '手機檢視 (480px)',
        deviceTablet: '平板檢視 (768px)',
        devicePc: '桌面檢視 (PC)',
        scrollSyncEnable: '開啟捲動同步',
        scrollSyncDisable: '關閉捲動同步',
        scrollSyncOn: '捲動同步開',
        scrollSyncOff: '捲動同步關',
        scrollSyncOnShort: '同步開',
        scrollSyncOffShort: '同步關',
        exportPdf: '匯出 PDF',
        exportHtml: '匯出 HTML',
        copy: '複製到公眾號',
        copyShort: '複製',
        copying: '正在打包圖片...',
        copyingShort: '打包中...',
        copied: '已複製！請貼到公眾號',
        copiedShort: '已複製',
        copyFailed: '複製格式失敗，請檢查瀏覽器剪貼簿權限'
    },
    themeSelector: {
        label: '排版風格',
        all: (count: number) => `全部 ${count} 款`,
        panelTitle: (count: number) => `選擇排版風格 · ${count} 款`,
        groupCount: (count: number) => `${count} 款`,
        nameSeparator: '：',
        groups: {
            classic: '經典',
            modern: '潮流',
            extra: '更多風格'
        }
    },
    paste: {
        imageAlt: '圖片',
        imageFailed: '貼上圖片失敗，請重試'
    },
    themes: {
        apple: { name: 'Mac', description: '純淨現代的極致留白，適合日常記錄的萬能首選' },
        claude: { name: 'Claude', description: '溫潤的燕麥卡其色底，適合深度長文或文學哲思' },
        wechat: { name: '微信公眾號原生', description: '原汁原味的官方綠底紋，滿足傳統閱讀習慣的穩妥之選' },
        media: { name: 'NYT', description: '經典米黃色新聞紙，極強的嚴肅深度報導專業感' },
        medium: { name: 'Medium', description: '簡約柔和的西式部落格排版，適合生活誌與隨筆沉澱' },
        stripe: { name: 'Stripe', description: '前沿的矽谷極客商務風，高懸浮感與高亮視覺系' },
        workspace: { name: '飛書效率', description: '沉穩嚴謹的深藍配色，適合職場效率與管理方法論' },
        linear: { name: 'Linear', description: '純正的暗夜賽博極客風，程式教學與開發日誌的終極歸宿' },
        retro: { name: 'Retro', description: '做舊羊皮紙搭配火漆紅，適合人文歷史與藝術鑑賞' },
        bloomberg: { name: 'Bloomberg', description: '還原華爾街古老金融終端機，硬派科技程式碼展示專屬' },
        notion: { name: 'Notion', description: '極致克制的黑白灰，純粹資訊密度與無干擾寫作' },
        github: { name: 'GitHub', description: '開發者最熟悉的閱讀介面，README 即視感' },
        sspai: { name: '少數派', description: '中文數位媒體標竿，經典紅色標識與精緻排版' },
        dracula: { name: 'Dracula', description: '暗紫色賽博吸血鬼美學，粉青撞色的視覺衝擊' },
        nord: { name: 'Nord', description: '北歐極地冰霜藍，冷靜克制的極光美學' },
        sakura: { name: '櫻花', description: '柔粉色系日式美學，溫柔感性的少女心表達' },
        ocean: { name: '深海', description: '午夜深藍配珊瑚橘，沉浸式的海洋系敘事感' },
        mint: { name: '薄荷', description: '清涼薄荷綠底色，適合生活風格與健康類內容' },
        sunset: { name: '日落', description: '暖琥珀色調的黃昏意境，散文遊記與情感表達' },
        monokai: { name: 'Monokai', description: '經典程式碼編輯器配色，工程師的終極浪漫' },
        solarized: { name: 'Solarized', description: '經典暖色調開發者配色，柔和護眼的閱讀體驗' },
        cyberpunk: { name: 'Cyberpunk', description: '霓虹閃爍的賽博龐克世界，洋紅與青的極致碰撞' },
        ink: { name: '水墨', description: '純粹的黑白水墨風，零色彩干擾的極簡閱讀' },
        lavender: { name: '薰衣草', description: '夢幻紫色調的浪漫氛圍，詩意與靈感的溫柔表達' },
        forest: { name: '密林', description: '深邃的暗綠色叢林，自然與神祕感的沉浸式敘事' },
        glacier: { name: '冰川', description: '清冽的冰藍色調，冷靜理性的科技分析與報告' },
        coffee: { name: '咖啡', description: '醇厚巧克力棕色調，午後咖啡館的溫暖書卷氣' },
        bauhaus: { name: 'Bauhaus', description: '包浩斯三原色風格，紅藍黃碰撞的現代主義先鋒' },
        copper: { name: '赤銅', description: '暗夜中的青銅古韻，深沉溫暖的金屬質感暗色調' },
        pastel: { name: '彩虹糖', description: '多彩柔和的馬卡龍色系，活潑甜美的少年感表達' }
    }
};

export default zhTW;
