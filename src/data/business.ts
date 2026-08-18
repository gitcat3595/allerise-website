import type { Locale } from '../i18n/locale';

/**
 * `primary` lines are the three pillars shown on the home page.
 * `secondary` lines are supporting services kept for detail and SEO.
 */
export type BusinessTier = 'primary' | 'secondary';

export interface BusinessLineRecord {
  id: string;
  slug: string;
  labelEn: string;
  tier: BusinessTier;
  audienceEn: string;
  ja: {
    label: string;
    audience: string;
    tagline?: string;
    summary: string;
    items: string[];
  };
  en: {
    label: string;
    audience: string;
    tagline?: string;
    summary: string;
    items: string[];
  };
}

export interface BusinessLine {
  id: string;
  slug: string;
  labelEn: string;
  labelJa: string;
  tier: BusinessTier;
  audienceEn: string;
  audience: string;
  label: string;
  tagline?: string;
  summary: string;
  items: string[];
}

const businessLineRecords: BusinessLineRecord[] = [
  {
    id: 'new-business',
    slug: 'new-business-development',
    labelEn: 'NEW BUSINESS DEVELOPMENT',
    tier: 'primary',
    audienceEn: 'FOR BUSINESS',
    ja: {
      label: '新規事業開発・アジア展開',
      audience: '事業をつくる',
      tagline: 'コンサルティング／アドバイザリー／メンタリング',
      summary:
        'シンガポールを拠点に、アジア・海外を軸とした新規事業開発を支援します。市場リサーチと現地調査から、戦略策定、POC（概念実証）、そして現地オペレーションの立ち上げまで。机上の戦略で終わらせず、実行と数字が動くところまで伴走するのがアレーライズの立ち位置です。経営層への継続アドバイザリー、アクセラレータープログラムや社内新規事業制度でのメンタリングも担っています。',
      items: [
        '海外・アジア市場のリサーチと現地調査',
        '進出戦略・事業戦略の策定',
        'ビジネスモデル設計とPOCの実施',
        '現地法人設立・オペレーション立ち上げ支援',
        '経営層向けアドバイザリー（継続・スポット）',
        'アクセラレーター・新規事業制度でのメンタリング',
      ],
    },
    en: {
      label: 'New Business & Asia Expansion',
      audience: 'For business',
      tagline: 'Consulting · Advisory · Mentoring',
      summary:
        'From our base in Singapore we build new businesses with Asia at the centre — market and on-the-ground research, strategy, proof of concept, and standing up local operations. We do not stop at the deck: we stay until execution moves. We also serve as ongoing advisors to leadership teams and as mentors in accelerator programmes and corporate venture schemes.',
      items: [
        'Market and on-the-ground research across Asia',
        'Market-entry and business strategy',
        'Business model design and proof of concept',
        'Local entity setup and operations launch',
        'Executive advisory, ongoing or ad hoc',
        'Mentoring for accelerators and corporate venture programmes',
      ],
    },
  },
  {
    id: 'training',
    slug: 'training',
    labelEn: 'TRAINING & DEVELOPMENT',
    tier: 'primary',
    audienceEn: 'FOR ORGANIZATIONS',
    ja: {
      label: '法人向け研修・組織開発',
      audience: '組織を変える',
      tagline: 'セッション × 個別メンタリング',
      summary:
        '集合セッションと一人ひとりへの個別メンタリングを組み合わせた、法人向けのプログラムです。組織変革、リーダー育成、女性のキャリア支援、そして福利厚生としての導入まで、目的に応じて設計します。「ライフアライメント」をはじめとする独自アセスメントで現在地を可視化し、思考を構造化する独自メソッドで、学びを日々の判断と行動に接続します。',
      items: [
        '独自アセスメント（ライフアライメント）による現在地の可視化',
        '集合セッション（組織変革・リーダー育成・キャリア）',
        '参加者一人ひとりへの個別メンタリング',
        '女性のキャリア支援プログラム',
        '福利厚生としての継続導入',
        '30日・90日後の定点観測とフォローアップ',
      ],
    },
    en: {
      label: 'Corporate Training & Organizational Development',
      audience: 'For organizations',
      tagline: 'Group sessions × 1:1 mentoring',
      summary:
        'Programmes for companies that pair group sessions with one-to-one mentoring for each participant. We design around your purpose — organizational change, leadership development, women’s career support, or an ongoing employee-benefit programme. Our proprietary assessments, including Life Alignment, make the current state visible, and our own method for structuring thinking connects the learning to everyday decisions.',
      items: [
        'Proprietary assessment (Life Alignment) to map the current state',
        'Group sessions on change, leadership, and career',
        'One-to-one mentoring for every participant',
        'Career support programmes for women',
        'Ongoing delivery as an employee benefit',
        'Pulse checks and follow-up at 30 and 90 days',
      ],
    },
  },
  {
    id: 'individual',
    slug: 'individual',
    labelEn: 'DISCUSSION PARTNER',
    tier: 'primary',
    audienceEn: 'FOR INDIVIDUALS',
    ja: {
      label: '個人向けプログラム',
      audience: '人が動き出す',
      tagline: 'ディスカッションパートナー',
      summary:
        'コーチでもコンサルタントでもカウンセラーでもない、ニュートラルで安全な関係性のなかで、感情のアウトプットと思考の整理を行います。答えを渡すのではなく、話すことで自分の考えを知り、次の一歩を自分で選べる状態をつくる。個人の「苦しくない成長」に伴走する、5ヶ月間の対話プログラムです。',
      items: [
        '5ヶ月間・月2回（全10回）のオンライン対話',
        '月額 55,000円（5ヶ月間）',
        '感情のアウトプットと思考の構造化',
        'キャリア・事業・人生の意思決定の壁打ち',
        '独自アセスメントによる現在地の確認',
        'セッション間の振り返りとテーマ設定',
      ],
    },
    en: {
      label: 'Programme for Individuals',
      audience: 'For individuals',
      tagline: 'Discussion partner',
      summary:
        'Not a coach, not a consultant, not a counsellor — a neutral, safe relationship in which you can put feelings into words and give your thinking a structure. We do not hand over answers. By talking, you come to know what you actually think, and choose your own next step. A five-month dialogue programme for growth that does not have to hurt.',
      items: [
        'Five months, twice a month — ten online sessions',
        '¥55,000 per month for five months',
        'Space to voice emotion and structure thinking',
        'A sounding board for career, business, and life decisions',
        'Proprietary assessment to map where you are now',
        'Reflection and theme-setting between sessions',
      ],
    },
  },
  {
    id: 'overseas',
    slug: 'overseas-expansion',
    labelEn: 'OVERSEAS EXPANSION',
    tier: 'secondary',
    audienceEn: 'FOR BUSINESS',
    ja: {
      label: '海外進出支援',
      audience: '事業をつくる',
      summary:
        'シンガポールをはじめとするアジア市場への進出を、調査・戦略策定から現地オペレーションの立ち上げまで支援します。現地リサーチ、パートナー選定、進出後の運営代行、社員・ご家族の移住サポートまで、フェーズに応じて対応します。',
      items: [
        '市場調査・現地リサーチ',
        '進出戦略の立案と実行計画',
        '現地法規とビジネス慣習の理解',
        'パートナー企業の選定とマッチング',
        '現地オペレーションの立ち上げ・代行',
        '移住・リロケーションサポート',
      ],
    },
    en: {
      label: 'Overseas Expansion',
      audience: 'For business',
      summary:
        'Support for entering Asian markets including Singapore — from research and strategy to launching local operations, partner selection, post-entry management, and relocation support for employees and their families.',
      items: [
        'Market research and local insights',
        'Expansion strategy and execution planning',
        'Local regulations and business practices',
        'Partner identification and matching',
        'Local operations launch and management',
        'Relocation support',
      ],
    },
  },
  {
    id: 'advisory',
    slug: 'advisory',
    labelEn: 'ADVISORY',
    tier: 'secondary',
    audienceEn: 'FOR BUSINESS',
    ja: {
      label: 'アドバイザリー',
      audience: '事業をつくる',
      tagline: '新規事業・海外展開・人材育成',
      summary:
        '経営層・事業責任者に対し、新規事業、海外展開、人材育成の各領域でアドバイザリー業務を行います。経営会議への参加、定期的な壁打ち、プロジェクト単位の伴走など、必要な関与度合いに応じて柔軟に対応します。',
      items: [
        '新規事業の戦略レビューと推進支援',
        '海外展開に関する経営アドバイザリー',
        '人材育成・組織開発に関する助言',
        '事業開発チームの伴走支援',
        '役員・管理職向けセッション',
      ],
    },
    en: {
      label: 'Advisory',
      audience: 'For business',
      tagline: 'New business · Expansion · Talent',
      summary:
        'Advisory for executives and business leaders across new business, overseas expansion, and talent development — from a seat in management meetings to regular sparring sessions and project-based support.',
      items: [
        'New business strategy review and acceleration',
        'Executive advisory on overseas expansion',
        'Talent and organization development',
        'Hands-on support for business development teams',
        'Sessions for executives and managers',
      ],
    },
  },
  {
    id: 'speaking',
    slug: 'speaking',
    labelEn: 'SPEAKING',
    tier: 'secondary',
    audienceEn: 'FOR ORGANIZATIONS',
    ja: {
      label: '講演・登壇',
      audience: '組織を変える',
      summary:
        '学校・企業・団体向けの講演と、人材育成プログラムにおけるメンタリングを行っています。キャリア、グローバルビジネス、新規事業、行動と意思決定をテーマとした講演のほか、新規事業開発系プログラムでのメンタリング実績があります。',
      items: [],
    },
    en: {
      label: 'Speaking',
      audience: 'For organizations',
      summary:
        'Speaking for schools, companies, and organizations, plus mentoring in talent development programmes. Topics include career, global business, new ventures, action, and decision-making.',
      items: [],
    },
  },
];

function localizeLine(record: BusinessLineRecord, locale: Locale): BusinessLine {
  const content = record[locale];
  return {
    id: record.id,
    slug: record.slug,
    labelEn: record.labelEn,
    labelJa: record.ja.label,
    tier: record.tier,
    audienceEn: record.audienceEn,
    audience: content.audience,
    label: content.label,
    tagline: content.tagline,
    summary: content.summary,
    items: content.items,
  };
}

export const businessLines: BusinessLine[] = businessLineRecords.map((r) => localizeLine(r, 'ja'));

export function getBusinessLines(locale: Locale = 'ja') {
  return businessLineRecords.map((r) => localizeLine(r, locale));
}

/** The three pillars: business, organizations, individuals. */
export function getPrimaryBusinessLines(locale: Locale = 'ja') {
  return getBusinessLines(locale).filter((line) => line.tier === 'primary');
}

/** Supporting services shown below the three pillars. */
export function getSecondaryBusinessLines(locale: Locale = 'ja') {
  return getBusinessLines(locale).filter((line) => line.tier === 'secondary');
}

export function getBusinessLine(slug: string, locale: Locale = 'ja') {
  const record = businessLineRecords.find((b) => b.slug === slug);
  return record ? localizeLine(record, locale) : undefined;
}
