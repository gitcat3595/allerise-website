export const site = {
  name: 'アレーライズ',
  title: 'アレーライズ｜アジア×新規事業開発 支援',
  description:
    'アレーライズはシンガポールをはじめアジアの事業開発支援を行うコンサルティング会社です。進出検討のためのリサーチ、現地調査、戦略策定、COO以下の事業運営などを行っています。',
  url: 'https://allerise.com',
  email: 'contact@allerise.com',
  company: 'アレーライズ株式会社',
  companyEn: 'Allerise Co. Ltd.',
  locations: 'Tokyo | Singapore',
  founded: '2017年10月2日',
  capital: '500万円',
  representative: '柳沢 紀子',
  tokyoOffice: '〒104-0061　東京都中央区銀座7-13-21 新六洲ビル',
  singaporeOffice: 'Tanjong Pagar, Singapore',
} as const;

export const nav = [
  { href: '/', label: 'TOP' },
  { href: '/company', label: '会社情報' },
  { href: '/service', label: '事業内容' },
  { href: '/case', label: '実績紹介' },
  { href: '/contact', label: 'お問い合わせ' },
] as const;
