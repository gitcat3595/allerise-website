import type { Locale } from '../i18n/locale';

export type EngagementType = 'speaking' | 'mentoring' | 'advisory';

export type MentoringGroupId = 'new-business-ggg' | 'new-business-hakuhodo' | 'apt-women';

export interface Panelist {
  role: string;
  name: string;
  affiliation: string;
}

export interface EngagementContent {
  organization: string;
  program: string;
  role: string;
  description: string;
  date?: string;
  audience?: string;
  venue?: string;
  topics: string[];
  panelists?: Panelist[];
}

export interface Engagement extends EngagementContent {
  id: string;
  type: EngagementType;
  url?: string;
  group?: MentoringGroupId;
}

interface EngagementRecord {
  id: string;
  type: EngagementType;
  url?: string;
  group?: MentoringGroupId;
  ja: EngagementContent;
  en: EngagementContent;
}

export const mentoringGroupLabels: Record<Locale, Record<MentoringGroupId, string | null>> = {
  ja: {
    'new-business-ggg': '新規事業開発系',
    'new-business-hakuhodo': '新規事業開発系',
    'apt-women': null,
  },
  en: {
    'new-business-ggg': 'New business development',
    'new-business-hakuhodo': 'New business development',
    'apt-women': null,
  },
};

export const mentoringGroupOrder: MentoringGroupId[] = [
  'new-business-ggg',
  'new-business-hakuhodo',
  'apt-women',
];

