# Allerise — 次にやること（5分）

ローカルでは **コミット済み**。GitHub への push だけ、認証が必要なので手元で1回実行してください。

## 1. GitHub にリポジトリを作って push（推奨）

ターミナルで:

```bash
cd /Users/kellyyang/Documents/GitHub/kellyOS/04_Projects/allerise-website

# GitHub CLI がなければ: https://cli.github.com からインストール
gh auth login

gh repo create gitcat3595/allerise-website \
  --public \
  --source=. \
  --remote=origin \
  --push \
  --description "Allerise corporate website (Astro + Cloudflare Pages)"
```

完了後: https://github.com/gitcat3595/allerise-website

### gh を使わない場合

1. https://github.com/new?name=allerise-website を開く（空のリポジトリを作成）
2. 以下を実行:

```bash
cd /Users/kellyyang/Documents/GitHub/kellyOS/04_Projects/allerise-website
git remote add origin https://github.com/gitcat3595/allerise-website.git
git push -u origin main
```

---

## 2. Cloudflare Pages を接続

1. https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. リポジトリ `allerise-website` を選択
3. ビルド設定:

| 項目 | 値 |
|------|-----|
| Build command | `npm run build` |
| Build output | `dist` |

4. **Environment variables**（Production）:

```
CONTACT_EMAIL=contact@allerise.com
RESEND_API_KEY=（Resend で発行）
```

または Formspree:

```
FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxx
```

5. Deploy → `*.pages.dev` で動作確認

---

## 3. お問い合わせフォーム（Resend 推奨）

1. https://resend.com でアカウント作成
2. Domains → `allerise.com` 追加 → Cloudflare DNS に SPF/DKIM を設定
3. API Key を Cloudflare Pages の `RESEND_API_KEY` に設定
4. `/contact` からテスト送信

---

## 4. DNS 切り替え（本番）

Studio 解除後、Cloudflare Pages にカスタムドメイン追加:

| Type | Name | Content |
|------|------|---------|
| CNAME | `@` | `<project>.pages.dev` |
| CNAME | `www` | `<project>.pages.dev` |

Studio 向けの旧 DNS レコードを削除 → `https://allerise.com` で確認 → Studio 解約

---

詳細は [DEPLOYMENT.md](./DEPLOYMENT.md)
