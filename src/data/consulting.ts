import type { Locale } from '../i18n/locale';

export interface ConsultingService {
  labelEn: string;
  title: string;
  body: string;
  items: string[];
}

export interface ConsultingContent {
  heroLabel: string;
  heroTitle: string;

  businessLabel: string;
  businessTitle: string;
  businessBody: string[];

  servicesLabel: string;
  services: ConsultingService[];

  casesLabel: string;
  casesTitle: string;
  casesLink: string;
  contactLink: string;
}

const content: Record<Locale, ConsultingContent> = {
  ja: {
    heroLabel: 'SERVICE',
    heroTitle: 'コンサルティング事業',

    businessLabel: 'OUR BUSINESS',
    businessTitle: '課題解決と成長を支援',
    businessBody: [
      'アレーライズは、アジア×新規事業開発を軸に幅広く支援を展開しています。戦略策定や計画だけでなく、実際の事業運営まで行い机上の空論や検討だけで終わらせません。',
      'DX領域では、日本だけでなくネパール、ベトナムに拠点を持つパートナー企業と共にシステム開発を行っています。新規事業の検討、実際の戦略策定からPOCの実施だけでなく、システムの開発から保守・運用まで行えることが強みです。',
      'スピードの速いアジアでのビジネスを成功させるカギとなる現地のインサイトを得るための強固なネットワークも有しています。',
    ],

    servicesLabel: 'OUR SERVICES',
    services: [
      {
        labelEn: 'RESEARCH',
        title: '海外進出検討',
        body: '日系企業の海外市場への進出を検討する際に必要な包括的なサポートを提供します。マーケット調査や消費者調査、現地での足を使ったリサーチから戦略策定、現地法規の理解まで、グローバルな視点での事業展開の検討をサポート。',
        items: [
          '市場調査と分析',
          '進出戦略の立案と実行計画',
          '現地法規とビジネス習慣の理解',
          'パートナー企業の選定とマッチング',
          'リスク管理とコンプライアンス',
        ],
      },
      {
        labelEn: 'NEW BUSINESS DEVELOPMENT',
        title: '新規事業開発',
        body: '新規事業の機会を発見し、アイデアから市場投入までのプロセスを支援します。市場のニーズに応える革新的なビジネスモデルの開発を通じて、企業の成長と競争力強化を促進します。',
        items: [
          '機会発見と概念設計',
          'ビジネスモデルの策定',
          'プロトタイピングと市場テスト',
          'ローンチ戦略の立案',
          '成長戦略と拡大支援',
          'DXとシステム開発',
        ],
      },
      {
        labelEn: 'BUSINESS SUPPORT',
        title: 'オペレーション支援',
        body: '現地オペレーションの立ち上げから運営の最適化まで、幅広い支援を提供します。現地での立ち上げ後は、COO以下の代行も可能。普段の業務も丸ごとお任せいただけます。現地のオペレーション改善やプロセスの効率化、コスト削減などの業務改善サポートも。',
        items: [
          'オペレーション代行',
          '業務プロセス改善と研修',
          'コスト削減と効率化戦略',
          'サプライチェーン管理',
          'ITシステムの導入と最適化',
        ],
      },
      {
        labelEn: 'RELOCATION SUPPORT',
        title: '移住サポート',
        body: '海外進出企業、および社員やその家族のための移住サポートを提供します。住居探しから学校選択、医療機関の紹介から各種手続き代行まで、新しい国での生活を全面的にサポートします。',
        items: [
          '住居選定と契約支援',
          '教育機関の選定と入学手続き',
          '医療機関の紹介と健康管理',
          '生活情報の提供とオリエンテーション',
          '移住後のよろず相談とアドバイザリー',
        ],
      },
    ],

    casesLabel: 'CASES',
    casesTitle: '支援実績',
    casesLink: '実績紹介をみる',
    contactLink: 'お問い合わせはこちら',
  },

  en: {
    heroLabel: 'SERVICE',
    heroTitle: 'Consulting',

    businessLabel: 'OUR BUSINESS',
    businessTitle: 'Solving problems, supporting growth',
    businessBody: [
      'Allerise works across a wide range of support with Asia and new business development at its centre. We do not stop at strategy and planning — we run the business itself, so the work never ends as a desk exercise.',
      'In DX we build systems together with partner firms based in Japan, Nepal, and Vietnam. Our strength is covering the whole path: exploring the opportunity, setting strategy, running the proof of concept, and then developing, maintaining, and operating the system.',
      'We also hold a strong network for the local insight that decides whether fast-moving businesses in Asia succeed.',
    ],

    servicesLabel: 'OUR SERVICES',
    services: [
      {
        labelEn: 'RESEARCH',
        title: 'Market entry research',
        body: 'Comprehensive support for Japanese companies considering entry into overseas markets — market and consumer research, on-the-ground fieldwork, strategy, and understanding local regulation, all from a global perspective.',
        items: [
          'Market research and analysis',
          'Entry strategy and execution planning',
          'Local regulation and business practice',
          'Partner identification and matching',
          'Risk management and compliance',
        ],
      },
      {
        labelEn: 'NEW BUSINESS DEVELOPMENT',
        title: 'New business development',
        body: 'We find the opportunity and support the process from idea to market. By developing business models that answer real market needs, we drive growth and competitiveness.',
        items: [
          'Opportunity discovery and concept design',
          'Business model design',
          'Prototyping and market testing',
          'Launch strategy',
          'Growth and scale-up support',
          'DX and system development',
        ],
      },
      {
        labelEn: 'BUSINESS SUPPORT',
        title: 'Operations support',
        body: 'From standing up local operations to optimising how they run. After launch we can act as COO and below, taking on day-to-day operations entirely — along with process improvement, efficiency, and cost reduction.',
        items: [
          'Operations on your behalf',
          'Process improvement and training',
          'Cost reduction and efficiency',
          'Supply chain management',
          'IT system rollout and optimisation',
        ],
      },
      {
        labelEn: 'RELOCATION SUPPORT',
        title: 'Relocation support',
        body: 'Relocation support for expanding companies and for employees and their families — from finding housing and choosing schools to introducing medical care and handling the paperwork of life in a new country.',
        items: [
          'Housing selection and contracts',
          'Schools and admissions',
          'Medical care and health management',
          'Living information and orientation',
          'Ongoing advice after the move',
        ],
      },
    ],

    casesLabel: 'CASES',
    casesTitle: 'Selected work',
    casesLink: 'View our work',
    contactLink: 'Contact us',
  },
};

export function getConsultingContent(locale: Locale = 'ja'): ConsultingContent {
  return content[locale];
}