const engagementRecords: EngagementRecord[] = [
  {
    id: 'tech-gala-nagoya',
    type: 'speaking',
    url: 'https://techgala.jp/',
    ja: {
      organization: 'TechGALA Japan 2026',
      program: 'グローバル時代の多様性が拓くリーダーシップの未来',
      role: '登壇',
      description:
        '愛知県名古屋市で開催された「TechGALA Japan 2026」にて、「グローバル時代の多様性が拓くリーダーシップの未来」セッションに登壇。多様なバックグラウンドを持つリーダーが、変化の激しい時代にどのようにキャリアと組織を導くかを語りました。',
      date: '2026年1月29日',
      venue: '愛知県名古屋市',
      topics: ['リーダーシップ', '多様性', 'グローバルキャリア', 'スタートアップ・エコシステム'],
      panelists: [
        { role: 'モデレーター', name: '岩佐 大輝', affiliation: '株式会社GRA 代表取締役CEO' },
        { role: '登壇者', name: '三木 アリッサ', affiliation: 'アクアテオン株式会社 CEO' },
        { role: '登壇者', name: '柳沢 紀子', affiliation: 'アレーライズ株式会社 代表取締役' },
        { role: '登壇者', name: '繁田 奈歩', affiliation: 'インフォブリッジ 代表' },
      ],
    },
    en: {
      organization: 'TechGALA Japan 2026',
      program: 'The Future of Leadership Opened by Diversity in the Global Era',
      role: 'Speaker',
      description:
        'Spoke at TechGALA Japan 2026 in Nagoya on the session “The Future of Leadership Opened by Diversity in the Global Era,” exploring how leaders with diverse backgrounds navigate careers and organizations in a rapidly changing world.',
      date: 'January 29, 2026',
      venue: 'Nagoya, Aichi, Japan',
      topics: ['Leadership', 'Diversity', 'Global career', 'Startup ecosystem'],
      panelists: [
        { role: 'Moderator', name: 'Daiki Iwasa', affiliation: 'CEO, GRA Inc.' },
        { role: 'Speaker', name: 'Alissa Miki', affiliation: 'CEO, Aqua Theon Inc.' },
        { role: 'Speaker', name: 'Noriko Kelly Yang', affiliation: 'CEO, Allerise Pte. Ltd.' },
        { role: 'Speaker', name: 'Naho Shigeta', affiliation: 'Representative, InfoBridge' },
      ],
    },
  },
  {
    id: 'schoo-parallel-work',
    type: 'speaking',
    url: 'https://schoo.jp/teacher/2472',
    ja: {
      organization: 'Schoo（スクー）',
      program: 'パラレルワーク実践 ―わがままに生きる術を学び、実践する―',
      role: '登壇',
      description:
        'オンライン学習プラットフォームSchooの共同講座「パラレルワーク実践」に登壇。フルタイム勤務を続けながら複数の仕事を並行するパラレルワークの実践経験をもとに、自分のキャリアを自分でデザインする考え方と具体的な進め方を伝えました。',
      topics: ['パラレルワーク', 'キャリアデザイン', '複業・副業', 'ワークライフ'],
    },
    en: {
      organization: 'Schoo',
      program: 'Parallel Work in Practice — Learn and apply the art of living on your own terms',
      role: 'Speaker',
      description:
        'Spoke in Schoo’s co-created course on parallel work, sharing how to design your own career while practicing multiple roles alongside full-time work.',
      topics: ['Parallel work', 'Career design', 'Side projects', 'Work-life'],
    },
  },
  {
    id: 'yame-high-school',
    type: 'speaking',
    ja: {
      organization: '高校生向け講演',
      program: '福岡県立八女高等学校（修学旅行講演）',
      role: '講演',
      description:
        'シンガポール修学旅行中の高校生向けに、グローバルキャリア、海外生活、学びと行動をテーマとした講演を実施しました。',
      date: '2024年11月',
      audience: '高校2年生 121名、教職員',
      venue: 'シンガポール',
      topics: ['グローバルキャリア', '海外での学びと行動', '自分で決める力'],
    },
    en: {
      organization: 'High school speaking engagement',
      program: 'Yame High School (study tour lecture)',
      role: 'Speaker',
      description:
        'Delivered a lecture to high school students during their study tour in Singapore on global careers, life overseas, learning, and taking action.',
      date: 'November 2024',
      audience: '121 second-year students and faculty',
      venue: 'Singapore',
      topics: ['Global career', 'Learning and action abroad', 'Decision-making'],
    },
  },
  {
    id: 'ggg-the-y',
    type: 'mentoring',
    group: 'new-business-ggg',
    url: 'https://www.greenwaygrid.global/the-y-%E9%81%8E%E5%8E%BB%E9%96%8B%E5%82%AC%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%AE%E7%B4%B9%E4%BB%8B/',
    ja: {
      organization: 'Greenway Grid Global（GGG）',
      program: 'THE-Y',
      role: 'メンタリング',
      description:
        'アジアを中心に新規事業開発を手掛けるGGGが2019年より開催する人材育成プログラム「THE-Y」（延べ200人受講）においてメンタリングを担当。グローバルに活躍する先駆者のマインドや新規事業開発のエッセンスを学ぶプログラムで、参加者のビジネスアイデア検討やリーダーシップ育成を支援しています。',
      topics: [
        '新規事業開発',
        'グローバルリーダーシップ',
        'ビジネスアイデアの検討・プレゼンテーション',
        'キャリア実現',
      ],
    },
    en: {
      organization: 'Greenway Grid Global (GGG)',
      program: 'THE-Y',
      role: 'Mentoring',
      description:
        'Mentors in GGG’s THE-Y talent program (200+ alumni since 2019), supporting participants in developing business ideas and leadership through real new-business know-how and global mindsets.',
      topics: [
        'New business development',
        'Global leadership',
        'Business ideation and pitching',
        'Career development',
      ],
    },
  },
  {
    id: 'ggg-infinity',
    type: 'mentoring',
    group: 'new-business-ggg',
    ja: {
      organization: 'Greenway Grid Global（GGG）',
      program: 'Infinity',
      role: 'メンタリング',
      description:
        'GGGが国際協力で展開するビジネス創出プログラム「Infinity」においてメンタリングを担当。アイデアの発想からビジネスモデル構築、POC（概念実証）の実施まで、起業の一連のプロセスを伴走し、参加者の事業化とプレゼンテーション力の向上を支援しています。',
      topics: ['新規事業開発', 'POC・事業検証', 'ピッチ・プレゼンテーション', 'グローバル展開'],
    },
    en: {
      organization: 'Greenway Grid Global (GGG)',
      program: 'Infinity',
      role: 'Mentoring',
      description:
        'Mentors in GGG’s Infinity business creation program, supporting participants from ideation and business modeling through proof-of-concept and pitching.',
      topics: ['New business development', 'POC and validation', 'Pitching', 'Global expansion'],
    },
  },
  {
    id: 'hakuhodo-voc',
    type: 'mentoring',
    group: 'new-business-hakuhodo',
    url: 'https://prtimes.jp/main/html/rd/p/000000095.000036543.html',
    ja: {
      organization: '博報堂ＤＹホールディングス',
      program: 'Ventures of Creativity（VoC）',
      role: 'メンタリング',
      description:
        '博報堂ＤＹグループ横断の社内ベンチャープログラム「Ventures of Creativity」においてメンタリングを担当。グループ全社員を対象にマーケティング領域のイノベーティブな事業案を募集し、ビジネスコンテストで選出されたチームへのスタートアップ投資・アクセラレーションを支援するプログラムです。',
      date: '2024年〜',
      topics: [
        '新規事業開発',
        '社内ベンチャー',
        'マーケティングイノベーション',
        'アクセラレーション',
      ],
    },
    en: {
      organization: 'Hakuhodo DY Holdings',
      program: 'Ventures of Creativity (VoC)',
      role: 'Mentoring',
      description:
        'Mentors teams in Hakuhodo DY’s group-wide intrapreneurship program, supporting marketing innovation ideas from contest selection through investment and acceleration.',
      date: 'From 2024',
      topics: [
        'New business development',
        'Corporate venture',
        'Marketing innovation',
        'Acceleration',
      ],
    },
  },
  {
    id: 'apt-women',
    type: 'mentoring',
    group: 'apt-women',
    url: 'https://apt-women.metro.tokyo.lg.jp/teacher_mentor/teacher_noriko_yanagisawa.html',
    ja: {
      organization: '東京都',
      program: 'APT Women（女性ベンチャー成長促進事業）',
      role: 'メンタリング',
      description:
        '東京都が実施する女性起業家向けアクセラレーションプログラム「APT Women」においてメンタリングを担当。スケールアップや海外展開に向けた経営知識の習得、ビジネスモデルのブラッシュアップ、事業成長の伴走支援を行っています。',
      topics: ['女性起業家支援', 'スケールアップ', '海外展開', '経営・事業戦略'],
    },
    en: {
      organization: 'Tokyo Metropolitan Government',
      program: 'APT Women (Women Venture Growth Program)',
      role: 'Mentoring',
      description:
        'Mentors female founders in Tokyo’s APT Women accelerator, supporting scale-up, overseas expansion, business model refinement, and growth.',
      topics: ['Women founders', 'Scale-up', 'Overseas expansion', 'Business strategy'],
    },
  },
];

