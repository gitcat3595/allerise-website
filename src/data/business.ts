import type { Locale } from '../i18n/locale';

export interface BusinessLineRecord {
  id: string;
  slug: string;
  labelEn: string;
  ja: {
    label: string;
    tagline?: string;
    summary: string;
    items: string[];
  };
  en: {
    label: string;
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
    ja: {
      label: '新規事業開発',
      summary:
        '新規事業の機会発見から戦略策定、POC（概念実証）の実施、システム開発・運用まで一気通貫で支援します。机上の議論で終わらせず、実行まで伴走するのがアレーライズの強みです。',
      items: [
        '機会発見と概念設計',
        'ビジネスモデルの策定',
        'プロトタイピングと市場テスト',
        'ローンチ戦略の立案',
        '成長戦略と拡大支援',
        'DXとシステム開発',
      ],
    },
    en: {
      label: 'New Business Development',
      summary:
        'End-to-end support from opportunity discovery and strategy to proof-of-concept, system development, and operations. We go beyond slide decks and stay with you through execution.',
      items: [
        'Opportunity discovery and concept design',
        'Business model design',
        'Prototyping and market testing',
        'Launch strategy',
        'Growth and scale-up support',
        'DX and system development',
      ],
    },
  },
  {
    id: 'overseas',
    slug: 'overseas-expansion',
    labelEn: 'OVERSEAS EXPANSION',
    ja: {
      label: '海外進出支援事業',
      summary:
        'シンガポールをはじめとするアジア市場への進出を、調査・戦略策定から現地オペレーションの立ち上げまで支援します。現地リサーチ、パートナー選定、進出後の運営代行まで、フェーズに応じた支援を提供します。',
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
      summary:
        'Support for entering Asian markets including Singapore — from research and strategy to launching local operations, partner selection, and post-entry operations.',
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
    id: 'training',
    slug: 'training',
    labelEn: 'TRAINING',
    ja: {
      label: '研修事業',
      tagline: '思考整理・実行力向上',
      summary:
        '独自の「赤ペン思考整理」メソッドを核に、個人・チームの思考を構造化し、意思決定と実行力を高める研修を提供します。感情の吐き出しではなく、曖昧な思考を可視化し行動可能な状態へ変換することを目的とした、実務志向のプログラムです。',
      items: [
        '赤ペンを用いた思考整理ワークショップ',
        '優先順位づけと意思決定支援',
        '新規事業担当者向けメンタリング',
        '管理職・次世代リーダー向けプログラム',
        '実行力向上・行動設計トレーニング',
        '法人向けカスタム研修の設計・実施',
      ],
    },
    en: {
      label: 'Training',
      tagline: 'Thinking clarity & execution',
      summary:
        'Workshops built around our REDPEN thinking method — structuring individual and team thinking to improve decision-making and execution. Practical programs that turn vague thoughts into actionable clarity.',
      items: [
        'REDPEN thinking workshops',
        'Prioritization and decision support',
        'Mentoring for new business teams',
        'Programs for managers and next-gen leaders',
        'Execution and action-design training',
        'Custom corporate programs',
      ],
    },
  },
  {
    id: 'advisory',
    slug: 'advisory',
    labelEn: 'ADVISORY',
    ja: {
      label: 'アドバイザリー',
      tagline: '人材育成・新規事業・海外進出',
      summary:
        '経営層・事業責任者に対し、人材育成、新規事業、海外進出の各領域でアドバイザリー業務を行います。戦略の壁打ちから実行支援まで、必要な関与度合いに応じて柔軟に対応します。',
      items: [
        '人材育成・組織開発に関する助言',
        '新規事業の戦略レビューと推進支援',
        '海外進出に関する経営アドバイザリー',
        '事業開発チームの伴走支援',
        '役員・管理職向けセッション',
      ],
    },
    en: {
      label: 'Advisory',
      tagline: 'Talent · New business · Overseas expansion',
      summary:
        'Advisory for executives and business leaders across talent development, new business, and overseas expansion — from strategic sparring to execution support.',
      items: [
        'Talent and organization development',
        'New business strategy review and acceleration',
        'Executive advisory on overseas expansion',
        'Hands-on support for business development teams',
        'Sessions for executives and managers',
      ],
    },
  },
  {
    id: 'speaking',
    slug: 'speaking',
    labelEn: 'SPEAKING',
    ja: {
      label: '講演',
      summary:
        '学校・企業・団体向けの講演と、人材育成プログラムにおけるメンタリングを行っています。キャリア、グローバルビジネス、新規事業、行動と意思決定をテーマとした講演のほか、新規事業開発系プログラムでのメンタリング実績があります。',
      items: [],
    },
    en: {
      label: 'Speaking',
      summary:
        'Speaking for schools, companies, and organizations, plus mentoring in talent development programs. Topics include career, global business, new ventures, action, and decision-making.',
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

export function getBusinessLine(slug: string, locale: Locale = 'ja') {
  const record = businessLineRecords.find((b) => b.slug === slug);
  return record ? localizeLine(record, locale) : undefined;
}
