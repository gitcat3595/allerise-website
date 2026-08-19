import type { Locale } from '../i18n/locale';

export interface Person {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface PersonRecord {
  image: string;
  ja: { name: string; role: string; bio: string };
  en: { name: string; role: string; bio: string };
}

const memberRecords: PersonRecord[] = [
  {
    image: '/images/members/yanagisawa.jpg',
    ja: {
      name: '柳沢 紀子',
      role: '代表取締役',
      bio: '慶應義塾大学法学部卒業。オイシックス・ラ・大地株式会社、Red Bull Japan株式会社を経てアクセンチュア株式会社に入社。戦略グループにてマーケティング戦略策定、DX構想策定・実行支援、クロスボーダープロジェクト等に参画。2017年に当社を創業。事業会社とコンサルティング会社でのハイブリッドな経験を活かし、事業開発や新規事業立上げを支援。シンガポールと日本を拠点に海外を含めた幅広いクライアントをサポート。',
    },
    en: {
      name: 'Noriko Kelly Yang',
      role: 'CEO',
      bio: 'Graduated from Keio University Faculty of Law. After Oisix ra daichi, Red Bull Japan, and Accenture’s strategy group, she founded Allerise in 2017. Drawing on hybrid experience across operating companies and consulting, she supports business development and new venture launches for clients in Singapore, Japan, and beyond.',
    },
  },
];


const valueRecords = [
  {
    title: 'Solution Oriented',
    ja: '机上の空論ではなく、実現可能な課題解決にこだわります。前進することで事業成長を目指しています。',
    en: 'We focus on practical problem-solving, not theory alone — moving forward to drive business growth.',
  },
  {
    title: 'Creative Innovation',
    ja: 'イノベーションに不可欠なクリエイティビティーを常に追求しています。アンテナを張り、そこで得たものをイノベーションへとつなげます。',
    en: 'We constantly pursue the creativity essential to innovation, connecting new insights to real change.',
  },
  {
    title: 'Positive People Impact',
    ja: 'ビジネスでかかわるすべての人に、ポジティブなインパクトを。取引先も、参加者も、働く仲間も、関わったことで少し前に進める。そんな関係を大切にしています。',
    en: 'A positive impact for everyone we work with in business — clients, participants, and colleagues alike. We want people to move forward for having worked with us.',
  },
];

function localizePerson(record: PersonRecord, locale: Locale): Person {
  return { image: record.image, ...record[locale] };
}

export const members: Person[] = memberRecords.map((r) => localizePerson(r, 'ja'));
export const values = valueRecords.map((v) => ({ title: v.title, body: v.ja.body }));

export function getMembers(locale: Locale = 'ja') {
  return memberRecords.map((r) => localizePerson(r, locale));
}

export function getValues(locale: Locale = 'ja') {
  return valueRecords.map((v) => ({ title: v.title, body: v[locale] }));
}
