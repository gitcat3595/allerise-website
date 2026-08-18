import type { Locale } from './locale';
import { localePath } from './locale';

const messages = {
  ja: {
    siteName: 'アレーライズ',
    siteTitle: 'アレーライズ｜新規事業と人の可能性を、前へ',
    siteDescription:
      'Allerise Pte. Ltd.（アレーライズ）はシンガポール拠点のコンサルティング会社です。アジア・海外を軸とした新規事業開発、法人向けの研修・組織開発、個人向けのディスカッションパートナーの3領域で、事業と人の成長に伴走します。',
    navTop: 'TOP',
    navBusiness: '新規事業開発',
    navTraining: '法人研修',
    navIndividual: '個人向け',
    navService: '事業内容',
    navCase: '事例',
    navContact: 'お問い合わせ',
    langSwitch: 'English',
    menuOpen: 'メニューを開く',
    mainNav: 'メインナビゲーション',
    footerNav: 'フッターナビゲーション',
    companyInfo: '会社情報',
    careers: '採用情報',
    privacy: 'プライバシーポリシー',
    home: 'ホーム',
    learnMore: '詳しく見る',
    viewDetails: '詳細を見る',
    viewCompany: '会社情報をみる',
    viewServices: '事業内容をみる',
    viewCases: '事例をみる',
    viewCaseStudies: '支援事例を見る',
    backToCases: '事例一覧に戻る',
    contactUs: 'お問い合わせ',
    contactCta: 'お問い合わせはこちら',
    careersCta: '採用情報はこちら',
    ctaContactTitle: 'お問い合わせ',
    ctaContactText:
      'サービスに関するご質問や、取材・パートナーシップのご相談などはこちらからお気軽にご連絡ください。',
    ctaCareersTitle: '採用について',
    ctaCareersText:
      'チームのビジョンに共感し、共に前進できる仲間を探しています。一緒に働いてみませんか？',
    heroTitle: 'アジア×新規事業\n日本から世界へ価値をひろげる',
    heroSubtitle: 'NEW VALUES TO THE WORLD',
    aboutLabel: 'ABOUT ALLERISE',
    aboutTitle: '人の成長と、事業の前進をつなぐ。',
    aboutLead:
      'アレーライズはシンガポールを拠点に、人と組織が持つ可能性を実行につなげる支援を行っています。多様な背景や価値観を持つ人たちが、目的に向かって協働できる組織づくりに取り組みます。',
    servicesLabel: 'SERVICES',
    servicesTitle: '事業内容',
    servicesLead: '新規事業開発、法人向け研修・組織開発、個人向けプログラムの3領域。加えてアドバイザリー、海外進出支援、講演を提供します。',
    casesLabel: 'CASES',
    casesLead: 'アジアをはじめとする、アレーライズのご支援事例をご紹介します',
    serviceIndexLead:
      'アレーライズは、新規事業開発・法人研修・個人向けプログラムの3領域を軸に、アドバイザリー、海外進出支援、講演まで、事業と人の成長を支援するサービスを提供しています。',
    serviceNavAll: '一覧',
    serviceNavLabel: '事業内容メニュー',
    supportAreas: '支援領域',
    supportContents: '支援内容',
    supportFlow: '支援の流れ',
    supportResult: '支援の結果',
    client: '対象企業',
    projectOverview: 'プロジェクト概要',
    supportDetails: '支援内容',
    speakingHistory: '講演実績',
    mentoring: 'メンタリング',
    mentoringNote:
      '企業・団体の人材育成プログラムやアクセラレーターにおいて、新規事業開発を中心としたメンタリングを担当しています。',
    panelists: '登壇者',
    speakingContact: '講演・メンタリングのご依頼・お問い合わせ',
    trainingContact: 'プログラムのご相談・お問い合わせ',
    advisoryContact: 'アドバイザリーのご相談',
    advisoryIntro:
      '経営会議への参加、定期的な壁打ち、プロジェクト単位の伴走など、ご依頼内容とフェーズに応じて関与の形を設計します。人材育成・新規事業・海外進出のいずれか、または複数領域にまたがるご相談にも対応します。',
    companyPageTitle: '企業情報',
    companyAboutTitle: 'ビジネスを上昇させるサポートを',
    companyAboutBody:
      '社名のアレーライズ（Allerise)はフランス語の行く（aller）と英語の上昇する（rise）を組み合わせたもので、ビジネスを次のレベルへと引き上げるという思いを込めています。私たちは、戦略的な視点と実行力でサポートし、ビジネスを加速させます。',
    missionTitle: '新たな価値を生み出し、広げていく',
    missionBody:
      'ビジネスを通じて世の中に新たな価値を生み出していくこと、New Values to the world をミッションとしています。新規事業によって今までになかった価値を作り、それを拡大していきます。日本発の価値が世界へと広がり、インパクトを与えていく世の中へ。日本企業のビジネス展開をサポートすることによってその価値の拡大を担います。',
    members: 'メンバー',
    partners: 'パートナー',
    values: 'バリュー',
    companyProfile: '会社概要',
    profileCompany: '商号',
    profileUen: 'UEN',
    profileAddress: '登記上の所在地',
    profileRepresentative: '代表',
    profileFounded: '設立',
    profileCapital: '資本金',
    profileType: '会社形態',
    profileActivity: '事業内容',
    paidInCapital: '（払込資本金）',
    contactLead:
      '弊社へのお問い合わせは下記よりご入力願いします。お問合せ内容の確認後、担当者よりご連絡させていただきます。返信には数日かかる場合もございますので、あらかじめご了承くださいませ。',
    breadcrumb: 'パンくずリスト',
    representativeJa: '柳沢 紀子',
    foundedJa: '2023年1月27日',
    companyTypeJa: '非公開の民間有限会社（Exempt Private Company Limited by Shares）',
    principalActivityJa: '情報技術コンサルティング（サイバーセキュリティを除く）',
  },
  en: {
    siteName: 'Allerise',
    siteTitle: 'Allerise | New Business, Organizations, People',
    siteDescription:
      'Allerise Pte. Ltd. is a Singapore-based consulting firm working across three areas: new business development with Asia at the centre, corporate training and organizational development, and a discussion-partner programme for individuals.',
    navTop: 'TOP',
    navBusiness: 'New Business',
    navTraining: 'Training',
    navIndividual: 'Individuals',
    navService: 'Services',
    navCase: 'Cases',
    navContact: 'Contact',
    langSwitch: '日本語',
    menuOpen: 'Open menu',
    mainNav: 'Main navigation',
    footerNav: 'Footer navigation',
    companyInfo: 'Company',
    careers: 'Careers',
    privacy: 'Privacy Policy',
    home: 'Home',
    learnMore: 'Learn more',
    viewDetails: 'View details',
    viewCompany: 'About the company',
    viewServices: 'View services',
    viewCases: 'View cases',
    viewCaseStudies: 'View case studies',
    backToCases: 'Back to cases',
    contactUs: 'Contact',
    contactCta: 'Contact us',
    careersCta: 'View careers',
    ctaContactTitle: 'Contact',
    ctaContactText:
      'For questions about our services, media inquiries, or partnership discussions, please reach out.',
    ctaCareersTitle: 'Careers',
    ctaCareersText:
      'We are looking for people who share our vision and want to move forward with us.',
    heroTitle: 'Asia × New Business\nSpreading value from Japan to the world',
    heroSubtitle: 'NEW VALUES TO THE WORLD',
    aboutLabel: 'ABOUT ALLERISE',
    aboutTitle: 'Connecting personal growth with business progress.',
    aboutLead:
      'Based in Singapore, Allerise helps people and organizations turn their potential into execution — building organizations where people of different backgrounds and values can work toward a shared purpose.',
    servicesLabel: 'SERVICES',
    servicesTitle: 'Services',
    servicesLead:
      'Three areas — new business development, corporate training and organizational development, and a programme for individuals — plus advisory, overseas expansion, and speaking.',
    casesLabel: 'CASES',
    casesLead: 'Selected examples of our work across Asia and beyond',
    serviceIndexLead:
      'Allerise works across three areas — new business development, corporate training, and a programme for individuals — extending to advisory, overseas expansion, and speaking.',
    serviceNavAll: 'Overview',
    serviceNavLabel: 'Services menu',
    supportAreas: 'Areas of support',
    supportContents: 'What we offer',
    supportFlow: 'How we work',
    supportResult: 'Outcome',
    client: 'Client',
    projectOverview: 'Project overview',
    supportDetails: 'Support provided',
    speakingHistory: 'Speaking',
    mentoring: 'Mentoring',
    mentoringNote:
      'We mentor participants in corporate talent programs and accelerators, with a focus on new business development.',
    panelists: 'Speakers',
    speakingContact: 'Inquire about speaking or mentoring',
    trainingContact: 'Discuss a training programme',
    advisoryContact: 'Discuss advisory support',
    advisoryIntro:
      'From board-level input to regular sparring sessions and project-based support, we shape our involvement around your needs and stage. We handle talent development, new business, and overseas expansion — individually or in combination.',
    companyPageTitle: 'Company',
    companyAboutTitle: 'Helping businesses rise to the next level',
    companyAboutBody:
      'Allerise combines the French aller (to go) and English rise — reflecting our commitment to lifting businesses to the next level. We accelerate growth through strategic thinking and hands-on execution.',
    missionTitle: 'Creating and spreading new value',
    missionBody:
      'Our mission is New Values to the World — creating value through business and expanding its reach. We help Japanese companies take their ideas global and increase their impact worldwide.',
    members: 'Team',
    partners: 'Partners',
    values: 'Values',
    companyProfile: 'Company profile',
    profileCompany: 'Legal name',
    profileUen: 'UEN',
    profileAddress: 'Registered address',
    profileRepresentative: 'Representative',
    profileFounded: 'Incorporated',
    profileCapital: 'Share capital',
    profileType: 'Company type',
    profileActivity: 'Principal activity',
    paidInCapital: ' (paid-in)',
    contactLead:
      'Please use the form below to contact us. After reviewing your inquiry, a team member will get back to you. Please allow a few business days for a response.',
    breadcrumb: 'Breadcrumb',
    representativeJa: 'Noriko Kelly Yang',
    foundedJa: 'January 27, 2023',
    companyTypeJa: 'Exempt Private Company Limited by Shares',
    principalActivityJa: 'Information technology consultancy (excluding cybersecurity)',
  },
} as const;

