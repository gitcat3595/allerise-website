# allerise.com — Cloudflare Pages デプロイ手順

Studio.Design から Astro 静的サイト + Cloudflare Pages Functions への移行ガイド。

## リポジトリ構成

```
allerise-website/
├── src/                  # Astro ページ・コンポーネント
├── public/               # 静的アセット（favicon, images, _redirects）
├── functions/api/        # Cloudflare Pages Functions（お問い合わせ API）
├── scrape/               # 旧サイトからのスクレイプデータ（参考用）
├── scripts/scrape.mjs    # 旧サイト再スクレイプ用
├── astro.config.mjs
├── DEPLOYMENT.md         # 本ファイル
└── .env.example          # 環境変数テンプレート
```

## 前提

- Cloudflare アカウント（allerise.com ドメイン管理）
- GitHub リポジトリ（推奨: 専用リポジトリ `allerise-website`）
- お問い合わせメール送信用: [Resend](https://resend.com) または [Formspree](https://formspree.io)

---

## Step 1: GitHub リポジトリ作成

```bash
cd 04_Projects/allerise-website
git init
git add .
git commit -m "feat: migrate allerise.com from Studio.Design to Astro"
git remote add origin git@github.com:YOUR_ORG/allerise-website.git
git push -u origin main
```

---

## Step 2: Cloudflare Pages プロジェクト作成

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create**
2. **Pages** → **Connect to Git**
3. リポジトリ `allerise-website` を選択
4. ビルド設定:

| 項目 | 値 |
|------|-----|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |

5. **Environment variables**（Production）:

```
CONTACT_EMAIL=contact@allerise.com
RESEND_API_KEY=re_xxxxxxxxxxxx
```

または Formspree を使う場合:

```
FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

6. **Save and Deploy**

> Pages Functions（`functions/`）は自動検出されます。ビルド後 `/api/contact` が有効になります。

---

## Step 3: お問い合わせフォーム設定

### 推奨: Resend

1. [resend.com](https://resend.com) でアカウント作成
2. **Domains** → `allerise.com` を追加
3. Cloudflare DNS に表示される SPF/DKIM レコードを追加
4. API Key を発行 → `RESEND_API_KEY` に設定

送信元 `noreply@allerise.com` を使うにはドメイン認証が必要です。認証前は Resend のサンドボックスドメインでテストできます。

### 代替: Formspree

1. [formspree.io](https://formspree.io) でフォーム作成
2. エンドポイント URL を `FORMSPREE_ENDPOINT` に設定
3. `functions/api/contact.ts` がプロキシ送信します

---

## Step 4: プレビュー確認

デプロイ後、Cloudflare Pages のプレビュー URL（`*.pages.dev`）で以下を確認:

- [ ] 全ページ表示（/, /company, /service, /case, /contact）
- [ ] 実績詳細ページ
- [ ] お問い合わせフォーム送信 → `/contact/thanks` へ遷移
- [ ] モバイル表示
- [ ] `_redirects`（/contact-thanks → /contact/thanks）

---

## Step 5: DNS 切り替え（本番）

### 現状の想定

- `allerise.com` は Cloudflare で管理
- 現在は Studio.Design のカスタムドメイン設定でホスティング

### 切り替え手順

#### 5-1. Studio.Design 側の準備

1. Studio 管理画面でカスタムドメイン設定を確認（切り替え前にエクスポート不可のため、本リポジトリが代替）
2. **切り替え当日**に Studio のカスタムドメインを解除（または無効化）

#### 5-2. Cloudflare Pages にカスタムドメイン追加

1. Pages プロジェクト → **Custom domains** → **Set up a custom domain**
2. `allerise.com` を入力
3. `www.allerise.com` も追加（推奨）

#### 5-3. DNS レコード更新

Cloudflare DNS（allerise.com ゾーン）で以下を設定:

**本番（allerise.com）**

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| CNAME | `@` | `<project-name>.pages.dev` | Proxied (オレンジ雲) |
| CNAME | `www` | `<project-name>.pages.dev` | Proxied |

> Cloudflare が `@` を CNAME フラット化するため、A レコードは不要です。

**旧 Studio 向けレコードが残っている場合**

Studio 用の CNAME / A レコードを **削除または無効化** してください。例:

- `allerise.com` → `studio.site` 系の CNAME
- その他 Studio が案内していた DNS レコード

#### 5-4. SSL/TLS

- Cloudflare → **SSL/TLS** → **Full (strict)** を推奨
- Pages は自動で SSL 証明書を発行

#### 5-5. 切り替え確認

```bash
# DNS 伝播確認（数分〜最大48時間、Cloudflare 内は通常数分）
dig allerise.com CNAME +short
curl -I https://allerise.com
```

確認項目:

- [ ] https://allerise.com が新サイトを表示
- [ ] https://www.allerise.com がリダイレクトまたは表示
- [ ] お問い合わせフォームが動作
- [ ] Google Search Console で URL を再インデックス（任意）

---

## Step 6: Studio.Design 解約

DNS 切り替え・動作確認完了後:

1. お問い合わせフォーム・全ページが新サイトで問題ないことを最終確認
2. Studio.Design のサブスクリプション解約

---

## ローカル開発

```bash
npm install
npm run dev        # http://localhost:4321

# 旧サイトからコンテンツ再取得（Studio がまだ公開中の間）
npm run scrape
```

### お問い合わせ API のローカルテスト

Pages Functions は `wrangler pages dev` でローカルテスト可能:

```bash
npm run build
npx wrangler pages dev dist --compatibility-date=2024-01-01
```

---

## トラブルシューティング

| 症状 | 対処 |
|------|------|
| フォーム送信 500 | `RESEND_API_KEY` または `FORMSPREE_ENDPOINT` を確認 |
| 旧サイトが表示される | DNS キャッシュクリア、Studio 側ドメイン解除を確認 |
| 404 on /api/contact | `functions/` がリポジトリルートにあるか確認 |
| Resend 送信失敗 | ドメイン認証（SPF/DKIM）完了を確認 |

---

## 今後の更新

- **実績追加**: `src/data/cases.ts` を編集 → push で自動デプロイ
- **デザイン調整**: `src/styles/global.css` および各 `.astro` ファイル
- **画像追加**: `public/images/` に配置
