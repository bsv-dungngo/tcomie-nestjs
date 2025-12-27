#!/bin/bash

# Script deploy từ local machine lên server
# Sử dụng: bash deploy-local.sh
# Hoặc: bash deploy-local.sh duta (nếu dùng SSH config khác)

set -e  # Exit on error

# Cấu hình mặc định - sử dụng SSH config "duta"
SSH_HOST="${1:-duta}"  # SSH host từ ~/.ssh/config (mặc định: duta)
WEB_ROOT="/var/www/html/tcomie"  # Thư mục web trên server

# Kiểm tra build folder
if [ ! -d "build" ]; then
    echo "❌ Thư mục build/ không tồn tại!"
    echo "📦 Đang build project..."
    yarn build
fi

echo "🚀 Bắt đầu deploy lên server..."

# Build project nếu chưa có
if [ ! -d "build" ] || [ "build" -ot "package.json" ]; then
    echo "📦 Building project..."
    yarn build
fi

# Tạo SSH command - sử dụng SSH config
SSH_CMD="ssh $SSH_HOST"

# Tạo thư mục trên server nếu chưa có
echo "📁 Creating directory on server..."
$SSH_CMD "sudo mkdir -p $WEB_ROOT && sudo chown -R ec2-user:ec2-user $WEB_ROOT"

# Sync files lên server
echo "📤 Uploading files to server..."
rsync -avz --delete \
    -e "ssh" \
    --exclude '.DS_Store' \
    --exclude '*.log' \
    build/ \
    $SSH_HOST:$WEB_ROOT/

# Set permissions
echo "🔐 Setting permissions..."
$SSH_CMD "sudo chown -R nginx:nginx $WEB_ROOT && sudo chmod -R 755 $WEB_ROOT"

# Reload Nginx
echo "🔄 Reloading Nginx..."
$SSH_CMD "sudo systemctl reload nginx"

echo ""
echo "✅ Deploy hoàn tất!"
echo "🌐 Website: http://18.141.146.247"
echo ""

