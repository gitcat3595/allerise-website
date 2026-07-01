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

const partnerRecords: PersonRecord[] = [
  {
    image: '/images/partners/onodera.jpg',
    ja: {
      name: '小野寺 聡',
      role: 'パートナー',
      bio: 'Reinvent NY Inc.代表。NTTデータ、メルカリを経て米国で日系企業・地方自治体を中心としたクライアントのアメリカ進出コンサルティングやBPOサービス事業を展開。特にテック、サステナブル、食領域に強く、ヴィーガン及びSDGsコンサルティング事業を日米で展開。TOKYTO MX2ワールドマーケッツ月1コメンテーター',
    },
    en: {
      name: 'Satoshi Onodera',
      role: 'Partner',
      bio: 'Representative of Reinvent NY Inc. Supports Japanese companies and local governments expanding into the U.S., with strengths in tech, sustainability, and food, including vegan and SDGs consulting across Japan and the U.S.',
    },
  },
  {
    image: '/images/partners/takahashi.jpg',
    ja: {
      name: '高橋 朋康',
      role: 'パートナー',
      bio: '東京工業大学大学院 総合理工学研究科 修了。AGC(旭硝子)、リクルートコミュニケーションズを経て参画。介護関連事業・エンジェル投資等も手掛ける。PEファンドの投資実行後の経営企画・PMI等、中小・ベンチャー・オーナー企業等、幅広い経営ステージの意思決定支援及び事業統括実務支援を得意とする。',
    },
    en: {
      name: 'Tomoyasu Takahashi',
      role: 'Partner',
      bio: 'Graduate of Tokyo Institute of Technology. After AGC and Recruit Communications, he supports decision-making and business execution across SMEs, ventures, and owner-led companies, including post-investment PMI support.',
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
    ja: 'ビジネスに関わるすべての「人」へのポジティブなインパクトを大切にしています。アレーライズのビジネスを通じてポジティブなインパクトが広がることを願っています。',
    en: 'We care about positive impact on every person involved in our work and aim to spread that impact through our business.',
  },
];

function localizePerson(record: PersonRecord, locale: Locale): Person {
  return { image: record.image, ...record[locale] };
}

export const members: Person[] = memberRecords.map((r) => localizePerson(r, 'ja'));
export const partners: Person[] = partnerRecords.map((r) => localizePerson(r, 'ja'));
export const values = valueRecords.map((v) => ({ title: v.title, body: v.ja.body }));

export function getMembers(locale: Locale = 'ja') {
  return memberRecords.map((r) => localizePerson(r, locale));
}

export function getPartners(locale: Locale = 'ja') {
  return partnerRecords.map((r) => localizePerson(r, locale));
}

export function getValues(locale: Locale = 'ja') {
  return valueRecords.map((v) => ({ title: v.title, body: v[locale] }));
}
