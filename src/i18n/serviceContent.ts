import type { Locale } from './locale';

type ServiceExtra = {
  sections: { title: string; body?: string; items?: string[]; ordered?: { title: string; body: string }[] }[];
  links?: { href: string; label: string }[];
};

const serviceExtras: Record<string, Record<Locale, ServiceExtra>> = {
  'new-business-development': {
    ja: {
      sections: [
        {
          title: '支援の流れ',
          ordered: [
            { title: '機会発見', body: '市場調査・ヒアリングによるニーズの特定' },
            { title: '概念設計', body: 'ビジネスモデルと収益構造の策定' },
            { title: 'プロトタイピング', body: 'MVP開発と市場テスト' },
            { title: 'ローンチ', body: '市場投入と初期運営支援' },
            { title: '拡大', body: '成長戦略とスケール支援' },
          ],
        },
        {
          title: 'DXとシステム開発',
          body: 'ネパール・ベトナムに拠点を持つパートナー企業と連携し、システム開発から保守・運用まで対応。新規事業に必要なテクノロジー基盤を迅速に構築できます。',
        },
      ],
      links: [{ href: '/contact', label: 'お問い合わせ' }],
    },
    en: {
      sections: [
        {
          title: 'How we work',
          ordered: [
            { title: 'Discovery', body: 'Market research and interviews to identify needs' },
            { title: 'Concept design', body: 'Business model and revenue structure' },
            { title: 'Prototyping', body: 'MVP development and market testing' },
            { title: 'Launch', body: 'Go-to-market and early operations' },
            { title: 'Scale', body: 'Growth strategy and expansion support' },
          ],
        },
        {
          title: 'DX and system development',
          body: 'Through partners in Nepal and Vietnam, we support system development, maintenance, and operations to build the technology foundation new ventures need.',
        },
      ],
      links: [{ href: '/en/contact', label: 'Contact us' }],
    },
  },
  training: {
    ja: {
      sections: [
        {
          title: '赤ペン思考整理とは',
          body: '赤ペンを用いて思考を書き出し、構造化するメソッドです。頭の中にある曖昧な考えを可視化し、優先順位を明確にしたうえで、具体的な行動につなげます。ジャーナリング（感情の記録）ではなく、思考の整理と意思決定支援を目的とした法人向けプログラムです。',
        },
        {
          title: 'こんな課題におすすめです',
          items: [
            '新規事業の検討が進まない、議論が抽象的なまま終わる',
            '管理職・リーダー層の意思決定スピードを上げたい',
            'チームの思考を揃え、実行に移す文化をつくりたい',
            'キャリアや事業の方向性に迷いがある個人・メンバーへの支援',
          ],
        },
      ],
      links: [{ href: '/contact', label: '研修・講演のお問い合わせ' }],
    },
    en: {
      sections: [
        {
          title: 'What is REDPEN thinking?',
          body: 'A method for writing out and structuring thoughts with a red pen — turning vague ideas into visible priorities and concrete action. It is designed for organizational decision-making, not emotional journaling.',
        },
        {
          title: 'Recommended for teams facing',
          items: [
            'Stalled new business discussions that stay abstract',
            'Leaders who need faster, clearer decisions',
            'Teams that want a culture of aligned thinking and execution',
            'Individuals unsure about career or business direction',
          ],
        },
      ],
      links: [{ href: '/en/contact', label: 'Inquire about training or speaking' }],
    },
  },
  'overseas-expansion': {
    ja: {
      sections: [
        {
          body: '進出検討段階のリサーチから、現地での立ち上げ・オペレーション代行、社員・家族のリロケーションサポートまで、ビジネスのステージに合わせて幅広くご支援します。',
        },
      ],
      links: [
        { href: '/case', label: '海外進出の支援事例' },
        { href: '/contact', label: 'お問い合わせ' },
      ],
    },
    en: {
      sections: [
        {
          body: 'From early-stage research to local launch, operational support, and employee or family relocation — we support each stage of your expansion journey.',
        },
      ],
      links: [
        { href: '/en/case', label: 'Overseas expansion cases' },
        { href: '/en/contact', label: 'Contact us' },
      ],
    },
  },
};

export function getServiceExtra(slug: string, locale: Locale): ServiceExtra | undefined {
  return serviceExtras[slug]?.[locale];
}
