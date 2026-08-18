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
