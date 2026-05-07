#!/bin/bash

# Safe deployment script that preserves assets
echo "🚀 Starting safe deployment..."

# Backup assets first
echo "📦 Backing up current assets..."
cp -r assets backup_assets_deploy_$(date +%Y%m%d_%H%M%S)

# Build the project
echo "🔨 Building project..."
npm run build

# Copy new build files
echo "📋 Copying new build files..."
cp dist/public/index.html ./
cp dist/public/assets/*.css assets/
cp dist/public/assets/*.js assets/

# Restore any missing assets from backup
echo "🔄 Restoring assets..."
find backup_assets_deploy_* -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.pdf" -o -name "*.mp4" | head -20 | while read file; do
    cp "$file" assets/ 2>/dev/null || true
done

# Commit and push
echo "📤 Committing and pushing..."
git add .
git commit -m "Deploy updated portfolio with expanded skills and fixed icons"
git push origin main

echo "✅ Deployment complete!"
echo "🌐 Site will be live at: https://fmyounis.github.io/GitHub.io/"
