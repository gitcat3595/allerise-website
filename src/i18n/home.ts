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
  heroTag: string;

  beliefLabel: string;
  beliefTitle: string;
  beliefCopy: string;
  beliefStatement: string;

  pillarsLabel: string;
  pillarsTitle: string;
  pillarsLead: string;
  pillars: {
    num: string;
    title: string;
    body: string;
    links: { label: string; path: string }[];
  }[];

  perspectiveLabel: string;
  perspectiveTitle: string;
  perspectivePlaces: { image: string; alt: string; label: string }[];

  approachLabel: string;
  approachTitle: string;
  approach: { num: string; title: string; body: string }[];

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
    heroTag: 'SINGAPORE / ASIA',

    beliefLabel: 'WHAT WE BELIEVE',
    beliefTitle: '戦略が止まるのは、たいてい人のところ。',
    beliefCopy:
      '事業が進まない理由は、戦略の不足だけではありません。決めきれない、相談できない、目的と目の前の仕事がつながっていない。逆に、人が動き出せば事業は動きます。だからアレーライズは、事業をつくる仕事と、人が動き出す仕事を、切り離さずに扱います。',
    beliefStatement:
      '机上の戦略で終わらせない。「分かる」を「自分で動ける」に変えるところまでを、仕事の範囲とします。',

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

    perspectiveLabel: 'PERSPECTIVE',
    perspectiveTitle: '違いを越え、前に進むための視点を。',
    perspectivePlaces: [
      {
        image: '/images/perspective-singapore-marinabay.jpg',
        alt: 'シンガポールのマリーナベイ',
        label: 'SINGAPORE',
      },
      { image: '/images/perspective-vietnam-bike.jpg', alt: 'ベトナムの街並み', label: 'VIETNAM' },
      {
        image: '/images/perspective-seoul-skyscraper.jpg',
        alt: '韓国・ソウルの都市風景',
        label: 'KOREA',
      },
    ],

    approachLabel: 'OUR APPROACH',
    approachTitle: '一度きりで終わらせず、実務に戻す。',
    approach: [
      {
        num: '01 / LISTEN',
        title: '課題と目的を、丁寧に聞く',
        body: '目に見える症状だけでなく、実現したい変化と、現場で実際に起きていることの両方を整理します。',
      },
      {
        num: '02 / DESIGN',
        title: '対象に合わせて、進め方を設計する',
        body: '一律のパッケージではなく、事業フェーズ、参加者の役割、実現したい変化に合わせて組み立てます。',
      },
      {
        num: '03 / PRACTICE',
        title: '実際の仕事を題材に、実践する',
        body: '抽象的な議論で終わらせず、案件、数字、顧客、日々の判断に結びつけて考えます。',
      },
      {
        num: '04 / CHECK-IN',
        title: '対話と定点観測で、変化を続ける',
        body: '進捗だけでなく前提と論点を更新する。小さな改善を重ねて、習慣に変えていきます。',
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
    heroTag: 'SINGAPORE / ASIA',

    beliefLabel: 'WHAT WE BELIEVE',
    beliefTitle: 'Strategy usually stalls at the people, not the plan.',
    beliefCopy:
      'A business rarely stalls for lack of strategy. Decisions do not get made, concerns do not get raised, and the daily work loses its line back to the purpose. The reverse is also true: when people start moving, the business moves. So we do not separate the work of building a business from the work of getting people unstuck.',
    beliefStatement:
      'We do not stop at the deck. Turning “I understand” into “I can act on my own” is part of the job.',

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

    perspectiveLabel: 'PERSPECTIVE',
    perspectiveTitle: 'Perspective that moves teams across difference.',
    perspectivePlaces: [
      {
        image: '/images/perspective-singapore-marinabay.jpg',
        alt: 'Marina Bay, Singapore',
        label: 'SINGAPORE',
      },
      { image: '/images/perspective-vietnam-bike.jpg', alt: 'A street in Vietnam', label: 'VIETNAM' },
      {
        image: '/images/perspective-seoul-skyscraper.jpg',
        alt: 'Seoul skyline, Korea',
        label: 'KOREA',
      },
    ],

    approachLabel: 'OUR APPROACH',
    approachTitle: 'Never a one-off — always back to real work.',
    approach: [
      {
        num: '01 / LISTEN',
        title: 'Understand the issue and the intent',
        body: 'We look past the visible symptoms to both the change you want and what is actually happening on the ground.',
      },
      {
        num: '02 / DESIGN',
        title: 'Design the approach for the audience',
        body: 'Not a fixed package — we build around the stage of the business, the roles involved, and the change you are after.',
      },
      {
        num: '03 / PRACTICE',
        title: 'Practise on the real work',
        body: 'Discussion stays connected to live projects, numbers, customers, and everyday decisions.',
      },
      {
        num: '04 / CHECK-IN',
        title: 'Keep changing through dialogue and review',
        body: 'We update the assumptions, not only the progress — letting small improvements become habit.',
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
