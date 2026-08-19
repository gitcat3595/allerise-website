import type { Locale } from './locale';

export interface HomeContent {
  heroEyebrow: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroTitleRest: string;
  heroTitleLine2: string;
  heroCopy: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;

  pillarsLabel: string;
  pillarsTitle: string;
  pillarsLead: string;
  pillars: {
    num: string;
    title: string;
    body: string;
    links: { label: string; path: string }[];
  }[];

  otherLabel: string;
  otherTitle: string;
  otherLead: string;
}

const content: Record<Locale, HomeContent> = {
  ja: {
    heroEyebrow: 'NEW VALUES TO THE WORLD',
    heroTitle: '新しい価値を',
    heroTitleAccent: '世界',
    heroTitleRest: 'へ',
    heroTitleLine2: 'とどける',
    heroCopy:
      'アレーライズは、コンサルティングおよび研修を通じて企業や個人の成長を支えます。新規事業開発や海外進出のサポートから、組織や社員の育成まで。',
    heroPrimaryCta: 'ご相談・お問い合わせ',
    heroSecondaryCta: '事業内容を見る',

    pillarsLabel: 'WHAT WE DO',
    pillarsTitle: '3つの柱で、企業と個人の成長を支える。',
    pillarsLead:
      '事業開発、研修、アドバイザリー。対象は違っても、机上の議論で終わらせず、実際に動くところまで伴走するという姿勢は変わりません。',
    pillars: [
      {
        num: '01',
        title: '事業開発',
        body: 'シンガポールを拠点に、アジア・海外を軸とした新規事業開発を支援します。市場リサーチと現地調査から、戦略策定、POC、現地オペレーションの立ち上げまで。アクセラレータープログラムや社内新規事業制度でのメンタリングも担っています。',
        links: [{ label: 'コンサルティング事業を見る', path: '/service/new-business-development' }],
      },
      {
        num: '02',
        title: '研修',
        body: '法人向けは、集合セッションと個別メンタリングを組み合わせたプログラム。組織変革、リーダー育成、女性のキャリア支援、福利厚生としての導入まで対応します。個人向けは、5ヶ月間の対話プログラムです。独自アセスメント「ライフアライメント」で現在地を可視化します。',
        links: [
          { label: '法人向け研修', path: '/service/training' },
          { label: '個人向け研修', path: '/service/individual' },
        ],
      },
      {
        num: '03',
        title: 'アドバイザリー',
        body: '経営層・事業責任者に対し、新規事業、海外展開、人材育成の各領域で継続的に伴走します。経営会議への参加、定期的な壁打ち、プロジェクト単位の関与など、必要な度合いに応じて設計します。',
        links: [{ label: 'アドバイザリーを見る', path: '/service/advisory' }],
      },
    ],

    otherLabel: 'OTHER SERVICES',
    otherTitle: 'その他の支援',
    otherLead:
      'アドバイザリー、海外進出支援、講演・登壇も、これまでの実績をもとに継続してご提供しています。',
  },

  en: {
    heroEyebrow: 'NEW VALUES TO THE WORLD',
    heroTitle: 'Delivering new value ',
    heroTitleAccent: 'to the world',
    heroTitleRest: '',
    heroTitleLine2: '',
    heroCopy:
      'Allerise supports the growth of companies and individuals through consulting and training — from new ventures and overseas expansion to developing organizations and their people.',
    heroPrimaryCta: 'Talk to us',
    heroSecondaryCta: 'See what we do',

    pillarsLabel: 'WHAT WE DO',
    pillarsTitle: 'Three pillars supporting companies and people.',
    pillarsLead:
      'Business development, training, and advisory. The audience differs, but the stance does not: we do not stop at the discussion, we stay until things move.',
    pillars: [
      {
        num: '01',
        title: 'Business Development',
        body: 'From our base in Singapore we build new businesses with Asia at the centre — market and on-the-ground research, strategy, proof of concept, and standing up local operations. We also mentor in accelerator programmes and corporate venture schemes.',
        links: [{ label: 'View consulting', path: '/service/new-business-development' }],
      },
      {
        num: '02',
        title: 'Training',
        body: 'For companies, group sessions paired with one-to-one mentoring — organizational change, leadership development, career support for women, and delivery as an employee benefit. For individuals, a five-month dialogue programme. Our Life Alignment assessment maps where you are now.',
        links: [
          { label: 'Corporate training', path: '/service/training' },
          { label: 'For individuals', path: '/service/individual' },
        ],
      },
      {
        num: '03',
        title: 'Advisory',
        body: 'Ongoing support for executives and business leaders across new business, overseas expansion, and talent development — from a seat in management meetings to regular sparring and project-based involvement.',
        links: [{ label: 'View advisory', path: '/service/advisory' }],
      },
    ],

    otherLabel: 'OTHER SERVICES',
    otherTitle: 'Other services',
    otherLead:
      'Advisory, overseas expansion support, and speaking continue alongside, building on our track record in each.',
  },
};

export function getHomeContent(locale: Locale = 'ja'): HomeContent {
  return content[locale];
}