function localize(record: EngagementRecord, locale: Locale): Engagement {
  return {
    id: record.id,
    type: record.type,
    url: record.url,
    group: record.group,
    ...record[locale],
  };
}

export const engagements: Engagement[] = engagementRecords.map((r) => localize(r, 'ja'));

export const advisoryScope = {
  ja: {
    title: '各種アドバイザリー',
    description:
      '新規事業、キャリア、人材育成、経営層向けなど、領域を問わずアドバイザリー業務に対応しています。戦略の壁打ちから実行支援まで、ご依頼内容とフェーズに応じて関与の形を設計します。',
    areas: ['新規事業', 'キャリア', '人材育成', '経営層向け'],
  },
  en: {
    title: 'Advisory services',
    description:
      'We provide advisory support across new business, career, talent development, and executive coaching. From strategic sparring to hands-on execution, we tailor our involvement to your needs and stage.',
    areas: ['New business', 'Career', 'Talent development', 'Executive leadership'],
  },
};

export function getEngagements(locale: Locale) {
  return engagementRecords.map((r) => localize(r, locale));
}

export function engagementsByType(type: EngagementType, locale: Locale = 'ja') {
  return getEngagements(locale).filter((e) => e.type === type);
}

export function mentoringByGroup(locale: Locale = 'ja') {
  const labels = mentoringGroupLabels[locale];
  return mentoringGroupOrder
    .map((groupId) => ({
      id: groupId,
      label: labels[groupId],
      items: getEngagements(locale).filter((e) => e.type === 'mentoring' && e.group === groupId),
    }))
    .filter((group) => group.items.length > 0);
}

export function getAdvisoryScope(locale: Locale) {
  return advisoryScope[locale];
}

/** @deprecated Use getEngagements(locale) */
export type SpeakingEngagement = Engagement;
export const speakingEngagements = engagements;
