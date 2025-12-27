#!/bin/bash

# Script deploy tự động: Build + Deploy
# Sử dụng: bash deploy.sh

set -e  # Exit on error

echo "🚀 Bắt đầu quy trình deploy..."

# 1. Build project
echo "📦 Building project..."
yarn build

# 2. Deploy lên server
echo "📤 Deploying to server..."
bash deploy-local.sh duta

echo ""
echo "✅ Hoàn tất! Website đã được deploy."
