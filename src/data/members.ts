export interface Person {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const members: Person[] = [
  {
    name: '柳沢 紀子',
    role: '代表取締役',
    image: '/images/members/yanagisawa.jpg',
    bio: '慶應義塾大学法学部卒業。オイシックス・ラ・大地株式会社、Red Bull Japan株式会社を経てアクセンチュア株式会社に入社。戦略グループにてマーケティング戦略策定、DX構想策定・実行支援、クロスボーダープロジェクト等に参画。2017年に当社を創業。事業会社とコンサルティング会社でのハイブリッドな経験を活かし、事業開発や新規事業立上げを支援。シンガポールと日本を拠点に海外を含めた幅広いクライアントをサポート。',
  },
];

export const partners: Person[] = [
  {
    name: '小野寺 聡',
    role: 'パートナー',
    image: '/images/partners/onodera.jpg',
    bio: 'Reinvent NY Inc.代表。NTTデータ、メルカリを経て米国で日系企業・地方自治体を中心としたクライアントのアメリカ進出コンサルティングやBPOサービス事業を展開。特にテック、サステナブル、食領域に強く、ヴィーガン及びSDGsコンサルティング事業を日米で展開。TOKYTO MX2ワールドマーケッツ月1コメンテーター',
  },
  {
    name: '高橋 朋康',
    role: 'パートナー',
    image: '/images/partners/takahashi.jpg',
    bio: '東京工業大学大学院 総合理工学研究科 修了。AGC(旭硝子)、リクルートコミュニケーションズを経て参画。介護関連事業・エンジェル投資等も手掛ける。PEファンドの投資実行後の経営企画・PMI等、中小・ベンチャー・オーナー企業等、幅広い経営ステージの意思決定支援及び事業統括実務支援を得意とする。',
  },
];

export const values = [
  {
    title: 'Solution Oriented',
    body: '机上の空論ではなく、実現可能な課題解決にこだわります。前進することで事業成長を目指しています。',
  },
  {
    title: 'Creative Innovation',
    body: 'イノベーションに不可欠なクリエイティビティーを常に追求しています。アンテナを張り、そこで得たものをイノベーションへとつなげます。',
  },
  {
    title: 'Positive People Impact',
    body: 'ビジネスに関わるすべての「人」へのポジティブなインパクトを大切にしています。アレーライズのビジネスを通じてポジティブなインパクトが広がることを願っています。',
  },
];
