import type { Locale } from '../i18n/locale';

export interface TrainingType {
  tag: string;
  title: string;
  body: string;
  anchor: string;
}

export interface TrainingContent {
  heroLabel: string;
  heroTitle: string;
  heroLead: string;
  panelKicker: string;
  panelTitle: string;
  panelBody: string;
  metrics: { value: string; label: string }[];

  issuesLabel: string;
  issuesTitle: string;
  issuesLead: string;
  issues: { no: string; title: string; body: string }[];

  typesLabel: string;
  typesTitle: string;
  typesLead: string;
  types: TrainingType[];

  managerLabel: string;
  managerTitle: string;
  managerLead: string;
  managerSteps: { step: string; title: string; body: string }[];
  timelineTitle: string;
  timeline: { period: string; body: string }[];
  assessmentNote: string;
  assessmentLinkLabel: string;

  businessLabel: string;
  businessTitle: string;
  businessApproach: { no: string; title: string; body: string }[];
  businessNoteTitle: string;
  businessNoteBody: string;

  methodLabel: string;
  methodTitle: string;
  methodBody: string;
  methodForTitle: string;
  methodFor: string[];

  careerLabel: string;
  careerTitle: string;
  careerLead: string;
  careerOutcomes: { no: string; title: string; body: string }[];

  principlesLabel: string;
  principlesTitle: string;
  principleNoteTitle: string;
  principleNoteBody: string;
}

