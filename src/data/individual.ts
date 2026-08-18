import type { Locale } from '../i18n/locale';

export interface IndividualContent {
  heroLabel: string;
  heroTitle: string;
  heroLead: string;
  panelKicker: string;
  panelTitle: string;
  panelBody: string;
  metrics: { value: string; label: string }[];

  notLabel: string;
  notTitle: string;
  notLead: string;
  notCards: { no: string; title: string; body: string }[];

  forLabel: string;
  forTitle: string;
  forItems: string[];

  sessionLabel: string;
  sessionTitle: string;
  sessionLead: string;
  sessionSteps: { step: string; title: string; body: string }[];

  priceLabel: string;
  priceTitle: string;
  priceName: string;
  priceAmount: string;
  priceUnit: string;
  priceTotalNote: string;
  priceIncludes: string[];
  priceNote: string;

  closingTitle: string;
  closingBody: string;
  contactLabel: string;
}

const content: Record<Locale, IndividualContent> = {
  ja: {
    heroLabel: 'FOR INDIVIDUALS / DISCUSSION PARTNER',
    heroTitle: '話すことで、自分の考えを知る。',
    heroLead:
      'コーチでもコンサルタントでもカウンセラーでもない、ニュートラルで安全な関係性のなかで、感情のアウトプットと思考の整理を行います。答えを渡すのではなく、あなたが自分で次の一歩を選べる状態をつくる。個人の「苦しくない成長」に伴走する、5ヶ月間の対話プログラムです。',
    panelKicker: 'DISCUSSION PARTNER',
    panelTitle: '結論を急がずに、考えを扱う時間。',
    panelBody:
      '月2回・5ヶ月間。同じ相手と継続して話すことで、その場の感情と、本当に考えていることを切り分けていきます。',
    metrics: [
      { value: '5', label: 'MONTHS' },
      { value: '10', label: 'SESSIONS' },
      { value: '1:1', label: 'ONLINE' },
    ],

    notLabel: 'WHAT THIS IS',
    notTitle: '助言でも、診断でもなく、対話です。',
    notLead:
      '肩書きのある相手に相談すると、答えをもらう関係になりがちです。このプログラムは、評価も指導もしない相手と話すことそのものを目的にしています。',
    notCards: [
      {
        no: 'NOT COACHING',
        title: '目標達成を管理しません',
        body: '決めた目標に向かって進捗を詰めるのではなく、そもそも何を望んでいるのかを一緒に確かめていきます。',
      },
      {
        no: 'NOT CONSULTING',
        title: '正解を提示しません',
        body: '外から解決策を渡すのではなく、あなたの中にある判断材料を言葉にして、構造化していきます。',
      },
      {
        no: 'NOT COUNSELLING',
        title: '治療や診断は行いません',
        body: '医療・心理的な診断や治療は扱いません。日常のなかで動きが止まっている部分を、対話で扱います。',
      },
    ],

    forLabel: 'WHO IT IS FOR',
    forTitle: 'こんなときに使うプログラムです',
    forItems: [
      '考えていることが多すぎて、どこから手をつけるか決められない',
      'キャリアや事業の岐路にいるが、社内や家族には相談しにくい',
      '相談相手はいるが、立場や利害が絡んで本音を出しにくい',
      '目標は立てられるのに、続かない・動けない状態が続いている',
      '成果は出ているのに、これでいいのかという違和感がある',
      '自分の言葉で、これからの方向を整理したい',
    ],

    sessionLabel: 'HOW IT WORKS',
    sessionTitle: '5ヶ月間の流れ',
    sessionLead:
      '1回のセッションは、話したいことから始めます。事前準備は必須ではありません。継続することで、扱うテーマが少しずつ深いところへ移っていきます。',
    sessionSteps: [
      {
        step: 'MONTH 1',
        title: '現在地を確認する',
        body: '独自アセスメントと対話で、いま何が起きているか、どこに引っかかりがあるかを言葉にします。',
      },
      {
        step: 'MONTH 2–3',
        title: '感情と思考を切り分ける',
        body: '感情のアウトプットを済ませたうえで、事実・解釈・望みを分けて整理します。判断の材料が見えてきます。',
      },
      {
        step: 'MONTH 4',
        title: '選択肢を並べる',
        body: '取りうる選択肢と、それぞれで手放すものを並べます。決めるのはご本人、という前提を崩しません。',
      },
      {
        step: 'MONTH 5',
        title: '次の一歩を決める',
        body: '5ヶ月間の変化を振り返り、プログラム終了後も自分で続けられる考え方の型を持ち帰ります。',
      },
    ],

    priceLabel: 'PROGRAMME',
    priceTitle: '料金',
    priceName: 'ディスカッションパートナー｜5ヶ月コース',
    priceAmount: '55,000円',
    priceUnit: '／ 月（5ヶ月間）',
    priceTotalNote: '5ヶ月間・全10回（月2回）',
    priceIncludes: [
      '月2回のオンラインセッション（1回60分）',
      '独自アセスメントによる現在地の確認',
      'セッション記録と次回テーマの整理',
      'セッション間のテキストでのやりとり',
      '5ヶ月終了時の振り返りセッション',
    ],
    priceNote:
      '本プログラムは対話による自己理解と意思決定の支援を目的としています。医療・心理・法律・金融に関する診断や助言、成果の保証は行いません。開始時期・お支払い方法はご相談のうえ決定します。',

    closingTitle: '一度話してみてから、決めてください。',
    closingBody:
      '相性のあるサービスなので、まずはオンラインで無料の初回相談を行っています。プログラムの内容と、いま抱えているテーマが合うかどうかを確認してから、開始をご検討ください。',
    contactLabel: 'オンライン無料相談を申し込む',
  },

  en: {
    heroLabel: 'FOR INDIVIDUALS / DISCUSSION PARTNER',
    heroTitle: 'Find out what you think by saying it out loud.',
    heroLead:
      'Not a coach, not a consultant, not a counsellor — a neutral, safe relationship in which you can put feelings into words and give your thinking a structure. We do not hand over answers; we get you to the point where you can choose your own next step. A five-month dialogue programme for growth that does not have to hurt.',
    panelKicker: 'DISCUSSION PARTNER',
    panelTitle: 'Time to handle your thinking without rushing to a conclusion.',
    panelBody:
      'Twice a month for five months. Talking with the same person over time separates how you feel in the moment from what you actually think.',
    metrics: [
      { value: '5', label: 'MONTHS' },
      { value: '10', label: 'SESSIONS' },
      { value: '1:1', label: 'ONLINE' },
    ],

    notLabel: 'WHAT THIS IS',
    notTitle: 'Not advice, not a diagnosis — a conversation.',
    notLead:
      'Talking to someone with a title tends to turn into receiving answers. In this programme, the conversation itself is the point: no assessment of you, no instruction.',
    notCards: [
      {
        no: 'NOT COACHING',
        title: 'We do not manage your goals',
        body: 'Instead of chasing progress against a target you already set, we check what you actually want in the first place.',
      },
      {
        no: 'NOT CONSULTING',
        title: 'We do not supply the right answer',
        body: 'Rather than handing you a solution from outside, we put what you already know into words and give it a structure.',
      },
      {
        no: 'NOT COUNSELLING',
        title: 'We do not treat or diagnose',
        body: 'Medical and psychological diagnosis and treatment are out of scope. We work on where things have stopped moving in everyday life.',
      },
    ],

    forLabel: 'WHO IT IS FOR',
    forTitle: 'Bring this to us when',
    forItems: [
      'There is too much in your head to know where to start',
      'You are at a crossroads and cannot easily discuss it at work or at home',
      'You have people to talk to, but position and interests get in the way of honesty',
      'You can set goals, yet nothing sustains or moves',
      'The results are there, and something still feels off',
      'You want to describe your own direction in your own words',
    ],

    sessionLabel: 'HOW IT WORKS',
    sessionTitle: 'Five months, step by step',
    sessionLead:
      'Each session starts with whatever you want to talk about. Preparation is not required. Over time, the themes move to deeper ground.',
    sessionSteps: [
      {
        step: 'MONTH 1',
        title: 'Map where you are',
        body: 'A proprietary assessment and conversation put into words what is happening and where you are caught.',
      },
      {
        step: 'MONTH 2–3',
        title: 'Separate feeling from thinking',
        body: 'Once the emotion has been voiced, we separate fact, interpretation, and wish — and the material for a decision appears.',
      },
      {
        step: 'MONTH 4',
        title: 'Lay out the options',
        body: 'We set out the options available and what each one asks you to give up. The decision stays yours throughout.',
      },
      {
        step: 'MONTH 5',
        title: 'Decide the next step',
        body: 'We review what changed across five months, and you leave with a way of thinking you can keep using on your own.',
      },
    ],

    priceLabel: 'PROGRAMME',
    priceTitle: 'Fee',
    priceName: 'Discussion Partner — five-month programme',
    priceAmount: '¥55,000',
    priceUnit: '／ month (five months)',
    priceTotalNote: 'Five months · ten sessions · twice monthly',
    priceIncludes: [
      'Two online sessions per month (60 minutes each)',
      'Proprietary assessment to map where you are now',
      'Session notes and themes set for next time',
      'Written follow-up between sessions',
      'A closing review session at the end of month five',
    ],
    priceNote:
      'This programme supports self-understanding and decision-making through dialogue. It does not provide medical, psychological, legal, or financial diagnosis or advice, and no outcome is guaranteed. Start date and payment terms are agreed together.',

    closingTitle: 'Talk to us once, then decide.',
    closingBody:
      'Fit matters in work like this, so we start with a free online conversation. Check that the programme matches what you are carrying right now before committing.',
    contactLabel: 'Book a free online conversation',
  },
};

export function getIndividualContent(locale: Locale = 'ja'): IndividualContent {
  return content[locale];
}
