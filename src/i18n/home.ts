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
  pillarMore: string;

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
    heroEyebrow: 'SINGAPORE / ASIA',
    heroTitle: '事業も、人も、',
    heroTitleAccent: '止まっている場所',
    heroTitleRest: 'がある。',
    heroTitleLine2: 'そこから、動かす。',
    heroCopy:
      'アレーライズは、アジアを軸とした新規事業開発、法人向けの研修・組織開発、そして個人向けの対話プログラム。3つの領域で、事業と人が次に進むところまで伴走します。',
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
    pillarsTitle: '3つの領域で、次の一歩をつくる。',
    pillarsLead:
      '事業をつくる、組織を変える、人が動き出す。対象は違っても、やっていることは同じです。止まっている場所を特定し、構造にして、実際に動くところまで一緒に進みます。',
    pillarMore: '詳しく見る',

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
    heroEyebrow: 'SINGAPORE / ASIA',
    heroTitle: 'Every business, and every person, has a place where things have ',
    heroTitleAccent: 'stopped moving',
    heroTitleRest: '.',
    heroTitleLine2: 'That is where we start.',
    heroCopy:
      'Allerise works across three areas — new business development with Asia at the centre, corporate training and organizational development, and a dialogue programme for individuals — staying with you until things actually move.',
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
    pillarsTitle: 'Three areas, one next step.',
    pillarsLead:
      'Build the business, change the organization, get the person moving. The audience differs; the work is the same — find where things have stopped, give it a structure, and stay until it moves.',
    pillarMore: 'View details',

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
