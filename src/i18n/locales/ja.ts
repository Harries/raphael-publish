import type { Messages } from './zh';

const ja: Messages = {
    header: {
        subtitle: ' - WeChat 記事組版ツール',
        switchLanguage: '言語を切り替え',
        toggleTheme: 'ダーク / ライトモードを切り替え'
    },
    tabs: {
        editor: '編集',
        preview: 'プレビュー'
    },
    editor: {
        placeholder: 'ここに Markdown を入力...',
        pasteHintBefore: '',
        pasteHintSources: 'Lark・Notion・Word など',
        pasteHintAfter: ' のリッチテキストを貼り付けると Markdown に自動変換',
        pasteHintAfterShort: ' を貼り付けて自動変換',
        charCount: (count: number) => `${count} 文字`
    },
    toolbar: {
        deviceMobile: 'モバイル表示 (480px)',
        deviceTablet: 'タブレット表示 (768px)',
        devicePc: 'デスクトップ表示 (PC)',
        scrollSyncEnable: 'スクロール同期をオンにする',
        scrollSyncDisable: 'スクロール同期をオフにする',
        scrollSyncOn: 'スクロール同期オン',
        scrollSyncOff: 'スクロール同期オフ',
        scrollSyncOnShort: '同期オン',
        scrollSyncOffShort: '同期オフ',
        exportPdf: 'PDF を書き出す',
        exportHtml: 'HTML を書き出す',
        copy: 'WeChat 用にコピー',
        copyShort: 'コピー',
        copying: '画像をまとめています...',
        copyingShort: '処理中...',
        copied: 'コピー完了！WeChat に貼り付け',
        copiedShort: 'コピー完了',
        copyFailed: 'コピーに失敗しました。ブラウザのクリップボード権限を確認してください。'
    },
    themeSelector: {
        label: 'テーマ',
        all: (count: number) => `全 ${count} テーマ`,
        panelTitle: (count: number) => `テーマを選択 · 全 ${count} 種`,
        groupCount: (count: number) => `${count} 種`,
        nameSeparator: '：',
        groups: {
            classic: 'クラシック',
            modern: 'トレンド',
            extra: 'その他のスタイル'
        }
    },
    paste: {
        imageAlt: '画像',
        imageFailed: '画像の貼り付けに失敗しました。もう一度お試しください。'
    },
    themes: {
        apple: { name: 'Mac', description: '余白を活かしたクリーンでモダンなデザイン。日常の記録に最適な万能テーマ' },
        claude: { name: 'Claude', description: '温かみのあるオートミール色の背景。長文や文学的なエッセイ向け' },
        wechat: { name: 'WeChat 標準', description: '公式おなじみのグリーン。読者が慣れ親しんだ安心の選択' },
        media: { name: 'NYT', description: 'クリーム色の新聞紙風。重厚な調査報道のような専門性' },
        medium: { name: 'Medium', description: 'やわらかくミニマルな欧米ブログ風。ライフスタイルやエッセイに' },
        stripe: { name: 'Stripe', description: 'シリコンバレーのビジネススタイル。浮遊感と鮮やかなハイライト' },
        workspace: { name: 'Lark ワークスペース', description: '落ち着いた深いブルー。仕事術やマネジメントの記事に' },
        linear: { name: 'Linear', description: '純粋なダークモードのギークスタイル。チュートリアルや開発ログに' },
        retro: { name: 'Retro', description: '古びた羊皮紙と封蝋の赤。歴史・人文・芸術の鑑賞に' },
        bloomberg: { name: 'Bloomberg', description: 'ウォール街の金融端末を再現。硬派なテックとコード表示向け' },
        notion: { name: 'Notion', description: '抑制の効いた白黒グレー。情報密度が高く集中できる執筆に' },
        github: { name: 'GitHub', description: '開発者に最もなじみ深い読書画面。まさに README の雰囲気' },
        sspai: { name: 'SSPAI', description: '中国語デジタルメディアの定番。象徴的な赤と洗練された組版' },
        dracula: { name: 'Dracula', description: 'ダークパープルの吸血鬼美学。ピンクとシアンの鮮烈な対比' },
        nord: { name: 'Nord', description: '北極のフロストブルー。静かで抑制の効いたオーロラの美学' },
        sakura: { name: '桜', description: 'やわらかなピンクの和の美学。やさしく感性豊かな表現に' },
        ocean: { name: '深海', description: 'ミッドナイトブルーとコーラルオレンジ。没入感のある海の物語' },
        mint: { name: 'ミント', description: '涼やかなミントグリーン。ライフスタイルや健康系の内容に' },
        sunset: { name: '夕焼け', description: '温かな琥珀色のたそがれ。随筆や旅行記、感情表現に' },
        monokai: { name: 'Monokai', description: '定番のコードエディタ配色。プログラマーの究極のロマン' },
        solarized: { name: 'Solarized', description: '定番の暖色系開発者パレット。目にやさしい読書体験' },
        cyberpunk: { name: 'Cyberpunk', description: 'ネオンきらめくサイバーパンクの世界。マゼンタとシアンの衝突' },
        ink: { name: '水墨', description: '純粋な白黒の水墨スタイル。色に邪魔されないミニマルな読書' },
        lavender: { name: 'ラベンダー', description: '夢のような紫のロマンチックな雰囲気。詩情とひらめきの表現に' },
        forest: { name: '密林', description: '深く暗いジャングルグリーン。自然と神秘の没入型ストーリー' },
        glacier: { name: '氷河', description: '澄んだアイスブルー。冷静で理性的な技術分析やレポートに' },
        coffee: { name: 'コーヒー', description: '濃厚なチョコレートブラウン。午後のカフェのような温かさ' },
        bauhaus: { name: 'Bauhaus', description: 'バウハウスの三原色。赤・青・黄がぶつかるモダニズム' },
        copper: { name: '赤銅', description: '闇に浮かぶ青銅の古雅。深く温かいメタリックなダークトーン' },
        pastel: { name: 'パステル', description: 'カラフルでやわらかなマカロンカラー。元気で甘い若々しさ' }
    }
};

export default ja;
