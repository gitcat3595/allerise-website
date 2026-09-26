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
    "heroLabel": "個人向け伴走サービス / TRANSITION PARTNER",
    "heroTitle": "人生の移行を支えるパートナー。",
    "heroLead": "出産、転職、昇進、移住、独立。人生のステージが変わるとき、考えを整理することも、決めたことを実行に移すことも、一人で担う必要はありません。これからの方向を考えたい方にも、目指すものは明確で、着実に進めるための伴走者がほしい方にも。対話と体系立てたメソッド、定期的なチェックインを通じて、望む暮らしや働き方への移行を支えます。",
    "panelKicker": "TRANSITION PARTNER",
    "panelTitle": "考えを深める。決めたことを進める。",
    "panelBody": "壁打ちの相手として、行動をともに振り返るアカウンタビリティーパートナーとして。今のあなたに必要な関わり方で、人生の次のステージに伴走します。",
    "metrics": [
        {
            "value": "5",
            "label": "MONTHS"
        },
        {
            "value": "10",
            "label": "SESSIONS"
        },
        {
            "value": "1:1",
            "label": "ONLINE"
        }
    ],
    "notLabel": "OUR APPROACH",
    "notTitle": "方向を考えるときも、実行を続けるときも。",
    "notLead": "仕事では判断も実行もできる。それでも、自分の人生のために決めたことは、日々の仕事や家族の予定の中で後回しになることがあります。定期的に話す相手と振り返る時間を持つことで、自分のための行動にも優先順位とリズムをつくる。方向を探す対話から、すでにある計画の実行支援まで、必要なところから始められます。",
    "notCards": [
        {
            "no": "01 / 対話・壁打ち",
            "title": "考えを整理し、判断を磨く",
            "body": "言葉にすることで、自分の考えがはっきりする。問いや別の視点を通じて、大切にしたいこと、選択肢、判断の前提を確かめます。方向を探すときにも、すでに決めた方針を検討するときにも使える時間です。"
        },
        {
            "no": "02 / 行動の設計",
            "title": "やりたいことを、実行できる計画に",
            "body": "目指す状態と今の状況の間にある課題を整理し、優先順位、次にやること、取り組む時期を具体的にします。仕事や家庭の予定も踏まえて、実際に動かせる計画を一緒に考えます。"
        },
        {
            "no": "03 / アカウンタビリティー",
            "title": "決めたことを、継続して進める",
            "body": "次回までに取り組むことを自分で決め、定期的なチェックインで進捗と結果を共有します。できたこと、止まっていることを率直に振り返り、必要なら計画を調整する。自分との約束を行動につなげるための伴走です。"
        }
    ],
    "forLabel": "LIFE TRANSITIONS",
    "forTitle": "暮らしや役割が変わる、その前後に。",
    "forItems": [
        "出産・育休・復職。目指す働き方に向けて、家族との分担や時間の使い方を具体的に変えていきたい。",
        "転職・キャリアチェンジ。次の方向を考えたい、あるいは決めた転職活動や学び直しを着実に進めたい。",
        "昇進・役割の変化。新しい役割での判断や行動を、社外の相手と定期的に振り返りたい。",
        "海外への移住・帰国。実現したい暮らしに向けて、仕事と生活の準備を計画的に進めたい。",
        "離婚・家族の形の変化。これからの暮らしを考え、必要な選択や日常の組み立てに取り組みたい。",
        "独立・セカンドキャリア。構想はあるけれど、本業の忙しさで後回しにしがちな準備を継続して進めたい。"
    ],
    "sessionLabel": "FROM REFLECTION TO ACTION",
    "sessionTitle": "考えることと、進めることに、仕組みを。",
    "sessionLead": "現状把握、課題特定、仮説、行動計画、実行と修正。セルフコンサルティングの手順を軸に、対話を具体的な選択と行動につなげます。すでに目標や計画がある方は、その内容と実行の妨げを確かめるところから。まだ方向を考えている方は、現在地と望みの整理から始めます。",
    "sessionSteps": [
        {
            "step": "01 / 現状把握",
            "title": "現在地と目指す状態を確かめる",
            "body": "今の状況、望んでいる変化、すでに決めていることを共有します。必要に応じてライフアライメントも使い、何に取り組む時間なのかを明確にします。"
        },
        {
            "step": "02 / 課題・仮説",
            "title": "何が前進を妨げているかを見立てる",
            "body": "判断材料、時間の配分、優先順位、周囲との調整。考えがまとまらない理由や、計画が動かない理由を整理し、どこを変えると進みそうかを一緒に考えます。"
        },
        {
            "step": "03 / 行動計画",
            "title": "次回までの行動を決める",
            "body": "何を、いつまでに、どこまで進めるか。自分で納得できる行動と期限を決めます。計画がすでにある場合は、その実行に必要な段取りや条件を具体的にします。"
        },
        {
            "step": "04 / 実行・修正",
            "title": "進捗を共有し、次の行動につなげる",
            "body": "定期的なチェックインで、実際に取り組んだことと結果を確認します。進んだ点も、止まった点も検討し、優先順位や進め方を更新する。このサイクルを伴走者と続けていきます。"
        }
    ],
    "priceLabel": "PROGRAMME",
    "priceTitle": "継続して向き合う、5ヶ月間。",
    "priceName": "人生の移行を支えるパートナー｜Transition Partner",
    "priceAmount": "55,000円",
    "priceUnit": "／ 月（5ヶ月間）",
    "priceTotalNote": "5ヶ月間・全10回（月2回）｜総額275,000円",
    "priceIncludes": [
        "月2回のオンラインセッション（1回60分）",
        "独自アセスメントによる現在地の確認",
        "セッション記録と次回テーマの整理",
        "セッション間のテキストでのやりとり",
        "5ヶ月終了時の振り返りセッション"
    ],
    "priceNote": "本プログラムは、個人の自己理解・意思決定・行動を支えるサービスです。医療・心理・法律・金融に関する診断や助言、成果の保証は行いません。開始時期・お支払い方法はご相談のうえ決定します。",
    "closingTitle": "次のステージへ、進むためのパートナーを。",
    "closingBody": "これからの方向を整理したい方も、決めたことを着実に進めるための相手がほしい方も。無料の初回相談で、取り組みたいことと、どんな伴走が役立つかを一緒に確かめましょう。",
    "contactLabel": "無料の初回相談を申し込む"
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
