# 今すぐ公開する手順（コピペ用）

コミットは完了済みです。あとは **3ステップ** だけです。  
`#` で始まる行はターミナルに貼らないでください（コメントなのでエラーになります）。

---

## ステップ 1: GitHub に空のリポジトリを作る（1分）

ブラウザで開く:

https://github.com/new?name=allerise-website

- Owner: `gitcat3595`
- Repository name: `allerise-website`
- **Add a README はオフ**（空のまま）
- **Create repository** をクリック

---

## ステップ 2: SSH キーを GitHub に登録（2分）

ターミナルで **1行ずつ** 実行:

```bash
ssh-keygen -t ed25519 -C "kelly-github" -f ~/.ssh/id_ed25519 -N ""
cat ~/.ssh/id_ed25519.pub
```

表示された文字列（`ssh-ed25519 AAAA...`）を **全部コピー**。

ブラウザで開く:

https://github.com/settings/ssh/new

- Title: `Kelly MacBook`
- Key: コピーした文字列を貼り付け
- **Add SSH key**

---

## ステップ 3: push（30秒）

```bash
cd /Users/kellyyang/Documents/GitHub/kellyOS/04_Projects/allerise-website
git remote set-url origin git@github.com:gitcat3595/allerise-website.git
ssh -T git@github.com
git push -u origin main
```

`Hi gitcat3595!` と出れば成功です。

---

## ステップ 4: Cloudflare Pages（Git 連携）

1. https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. `allerise-website` を選択
3. 設定:

| 項目 | 値 |
|------|-----|
| Build command | `npm run build` |
| Build output directory | `dist` |

4. **Environment variables**（Production）:

```
CONTACT_EMAIL=contact@allerise.com
RESEND_API_KEY=（後で設定可）
```

5. **Save and Deploy** → `https://xxxx.pages.dev` で確認

---

## ステップ 5: allerise.com を切り替え

Studio のドメイン解除後:

1. Pages プロジェクト → **Custom domains** → `allerise.com` / `www.allerise.com`
2. Cloudflare DNS:

| Type | Name | Content |
|------|------|---------|
| CNAME | `@` | `allerise-website.pages.dev`（実際の Pages URL） |
| CNAME | `www` | 同上 |

Studio 向けの古い DNS レコードは削除。

---

## お問い合わせフォームを動かす（任意・後から可）

1. https://resend.com → Domains → `allerise.com`
2. DNS に SPF/DKIM を追加
3. API Key を Cloudflare Pages の `RESEND_API_KEY` に設定

---

## つまずいたとき

| 症状 | 対処 |
|------|------|
| `Permission denied (publickey)` | ステップ2の SSH キー登録をやり直す |
| `repository not found` | ステップ1のリポジトリ作成を先に |
| Username を聞かれる | `git remote set-url origin git@github.com:gitcat3595/allerise-website.git` を実行 |
