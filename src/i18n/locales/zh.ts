const zh = {
    header: {
        subtitle: ' - 公众号排版大师',
        switchLanguage: '切换语言',
        toggleTheme: '切换深色 / 浅色模式'
    },
    tabs: {
        editor: '编辑',
        preview: '预览'
    },
    editor: {
        placeholder: '在这里输入 Markdown 内容...',
        pasteHintBefore: '支持直接粘贴 ',
        pasteHintSources: '飞书、Notion或Word等',
        pasteHintAfter: ' 富文本，自动净化为 Markdown',
        pasteHintAfterShort: ' 富文本，自动转化',
        charCount: (count: number) => `${count} 字`
    },
    toolbar: {
        deviceMobile: '手机视图 (480px)',
        deviceTablet: '平板视图 (768px)',
        devicePc: '桌面视图 (PC)',
        scrollSyncEnable: '开启滚动同步',
        scrollSyncDisable: '关闭滚动同步',
        scrollSyncOn: '滚动同步开',
        scrollSyncOff: '滚动同步关',
        scrollSyncOnShort: '同步开',
        scrollSyncOffShort: '同步关',
        exportPdf: '导出 PDF',
        exportHtml: '导出 HTML',
        copy: '复制到公众号',
        copyShort: '复制',
        copying: '正在打包图片...',
        copyingShort: '打包中...',
        copied: '已复制！请贴往公众号',
        copiedShort: '已复制',
        copyFailed: '复制格式失败，请检查浏览器剪贴板权限'
    },
    themeSelector: {
        label: '排版风格',
        all: (count: number) => `全部 ${count} 款`,
        panelTitle: (count: number) => `选择排版风格 · ${count} 款`,
        groupCount: (count: number) => `${count} 款`,
        nameSeparator: '：',
        groups: {
            classic: '经典',
            modern: '潮流',
            extra: '更多风格'
        }
    },
    paste: {
        imageAlt: '图片',
        imageFailed: '粘贴图片失败，请重试'
    },
    // 主题名称与描述的译文，按主题 id 索引；缺省时回退到主题自带的中文文案
    themes: {} as Record<string, { name: string; description: string }>
};

export type Messages = typeof zh;
export default zh;
