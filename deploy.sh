#!/bin/bash
set -e

REPO="https://github.com/danilocampos/gpd-novo-site.git"

echo "→ Building..."
npm run build

echo "→ Deploying dist/ to GitHub..."
cd dist
rm -rf .git
git init -q
git checkout -b main
git add -A
git commit -q -m "deploy $(date '+%Y-%m-%d %H:%M')"
git remote add origin "$REPO"
git push --force origin main
git push --force origin main:master

cd ..
echo "✓ Done: $REPO"
