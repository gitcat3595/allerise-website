# Allerise Corporate Website

Allerise Pte. Ltd. コーポレートサイト（[allerise.com](https://allerise.com)）の静的サイト版。

Studio.Design からの移行先。Astro + Cloudflare Pages でホスティング。

## 技術スタック

- **Framework**: [Astro](https://astro.build)（静的出力）
- **Hosting**: Cloudflare Pages
- **Contact form**: Cloudflare Pages Functions → Resend / Formspree
- **Fonts**: Noto Sans JP, Lato（Google Fonts）

## ページ一覧

| パス | 内容 |
|------|------|
| `/` | トップ |
| `/company` | 会社情報 |
| `/service` | 事業内容 |
| `/new-business-development` | 新規事業開発 |
| `/case` | 実績一覧 |
| `/case/[slug]` | 実績詳細 |
| `/contact` | お問い合わせ |
| `/contact/thanks` | 送信完了 |
| `/coming-soon` | 採用情報（準備中） |
| `/privacypolicy` | プライバシーポリシー |

## 開発

```bash
npm install
npm run dev
```

## デプロイ

詳細は [DEPLOYMENT.md](./DEPLOYMENT.md) を参照。

## ライセンス

© Allerise Pte. Ltd.
