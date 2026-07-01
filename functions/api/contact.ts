interface Env {
  RESEND_API_KEY?: string;
  CONTACT_EMAIL?: string;
  FORMSPREE_ENDPOINT?: string;
  TURNSTILE_SECRET_KEY?: string;
}

interface ContactPayload {
  category: string;
  company: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  privacy?: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  service: 'サービス内容について',
  press: '取材・プレス関連について',
  recruitment: '採用について',
  other: 'その他',
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  if (request.headers.get('content-type')?.includes('application/json') === false) {
    return json({ error: 'Invalid content type' }, 400);
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const { category, company, name, email, phone, message } = body;

  if (!category || !company || !name || !email || !message) {
    return json({ error: '必須項目を入力してください' }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'メールアドレスの形式が正しくありません' }, 400);
  }

  const categoryLabel = CATEGORY_LABELS[category] || category;
  const toEmail = env.CONTACT_EMAIL || 'contact@allerise.com';

  const emailBody = `
お問い合わせ種別: ${categoryLabel}
法人名・団体名: ${company}
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || '（未入力）'}

お問い合わせ内容:
${message}
`.trim();

  // Option 1: Resend API
  if (env.RESEND_API_KEY) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Allerise Website <noreply@allerise.com>',
        to: [toEmail],
        reply_to: email,
        subject: `【お問い合わせ】${categoryLabel} - ${name}様`,
        text: emailBody,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend error:', err);
      return json({ error: 'メール送信に失敗しました' }, 500);
    }

    return json({ success: true });
  }

  // Option 2: Formspree proxy
  if (env.FORMSPREE_ENDPOINT) {
    const res = await fetch(env.FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        category: categoryLabel,
        company,
        name,
        email,
        phone,
        message,
        _subject: `【お問い合わせ】${categoryLabel} - ${name}様`,
      }),
    });

    if (!res.ok) {
      return json({ error: '送信に失敗しました' }, 500);
    }

    return json({ success: true });
  }

  return json(
    {
      error:
        'メール送信が設定されていません。Cloudflare Pages の環境変数に RESEND_API_KEY または FORMSPREE_ENDPOINT を設定してください。',
    },
    500
  );
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
