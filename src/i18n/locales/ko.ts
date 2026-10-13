import type { Messages } from './zh';

const ko: Messages = {
    header: {
        subtitle: ' - 위챗 공식계정 편집 도구',
        switchLanguage: '언어 변경',
        toggleTheme: '다크 / 라이트 모드 전환'
    },
    tabs: {
        editor: '편집',
        preview: '미리보기'
    },
    editor: {
        placeholder: '여기에 Markdown을 입력하세요...',
        pasteHintBefore: '',
        pasteHintSources: 'Lark, Notion, Word 등',
        pasteHintAfter: '의 서식 있는 텍스트를 붙여넣으면 Markdown으로 자동 정리',
        pasteHintAfterShort: ' 붙여넣기 시 자동 변환',
        charCount: (count: number) => `${count}자`
    },
    toolbar: {
        deviceMobile: '모바일 보기 (480px)',
        deviceTablet: '태블릿 보기 (768px)',
        devicePc: '데스크톱 보기 (PC)',
        scrollSyncEnable: '스크롤 동기화 켜기',
        scrollSyncDisable: '스크롤 동기화 끄기',
        scrollSyncOn: '스크롤 동기화 켬',
        scrollSyncOff: '스크롤 동기화 끔',
        scrollSyncOnShort: '동기화 켬',
        scrollSyncOffShort: '동기화 끔',
        exportPdf: 'PDF 내보내기',
        exportHtml: 'HTML 내보내기',
        copy: '위챗용으로 복사',
        copyShort: '복사',
        copying: '이미지 묶는 중...',
        copyingShort: '처리 중...',
        copied: '복사 완료! 위챗에 붙여넣으세요',
        copiedShort: '복사됨',
        copyFailed: '복사에 실패했습니다. 브라우저의 클립보드 권한을 확인하세요.'
    },
    themeSelector: {
        label: '테마',
        all: (count: number) => `전체 ${count}개 테마`,
        panelTitle: (count: number) => `테마 선택 · ${count}개`,
        groupCount: (count: number) => `${count}개`,
        nameSeparator: ': ',
        groups: {
            classic: '클래식',
            modern: '트렌드',
            extra: '더 많은 스타일'
        }
    },
    paste: {
        imageAlt: '이미지',
        imageFailed: '이미지 붙여넣기에 실패했습니다. 다시 시도하세요.'
    },
    themes: {
        apple: { name: 'Mac', description: '여백을 살린 깔끔하고 모던한 디자인. 일상 기록에 두루 어울리는 기본 선택' },
        claude: { name: 'Claude', description: '따뜻한 오트밀 카키 배경. 긴 글이나 문학적 에세이에 적합' },
        wechat: { name: '위챗 기본', description: '익숙한 공식 그린 스타일. 전통적인 읽기 습관에 맞는 안정적인 선택' },
        media: { name: 'NYT', description: '클래식한 크림색 신문지 느낌. 심층 보도의 진지한 전문성' },
        medium: { name: 'Medium', description: '부드럽고 미니멀한 서양 블로그 스타일. 라이프스타일과 에세이에' },
        stripe: { name: 'Stripe', description: '실리콘밸리 비즈니스 스타일. 떠 있는 듯한 느낌과 선명한 강조' },
        workspace: { name: 'Lark 워크스페이스', description: '차분하고 엄격한 딥블루. 업무 효율과 경영 방법론에 적합' },
        linear: { name: 'Linear', description: '순수한 다크 모드 긱 스타일. 튜토리얼과 개발 로그에 최적' },
        retro: { name: 'Retro', description: '빛바랜 양피지와 봉랍의 붉은색. 인문, 역사, 예술 감상에' },
        bloomberg: { name: 'Bloomberg', description: '월스트리트의 오래된 금융 단말기 재현. 하드코어 테크와 코드 전용' },
        notion: { name: 'Notion', description: '절제된 흑백 그레이. 높은 정보 밀도와 방해 없는 글쓰기' },
        github: { name: 'GitHub', description: '개발자에게 가장 익숙한 읽기 화면. README 그 자체' },
        sspai: { name: 'SSPAI', description: '중국어 디지털 미디어의 기준. 상징적인 레드와 정교한 조판' },
        dracula: { name: 'Dracula', description: '다크 퍼플 뱀파이어 미학. 핑크와 시안의 강렬한 대비' },
        nord: { name: 'Nord', description: '북극의 서리 블루. 차분하고 절제된 오로라 미학' },
        sakura: { name: '벚꽃', description: '부드러운 핑크의 일본풍 미학. 다정하고 감성적인 표현에' },
        ocean: { name: '심해', description: '미드나이트 블루와 코랄 오렌지. 몰입감 있는 바다의 서사' },
        mint: { name: '민트', description: '시원한 민트 그린 배경. 라이프스타일과 건강 콘텐츠에' },
        sunset: { name: '노을', description: '따뜻한 호박색 황혼 분위기. 산문, 여행기, 감성 표현에' },
        monokai: { name: 'Monokai', description: '클래식 코드 에디터 배색. 프로그래머의 궁극적인 낭만' },
        solarized: { name: 'Solarized', description: '클래식한 따뜻한 개발자 배색. 눈이 편안한 읽기 경험' },
        cyberpunk: { name: 'Cyberpunk', description: '네온이 반짝이는 사이버펑크 세계. 마젠타와 시안의 충돌' },
        ink: { name: '수묵', description: '순수한 흑백 수묵 스타일. 색의 방해가 없는 미니멀한 읽기' },
        lavender: { name: '라벤더', description: '몽환적인 보랏빛 낭만. 시적 감성과 영감의 표현에' },
        forest: { name: '밀림', description: '깊고 어두운 정글 그린. 자연과 신비의 몰입형 서사' },
        glacier: { name: '빙하', description: '맑은 아이스 블루. 냉철하고 이성적인 기술 분석과 보고서에' },
        coffee: { name: '커피', description: '진한 초콜릿 브라운. 오후 카페의 따뜻한 책 향기' },
        bauhaus: { name: 'Bauhaus', description: '바우하우스 삼원색 스타일. 빨강, 파랑, 노랑이 부딪히는 모더니즘' },
        copper: { name: '적동', description: '어둠 속 청동의 고풍스러움. 깊고 따뜻한 금속 질감의 다크 톤' },
        pastel: { name: '파스텔', description: '알록달록 부드러운 마카롱 색감. 발랄하고 달콤한 느낌' }
    }
};

export default ko;
