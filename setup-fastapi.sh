#!/bin/bash

# Script setup FastAPI trên server
# Chạy từ local: bash setup-fastapi.sh
# Hoặc chạy trực tiếp trên server

set -e  # Exit on error

SSH_HOST="${1:-duta}"  # SSH host từ ~/.ssh/config
API_REPO="git@github.com:bsv-dungngo/tcomie-api.git"
API_PATH="/home/ec2-user/tcomie-api"
API_PORT="${API_PORT:-8000}"

echo "🚀 Bắt đầu setup FastAPI..."

# Tạo script setup trên server
cat > /tmp/setup-fastapi-server.sh <<'SETUP_SCRIPT'
#!/bin/bash
set -e

API_REPO="$1"
API_PATH="$2"
API_PORT="$3"

echo "📦 Installing Python 3 and dependencies..."
sudo yum update -y
sudo yum install -y python3 python3-pip python3-devel gcc

echo "📦 Installing FastAPI dependencies..."
sudo pip3 install fastapi uvicorn gunicorn

# Clone API repository
if [ -d "$API_PATH" ]; then
    echo "📥 API repository đã tồn tại. Pulling latest code..."
    cd "$API_PATH"
    git pull
else
    echo "📥 Cloning API repository..."
    git clone "$API_REPO" "$API_PATH"
    cd "$API_PATH"
fi

# Install project dependencies
if [ -f "requirements.txt" ]; then
    echo "📦 Installing project dependencies..."
    pip3 install -r requirements.txt
else
    echo "⚠️  Không tìm thấy requirements.txt. Cài đặt dependencies cơ bản..."
    pip3 install fastapi uvicorn gunicorn
fi

# Create systemd service file
echo "⚙️  Creating systemd service..."
sudo tee /etc/systemd/system/tcomie-api.service > /dev/null <<EOF
[Unit]
Description=Tcomie FastAPI Application
After=network.target

[Service]
User=ec2-user
Group=ec2-user
WorkingDirectory=$API_PATH
Environment="PATH=$API_PATH/venv/bin:/usr/local/bin:/usr/bin:/bin"
ExecStart=/usr/local/bin/gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker -b 127.0.0.1:$API_PORT
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

# Create log directory
sudo mkdir -p /var/log/tcomie-api
sudo chown ec2-user:ec2-user /var/log/tcomie-api

echo "✅ FastAPI setup hoàn tất!"
echo "📁 API path: $API_PATH"
echo "🔌 API port: $API_PORT"
echo ""
echo "📝 Để start API:"
echo "   sudo systemctl start tcomie-api"
echo "   sudo systemctl enable tcomie-api  # Auto start on boot"
echo ""
echo "📝 Để xem logs:"
echo "   sudo journalctl -u tcomie-api -f"
SETUP_SCRIPT

# Upload và chạy script trên server
scp /tmp/setup-fastapi-server.sh $SSH_HOST:/tmp/
ssh $SSH_HOST "chmod +x /tmp/setup-fastapi-server.sh && bash /tmp/setup-fastapi-server.sh $API_REPO $API_PATH $API_PORT"
rm /tmp/setup-fastapi-server.sh

echo ""
echo "✅ FastAPI setup hoàn tất!"
echo ""
echo "📝 Các bước tiếp theo:"
echo "1. Cấu hình database (sẽ setup sau)"
echo "2. Cấu hình Nginx để proxy API:"
echo "   - Uncomment API location trong /etc/nginx/conf.d/tcomie.conf"
echo "   - sudo nginx -t && sudo systemctl reload nginx"
echo "3. Start API service:"
echo "   ssh $SSH_HOST 'sudo systemctl start tcomie-api && sudo systemctl enable tcomie-api'"
echo "4. Kiểm tra API:"
echo "   ssh $SSH_HOST 'curl http://localhost:$API_PORT/docs'"

