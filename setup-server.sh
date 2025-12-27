#!/bin/bash

# Script setup server từ xa (chạy từ local)
# Sử dụng: bash setup-server.sh

set -e  # Exit on error

SSH_HOST="${1:-duta}"  # SSH host từ ~/.ssh/config
DOMAIN="${DOMAIN:-18.141.146.247}"  # IP hoặc domain

echo "🚀 Bắt đầu setup server từ xa..."

# Upload deploy-server.sh lên server
echo "📤 Uploading setup script..."
scp deploy-server.sh $SSH_HOST:~/

# Chạy setup script trên server
echo "⚙️  Running setup on server..."
ssh $SSH_HOST "chmod +x ~/deploy-server.sh && DOMAIN=$DOMAIN bash ~/deploy-server.sh"

echo ""
echo "✅ Setup server hoàn tất!"
echo ""
echo "📝 Bước tiếp theo:"
echo "1. Chạy: bash deploy.sh (để build và deploy files)"
echo "2. Hoặc: bash deploy-local.sh (nếu đã build sẵn)"

