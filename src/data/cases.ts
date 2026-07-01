import type { Locale } from '../i18n/locale';

export interface CaseStudyContent {
  category: string;
  title: string;
  client: string;
  overview: string;
  support: { title: string; body: string }[];
  result: string;
}

export interface CaseStudy extends CaseStudyContent {
  slug: string;
  date: string;
  image: string;
}

interface CaseStudyRecord {
  slug: string;
  date: string;
  image: string;
  ja: CaseStudyContent;
  en: CaseStudyContent;
}

const caseRecords: CaseStudyRecord[] = [
  {
    slug: 'india-partnership',
    date: '2024.02.18',
    image: '/images/cases/india-partnership.jpg',
    ja: {
      category: '海外進出検討',
      title: '【インド】インターネット系企業の海外パートナーシップ検討',
      client: 'インターネット関連企業（大手企業）',
      overview:
        'インド市場への進出を目指すインターネット系企業のためのパートナー探しと現地視察のサポート。このプロジェクトでは、現地での商談サポート、業界シンポジウムでの通訳およびレポート作成、インド市場における参入可能性の検討など、幅広いサービスが提供されました。',
      support: [
        {
          title: 'パートナー探し',
          body: 'インド市場でのビジネス展開に適したパートナー企業のリサーチと選定。有望なパートナーとの初期商談の通訳とサポート。',
        },
        {
          title: '現地視察',
          body: 'インド市場への理解を深めるための現地視察の計画と実施。主要企業の訪問および現地の視察。',
        },
        {
          title: '通訳サービス',
          body: '商談や業界シンポジウムでの通訳サービスの提供。言語の障壁を越えたスムーズなコミュニケーションをサポート。各セッションの内容のレポートの提供。',
        },
        {
          title: '市場調査',
          body: 'インドにおけるインターネット関連市場の動向、競合分析、消費者行動の調査。市場進出戦略のための事前リサーチとレポート作成。',
        },
      ],
      result:
        '現地視察と市場調査を通じて、インド市場の深い理解を得ることができ、進出戦略の精緻化に寄与。シンポジウムでのネットワーキングと情報収集により、新たなビジネス機会を発見。効果的なパートナー探しと初期商談のサポートにより、インド市場におけるビジネス展開に向けた関係性の構築ができた。',
    },
    en: {
      category: 'Overseas expansion',
      title: '[India] Partnership exploration for an internet company',
      client: 'Internet-related company (large enterprise)',
      overview:
        'Partner search and local visit support for an internet company exploring entry into India, including on-site meeting support, symposium interpretation and reporting, and market entry assessment.',
      support: [
        {
          title: 'Partner search',
          body: 'Research and selection of suitable partners in India, plus interpretation support for initial meetings.',
        },
        {
          title: 'Local visits',
          body: 'Planning and execution of site visits to deepen understanding of the Indian market.',
        },
        {
          title: 'Interpretation',
          body: 'Interpretation for meetings and industry symposiums, plus session reports.',
        },
        {
          title: 'Market research',
          body: 'Research on India’s internet market, competitive landscape, and consumer behavior.',
        },
      ],
      result:
        'Deepened understanding of the Indian market and refined expansion strategy through site visits and research, while building relationships for future business development.',
    },
  },
  {
    slug: 'singapore-relocation-support',
    date: '2024.02.18',
    image: '/images/cases/singapore-relocation-support.jpg',
    ja: {
      category: '移住支援',
      title: '【シンガポール】日系企業の社員向け移住サポート',
      client: 'メディア系企業（スタートアップ）',
      overview:
        'シンガポールに新たに進出した日系企業の社員及びその家族向けに、住まい、医療、教育などのリロケーションサポートを提供するプロジェクト。シンガポール現地での生活サポートを通じて、現地での新生活の立ち上げを支援。',
      support: [
        {
          title: '医療サービス',
          body: '現地の医療システム案内と信頼できる医療機関の紹介および手配。医療保険の比較検討と契約のサポート。',
        },
        {
          title: '教育機関の紹介',
          body: '子供の年齢と教育ニーズに合わせた学校の選定サポート。ニーズヒアリング後に候補の学校の詳細リストの作成、現地での学校見学と学校関係者へのヒアリングの代行、入学手続きの代行など事務作業まで幅広く支援。',
        },
        {
          title: '現地オリエンテーション',
          body: '新生活に必要な情報提供および、現地での各種業者手配およびサポート。文化、法律、日常生活など多岐にわたるアドバイスを提供。',
        },
      ],
      result:
        'アレーライズのサポートにより、社員及び家族はシンガポールでの新生活をスムーズに開始。移住に関するストレスが大幅に軽減。シンガポールにおける移住サポートでは、住まい、教育および医療分野でのニーズが高く、アレーライズのきめ細やかなサポートに対しては高い満足度のフィードバック。特に子供の教育機関選定でのサポートは評価が高い。',
    },
    en: {
      category: 'Relocation',
      title: '[Singapore] Relocation support for a Japanese company’s employees',
      client: 'Media company (startup)',
      overview:
        'Relocation support for employees and families of a newly established Japanese company in Singapore, covering housing, healthcare, education, and daily life.',
      support: [
        {
          title: 'Healthcare',
          body: 'Guidance on Singapore’s healthcare system, trusted provider introductions, and insurance support.',
        },
        {
          title: 'Education',
          body: 'School selection support based on children’s age and needs, including school visits and enrollment assistance.',
        },
        {
          title: 'Local orientation',
          body: 'Practical advice on culture, law, daily life, and coordination with local service providers.',
        },
      ],
      result:
        'Employees and families started their new life in Singapore smoothly, with especially strong feedback on education support.',
    },
  },
  {
    slug: 'singapore-education-expansion',
    date: '2024.02.18',
    image: '/images/cases/singapore-education-expansion.jpg',
    ja: {
      category: '海外進出検討',
      title: '【シンガポール】教育系企業のアジア進出検討支援',
      client: '教育関連企業（上場企業）',
      overview:
        'アジア市場、特にシンガポールにおける教育関連事業の進出機会を評価するための包括的な市場調査。3か月間にわたり、教育機関や現地企業へのヒアリング、進出に適したロケーションの選定、市場の需要と競争状況の分析を実施。',
      support: [
        {
          title: '市場調査',
          body: 'シンガポールにおける教育市場の分析を行い、市場のサイズ、主要プレイヤー、ポテンシャルカスタマーを特定。競合リサーチおよび現地の消費者に対するデプスインタビューの実施。',
        },
        {
          title: '関係者ヒアリング',
          body: '教育関連の機関や現地企業とのヒアリングを通じて、市場ニーズとビジネスチャンスを探る。',
        },
        {
          title: 'ロケーション選定',
          body: '事業展開に最適な地域を特定し、進出時のロケーション戦略を策定。',
        },
        {
          title: 'トライアル実施',
          body: '市場調査の結果を踏まえ、シンガポールでのトライアルプログラムを企画・実施。',
        },
      ],
      result:
        'シンガポール教育市場における具体的なビジネス機会を特定し、進出戦略の明確化に貢献。進出時の具体的なビジネスモデルとサービスを特定し、次のフェーズへ進むための確固たる基盤を築いた。',
    },
    en: {
      category: 'Overseas expansion',
      title: '[Singapore] Asia expansion research for an education company',
      client: 'Education company (listed)',
      overview:
        'A three-month market study to evaluate education business opportunities in Asia, especially Singapore, including stakeholder interviews, location strategy, and demand analysis.',
      support: [
        {
          title: 'Market research',
          body: 'Analysis of Singapore’s education market, key players, and potential customers, including depth interviews.',
        },
        {
          title: 'Stakeholder interviews',
          body: 'Interviews with education institutions and local companies to identify needs and opportunities.',
        },
        {
          title: 'Location strategy',
          body: 'Identification of optimal locations and expansion strategy.',
        },
        {
          title: 'Trial program',
          body: 'Design and execution of a trial program in Singapore based on research findings.',
        },
      ],
      result:
        'Identified concrete opportunities in Singapore’s education market and clarified the expansion strategy and business model for the next phase.',
    },
  },
];

function localizeCase(record: CaseStudyRecord, locale: Locale): CaseStudy {
  return {
    slug: record.slug,
    date: record.date,
    image: record.image,
    ...record[locale],
  };
}

export const cases: CaseStudy[] = caseRecords.map((r) => localizeCase(r, 'ja'));

export function getCases(locale: Locale = 'ja') {
  return caseRecords.map((r) => localizeCase(r, locale));
}

export function getCase(slug: string, locale: Locale = 'ja') {
  const record = caseRecords.find((c) => c.slug === slug);
  return record ? localizeCase(record, locale) : undefined;
}