export type UiKey = keyof typeof messages.ja;

export function t(key: UiKey, locale: Locale): string {
  return messages[locale][key];
}

export function getSiteMeta(locale: Locale) {
  const m = messages[locale];
  return {
    name: m.siteName,
    title: m.siteTitle,
    description: m.siteDescription,
    url: 'https://allerise.com',
    email: 'contact@allerise.com',
    company: 'Allerise Pte. Ltd.',
    companyEn: 'Allerise Pte. Ltd.',
    uen: '202303085E',
    locations: 'Singapore',
    founded: m.foundedJa,
    capital: 'SGD 5,000',
    companyType: m.companyTypeJa,
    principalActivity: m.principalActivityJa,
    ssic: '62021',
    registeredAddress: '1 Raffles Place, #34-04, One Raffles Place, Singapore 048616',
    representative: m.representativeJa,
  };
}

export function getNav(locale: Locale) {
  const m = messages[locale];
  return [
    { href: localePath(locale, '/'), label: m.navTop },
    { href: localePath(locale, '/service/new-business-development'), label: m.navBusiness },
    { href: localePath(locale, '/service/training'), label: m.navTraining },
    { href: localePath(locale, '/service/individual'), label: m.navIndividual },
    { href: localePath(locale, '/service'), label: m.navService },
    { href: localePath(locale, '/case'), label: m.navCase },
    { href: localePath(locale, '/contact'), label: m.navContact },
  ];
}

export function getServiceNav(locale: Locale) {
  const labels =
    locale === 'ja'
      ? ['新規事業開発', '法人研修・組織開発', '個人向けプログラム', 'アドバイザリー', '海外進出支援', '講演']
      : [
          'New Business',
          'Training & Development',
          'For Individuals',
          'Advisory',
          'Overseas Expansion',
          'Speaking',
        ];
  const slugs = [
    'new-business-development',
    'training',
    'individual',
    'advisory',
    'overseas-expansion',
    'speaking',
  ];
  return slugs.map((slug, i) => ({
    href: localePath(locale, `/service/${slug}`),
    label: labels[i],
  }));
}
