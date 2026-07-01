#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="allerise-website"
REPO_OWNER="gitcat3595"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

cd "$ROOT"

if [[ ! -d .git ]]; then
  git init -b main
fi

git add -A
if git diff --cached --quiet; then
  echo "No changes to commit."
else
  git commit -m "$(cat <<'EOF'
Add Allerise corporate website (Astro + Cloudflare Pages).

Migrate from Studio.Design with static pages, contact form, and assets.
EOF
)"
fi

REMOTE="https://github.com/${REPO_OWNER}/${REPO_NAME}.git"

if ! git remote get-url origin &>/dev/null; then
  git remote add origin "$REMOTE"
fi

if git ls-remote --exit-code origin main &>/dev/null; then
  echo "Remote repo exists. Pushing..."
  git push -u origin main
  exit 0
fi

echo "Creating GitHub repo ${REPO_OWNER}/${REPO_NAME}..."

CRED_FILE=$(mktemp)
trap 'rm -f "$CRED_FILE"' EXIT
printf 'protocol=https\nhost=github.com\n\n' | git credential fill > "$CRED_FILE"

USERNAME=$(grep '^username=' "$CRED_FILE" | cut -d= -f2-)
TOKEN=$(grep '^password=' "$CRED_FILE" | cut -d= -f2-)

if [[ -z "${TOKEN:-}" ]]; then
  echo "GitHub credentials not found. Install gh and run: gh auth login"
  echo "Or create https://github.com/new?name=${REPO_NAME} then: git push -u origin main"
  exit 1
fi

HTTP_CODE=$(curl -sS -o /tmp/gh-create-repo.json -w '%{http_code}' \
  -X POST \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Accept: application/vnd.github+json" \
  "https://api.github.com/user/repos" \
  -d "{\"name\":\"${REPO_NAME}\",\"private\":false,\"description\":\"Allerise corporate website (Astro + Cloudflare Pages)\"}")

if [[ "$HTTP_CODE" != "201" && "$HTTP_CODE" != "422" ]]; then
  echo "Failed to create repo (HTTP ${HTTP_CODE})."
  cat /tmp/gh-create-repo.json
  exit 1
fi

git remote set-url origin "https://x-access-token:${TOKEN}@github.com/${REPO_OWNER}/${REPO_NAME}.git"
git push -u origin main
git remote set-url origin "$REMOTE"
echo "Done: https://github.com/${REPO_OWNER}/${REPO_NAME}"