const content: Record<Locale, TrainingContent> = {
  ja: {
    heroLabel: 'TRAINING & DEVELOPMENT',
    heroTitle: '目の前の業務を、組織の目的と成長につなぐ。',
    heroLead:
      'ショートカットや作業手順だけでは、組織の実行力は育ちません。アレーライズは、目的から考える力、日々の業務を前に進める力、相談して改善する関係性を、研修と継続的な伴走でつくります。',
    panelKicker: 'FROM PURPOSE TO DAILY EXECUTION',
    panelTitle: '「分かる」から、「自分で動ける」へ。',
    panelBody: '組織の課題に合わせ、研修・メンタリング・定点観測を組み合わせて設計します。',
    metrics: [
      { value: '4', label: 'SERVICE TYPES' },
      { value: '90', label: 'DAY CHECK-IN' },
      { value: '1:1', label: 'MENTORING' },
    ],

    issuesLabel: 'ORGANIZATIONAL ISSUES',
    issuesTitle: '業務の効率化だけでは解けない、組織の「詰まり」を扱います。',
    issuesLead:
      '業務上の小さな停滞、相談のしにくさ、理念と現場の距離、研修の形骸化。これらは個人の意欲だけの問題ではなく、目的・役割・対話・学習のつながりが切れているときに起きます。',
    issues: [
      {
        no: '01 / PURPOSE',
        title: '作業は進むが、目的から逆算できない',
        body: 'Tipsや手順に終始し、「何のために」「どの成果のために」今の仕事をするのかが見えにくい状態。',
      },
      {
        no: '02 / EXECUTION',
        title: '確認待ちが増え、業務が止まる',
        body: '情報の残し方や判断基準がそろわず、空欄や個別確認が積み重なり、意思決定とオペレーションが滞る状態。',
      },
      {
        no: '03 / CULTURE',
        title: '不安や課題が、改善につながらない',
        body: '質問・相談・異論を出しにくく、不満や違和感が表面化しないまま、受け身と停滞が続く状態。',
      },
    ],

    typesLabel: 'PROGRAM TYPES',
    typesTitle: '目的に合わせて、セッションと個別メンタリングを組み合わせる。',
    typesLead:
      '一律の集合研修ではありません。集合セッションで共通言語をつくり、参加者一人ひとりへの個別メンタリングで実際の行動につなげます。以下の4つの文脈で導入いただいています。福利厚生として継続的にご利用いただくことも可能です。',
    types: [
      {
        tag: 'CONTEXT 01',
        title: '組織変革',
        body: '理念や方針が現場の判断につながっていない状態を扱います。45問のアラインメント診断でどこで接続が切れているかを可視化し、会議・情報共有・意思決定の基準を具体的に変えていきます。',
        anchor: 'manager',
      },
      {
        tag: 'CONTEXT 02',
        title: 'リーダー育成',
        body: 'マネジャー・次世代リーダー向け。チーム目標、日々の優先順位、メンバーとの育成対話をつなぐ力を育てます。集合セッションと1on1メンタリング、30日・90日後の定点観測をセットで設計します。',
        anchor: 'manager',
      },
      {
        tag: 'CONTEXT 03',
        title: '女性のキャリア支援',
        body: 'ライフイベントと仕事の両立、昇進への迷い、ロールモデルの不在。制度だけでは動かない部分を、少人数セッションと個別メンタリングで扱います。本人が自分の言葉でキャリアを描ける状態を目指します。',
        anchor: 'career',
      },
      {
        tag: 'CONTEXT 04',
        title: '事業推進・新規事業',
        body: '新規事業や変革テーマを担うチーム向け。独自の思考整理メソッドで曖昧な課題を構造化し、仮説・優先順位・実行計画をつくります。原則6か月の定点チェックで伴走します。',
        anchor: 'business',
      },
    ],

    managerLabel: 'TYPE 01',
    managerTitle: 'マネジャー研修・伴走',
    managerLead:
      'マネジャーが、理念を現場の優先順位・判断・育成対話へ翻訳できる状態をつくります。個人の評価をする診断ではなく、チームの仕組みと対話を改善するための共通言語です。',
    managerSteps: [
      {
        step: 'STEP 01',
        title: 'アラインメント診断',
        body: '理念理解、チーム目標、役割の明確さ、成長実感、上司・学習環境の5領域を45問で確認します。個人結果と匿名化したチーム傾向を可視化します。',
      },
      {
        step: 'STEP 02',
        title: '結果共有とマネジャー対話',
        body: 'どこで接続が切れているかを特定し、チームで変えるべき会議、情報共有、1on1、判断基準を決めます。',
      },
      {
        step: 'STEP 03',
        title: '実務に落とす研修',
        body: '抽象的なフレームワークを教えるだけでなく、実際の案件・データ・顧客対応を題材に、目的思考と優先順位づけを練習します。',
      },
      {
        step: 'STEP 04',
        title: '30日・90日後の定点観測',
        body: '15問のPulse測定と振り返りを行い、変化と停滞を確認。必要に応じてマネジャーへのフォローセッションを実施します。',
      },
    ],
    timelineTitle: '導入から90日までの流れ',
    timeline: [
      { period: 'WEEK 0', body: '課題整理・設計' },
      { period: 'WEEK 1–2', body: '45問診断・結果分析' },
      { period: 'WEEK 3–4', body: '研修・対話・行動設計' },
      { period: 'DAY 30 / 90', body: 'Pulse測定・振り返り' },
    ],
    assessmentNote:
      'アラインメント診断は、個人向けの「ライフアライメント診断」で用いている設問設計を、組織・チームの文脈に合わせて再構成したものです。個人版は無料でお試しいただけます。',
    assessmentLinkLabel: '個人向けライフアライメント診断を見る',

    businessLabel: 'TYPE 02 & 04',
    businessTitle: '新規事業・ビジネスを、半年間の実行サイクルで進める。',
    businessApproach: [
      {
        no: '01 / FRAME',
        title: '論点を構造化する',
        body: '「何を決めるべきか」「何が分かっていないか」を整理し、目の前の作業を目的と成果に結び直します。',
      },
      {
        no: '02 / PRIORITIZE',
        title: '優先順位を決める',
        body: 'すべてを同時に進めず、今検証する仮説と、後回しにする論点を明確にします。',
      },
      {
        no: '03 / ACT',
        title: '次の実行を決める',
        body: '会議で終わらせず、担当、期限、確認指標を決め、次の検証へつなげます。',
      },
      {
        no: '04 / CHECK-IN',
        title: '定点で見直す',
        body: '月次チェックインで、進捗だけでなく前提・論点・意思決定を更新します。',
      },
    ],
    businessNoteTitle: '対象：新規事業担当者、事業責任者、プロジェクトリーダー',
    businessNoteBody:
      '新規事業型はワークショップを中心に、ビジネスメンタリングは個人または少人数チームに対して原則6か月間の伴走として設計します。',

    methodLabel: 'METHOD',
    methodTitle: '独自の思考整理メソッド',
    methodBody:
      '頭の中にある曖昧な考えを書き出し、構造化するための独自メソッドです。何が事実で、何が解釈で、何を望んでいるのかを切り分け、優先順位を明確にしたうえで具体的な行動につなげます。感情を記録することが目的ではなく、思考の整理と意思決定の支援を目的とした法人向けプログラムです。',
    methodForTitle: 'こんな課題におすすめです',
    methodFor: [
      '新規事業の検討が進まない、議論が抽象的なまま終わる',
      '管理職・リーダー層の意思決定スピードを上げたい',
      'チームの思考を揃え、実行に移す文化をつくりたい',
      'キャリアや事業の方向性に迷いがある個人・メンバーへの支援',
    ],

    careerLabel: 'TYPE 03',
    careerTitle: 'キャリア支援・個別メンタリング',
    careerLead:
      '「今の仕事をどう成長につなげるか」を、本人が自分の言葉で整理できるようにします。人生論だけに寄せず、現職の役割、強み、伸ばす能力、次の行動まで具体化します。',
    careerOutcomes: [
      {
        no: 'REFLECT',
        title: '現在地を整理する',
        body: '担っている役割、できるようになったこと、仕事への違和感を、事実と言葉で整理します。',
      },
      {
        no: 'DEFINE',
        title: '成長テーマを決める',
        body: '今後伸ばす専門性・行動・経験を絞り、現実的な成長目標に変換します。',
      },
      {
        no: 'ACT',
        title: '日々の行動につなげる',
        body: '1on1、仕事の取り方、学び方を設計し、上司・チームとの対話にも接続します。',
      },
    ],

    principlesLabel: 'DESIGN PRINCIPLES',
    principlesTitle: '研修を「一度きりのイベント」にしないために。',
    principleNoteTitle: '小さく話せる単位で始め、実務と定点観測に戻す。',
    principleNoteBody:
      '大人数で抽象的な話を聞くだけでは、発言しにくさや形骸化が残ります。対象者やテーマを絞り、実際の業務課題を題材にし、研修後にも短いチェックインを置くことで、学びを現場の習慣に変えていきます。',
  },

  en: {
    heroLabel: 'TRAINING & DEVELOPMENT',
    heroTitle: 'Connecting daily work to organizational purpose and growth.',
    heroLead:
      'Shortcuts and procedures alone do not build an organization that can execute. Allerise develops the ability to think from purpose, to move daily work forward, and to raise issues and improve together — through training and continuous support.',
    panelKicker: 'FROM PURPOSE TO DAILY EXECUTION',
    panelTitle: 'From “I understand” to “I can act on my own.”',
    panelBody:
      'We combine training, mentoring, and regular check-ins, designed around the issues your organization actually faces.',
    metrics: [
      { value: '4', label: 'SERVICE TYPES' },
      { value: '90', label: 'DAY CHECK-IN' },
      { value: '1:1', label: 'MENTORING' },
    ],

    issuesLabel: 'ORGANIZATIONAL ISSUES',
    issuesTitle: 'We work on the blockages that efficiency alone cannot solve.',
    issuesLead:
      'Small stalls in daily work, difficulty raising concerns, distance between mission and the front line, training that becomes a formality. These are not simply questions of individual motivation — they appear when purpose, roles, dialogue, and learning become disconnected.',
    issues: [
      {
        no: '01 / PURPOSE',
        title: 'Work moves, but no one works back from the goal',
        body: 'Discussion stays at the level of tips and procedures, and it becomes unclear what outcome the current work is meant to serve.',
      },
      {
        no: '02 / EXECUTION',
        title: 'Work stops while waiting for confirmation',
        body: 'Inconsistent record-keeping and decision criteria create gaps and one-off checks that slow both decisions and operations.',
      },
      {
        no: '03 / CULTURE',
        title: 'Concerns never turn into improvement',
        body: 'Questions, requests, and dissent are hard to voice, so friction stays below the surface and passivity sets in.',
      },
    ],

    typesLabel: 'PROGRAM TYPES',
    typesTitle: 'Group sessions and 1:1 mentoring, combined for your purpose.',
    typesLead:
      'Not a standard course. Group sessions build a shared language; one-to-one mentoring turns it into action for each participant. Companies bring us in for the four contexts below, and the programme can run continuously as an employee benefit.',
    types: [
      {
        tag: 'CONTEXT 01',
        title: 'Organizational change',
        body: 'For when the mission and direction no longer reach everyday decisions. A 45-question alignment assessment shows where the connection breaks, and we change the meetings, information flows, and decision criteria that hold it back.',
        anchor: 'manager',
      },
      {
        tag: 'CONTEXT 02',
        title: 'Leadership development',
        body: 'For managers and next-generation leaders: connecting team goals, daily priorities, and development conversations. Group sessions, 1:1 mentoring, and pulse checks at 30 and 90 days are designed as one package.',
        anchor: 'manager',
      },
      {
        tag: 'CONTEXT 03',
        title: 'Career support for women',
        body: 'Balancing life events with work, hesitation about promotion, the absence of role models. Small-group sessions and individual mentoring address what policy alone cannot move, so each person can describe her own career in her own words.',
        anchor: 'career',
      },
      {
        tag: 'CONTEXT 04',
        title: 'Business and new ventures',
        body: 'For teams leading new ventures or change initiatives. Our own method for structuring thinking turns ambiguous problems into hypotheses, priorities, and an execution plan, with check-ins over a six-month engagement.',
        anchor: 'business',
      },
    ],

    managerLabel: 'TYPE 01',
    managerTitle: 'Manager training & support',
    managerLead:
      'We help managers translate the company mission into on-the-ground priorities, decisions, and development conversations. This is not an assessment that rates individuals — it is a shared language for improving how a team works and talks.',
    managerSteps: [
      {
        step: 'STEP 01',
        title: 'Alignment assessment',
        body: '45 questions across five areas: understanding of the mission, team goals, role clarity, sense of growth, and the manager and learning environment. Individual results and anonymized team trends are visualized.',
      },
      {
        step: 'STEP 02',
        title: 'Results dialogue with managers',
        body: 'We identify where the connection breaks down, then decide which meetings, information flows, 1:1s, and decision criteria the team will change.',
      },
      {
        step: 'STEP 03',
        title: 'Training grounded in real work',
        body: 'Rather than teaching frameworks in the abstract, participants practise purpose-driven thinking and prioritization on their own live projects, data, and client situations.',
      },
      {
        step: 'STEP 04',
        title: 'Pulse checks at 30 and 90 days',
        body: 'A 15-question pulse check and review confirm what has changed and what has stalled, with follow-up sessions for managers as needed.',
      },
    ],
    timelineTitle: 'From kickoff to day 90',
    timeline: [
      { period: 'WEEK 0', body: 'Framing and design' },
      { period: 'WEEK 1–2', body: '45-question assessment and analysis' },
      { period: 'WEEK 3–4', body: 'Training, dialogue, action design' },
      { period: 'DAY 30 / 90', body: 'Pulse check and review' },
    ],
    assessmentNote:
      'The alignment assessment adapts the question design used in our personal Life Alignment assessment to an organizational and team context. The personal version is free to try.',
    assessmentLinkLabel: 'View the personal Life Alignment assessment',

    businessLabel: 'TYPE 02 & 04',
    businessTitle: 'Moving business forward in a six-month execution cycle.',
    businessApproach: [
      {
        no: '01 / FRAME',
        title: 'Structure the questions',
        body: 'Clarify what needs to be decided and what is still unknown, and reconnect today’s work to purpose and outcome.',
      },
      {
        no: '02 / PRIORITIZE',
        title: 'Decide what comes first',
        body: 'Rather than pursuing everything at once, define the hypothesis to test now and the questions that can wait.',
      },
      {
        no: '03 / ACT',
        title: 'Decide the next action',
        body: 'Meetings end with an owner, a deadline, and a metric — leading into the next round of validation.',
      },
      {
        no: '04 / CHECK-IN',
        title: 'Review at fixed intervals',
        body: 'Monthly check-ins update not only progress but the assumptions, open questions, and decisions behind it.',
      },
    ],
    businessNoteTitle: 'For new business owners, business leads, and project leaders',
    businessNoteBody:
      'The new business type is workshop-led; business mentoring is designed as a six-month engagement with an individual or a small team.',

    methodLabel: 'METHOD',
    methodTitle: 'Our method for structuring thinking',
    methodBody:
      'A proprietary method for writing out and structuring what is in your head — separating fact from interpretation from what you actually want, setting priorities, and turning it into concrete action. It is built for organizational decision-making, not for recording feelings.',
    methodForTitle: 'Recommended for teams facing',
    methodFor: [
      'Stalled new business discussions that stay abstract',
      'Leaders who need faster, clearer decisions',
      'Teams that want a culture of aligned thinking and execution',
      'Individuals unsure about career or business direction',
    ],

    careerLabel: 'TYPE 03',
    careerTitle: 'Career support & 1:1 mentoring',
    careerLead:
      'We help people articulate, in their own words, how their current work connects to their growth. Not abstract life advice — concrete work on role, strengths, capabilities to build, and the next action.',
    careerOutcomes: [
      {
        no: 'REFLECT',
        title: 'Map where you are',
        body: 'Put the role you carry, what you have become able to do, and the friction you feel into facts and language.',
      },
      {
        no: 'DEFINE',
        title: 'Choose a growth theme',
        body: 'Narrow the expertise, behaviour, and experience to build next, and turn it into a realistic growth goal.',
      },
      {
        no: 'ACT',
        title: 'Connect it to daily work',
        body: 'Design 1:1s, how work is taken on, and how learning happens — and connect it to conversations with managers and teammates.',
      },
    ],

    principlesLabel: 'DESIGN PRINCIPLES',
    principlesTitle: 'So that training is never a one-off event.',
    principleNoteTitle: 'Start small enough to speak up, then return to real work and regular review.',
    principleNoteBody:
      'Listening to abstract content in a large room leaves people unwilling to speak and the programme a formality. By narrowing the audience and theme, working on real business problems, and placing short check-ins after the session, learning becomes a habit on the ground.',
  },
};

export function getTrainingContent(locale: Locale = 'ja'): TrainingContent {
  return content[locale];
}
