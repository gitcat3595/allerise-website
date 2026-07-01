export const site = {
  name: 'アレーライズ',
  title: 'アレーライズ｜新規事業開発・アジア進出・研修',
  description:
    'Allerise Pte. Ltd.（アレーライズ）は、新規事業開発、海外進出支援、赤ペン思考整理を核とした研修、アドバイザリー、講演を提供するシンガポール拠点のコンサルティング会社です。',
  url: 'https://allerise.com',
  email: 'contact@allerise.com',
  company: 'Allerise Pte. Ltd.',
  companyEn: 'Allerise Pte. Ltd.',
  uen: '202303085E',
  locations: 'Singapore',
  founded: '2023年1月27日',
  capital: 'SGD 5,000',
  companyType: '非公開の民間有限会社（Exempt Private Company Limited by Shares）',
  principalActivity: '情報技術コンサルティング（サイバーセキュリティを除く）',
  ssic: '62021',
  registeredAddress:
    '1 Raffles Place, #34-04, One Raffles Place, Singapore 048616',
  representative: '柳沢 紀子',
} as const;

export const nav = [
  { href: '/', label: 'TOP' },
  { href: '/service', label: '事業内容' },
  { href: '/case', label: '事例' },
  { href: '/contact', label: 'お問い合わせ' },
] as const;

export const serviceNav = [
  { href: '/service/new-business-development', label: '新規事業開発' },
  { href: '/service/overseas-expansion', label: '海外進出支援' },
  { href: '/service/training', label: '研修事業' },
  { href: '/service/advisory', label: 'アドバイザリー' },
  { href: '/service/speaking', label: '講演' },
] as const;
