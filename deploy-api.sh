#!/bin/bash

# Script deploy API server
# Sử dụng: bash deploy-api.sh [api-type] [api-path]
# Ví dụ: bash deploy-api.sh nodejs /home/ec2-user/tcomie-api
#        bash deploy-api.sh php /var/www/api

set -e  # Exit on error

API_TYPE="${1:-fastapi}"  # fastapi, nodejs, php, python, etc.
API_PATH="${2:-/home/ec2-user/tcomie-api}"
API_PORT="${API_PORT:-8000}"  # FastAPI default port
SSH_HOST="${SSH_HOST:-duta}"

echo "🚀 Bắt đầu deploy API server..."

# Upload script lên server và chạy
cat > /tmp/deploy-api-server.sh <<'DEPLOY_SCRIPT'
#!/bin/bash
set -e

API_TYPE="$1"
API_PATH="$2"
API_PORT="$3"

# Install Node.js nếu chưa có (cho Node.js API)
if [ "$API_TYPE" = "nodejs" ]; then
    if ! command -v node &> /dev/null; then
        echo "📦 Installing Node.js..."
        curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
        sudo yum install -y nodejs
    fi
    
    # Install PM2 cho process management
    if ! command -v pm2 &> /dev/null; then
        echo "📦 Installing PM2..."
        sudo npm install -g pm2
    fi
fi

# Install Python và FastAPI dependencies (cho FastAPI)
if [ "$API_TYPE" = "fastapi" ] || [ "$API_TYPE" = "python" ]; then
    if ! command -v python3 &> /dev/null; then
        echo "📦 Installing Python 3..."
        sudo yum install -y python3 python3-pip python3-devel
    fi
    
    # Install Gunicorn cho production
    if ! command -v gunicorn &> /dev/null; then
        echo "📦 Installing Gunicorn..."
        sudo pip3 install gunicorn
    fi
    
    # Install PM2 cho process management (optional)
    if ! command -v pm2 &> /dev/null; then
        echo "📦 Installing PM2 (optional, for process management)..."
        if command -v npm &> /dev/null; then
            sudo npm install -g pm2
        else
            echo "⚠️  Node.js chưa có. PM2 sẽ được cài sau khi có Node.js"
        fi
    fi
fi

# Install PHP nếu chưa có (cho PHP API)
if [ "$API_TYPE" = "php" ]; then
    if ! command -v php &> /dev/null; then
        echo "📦 Installing PHP..."
        sudo yum install -y php php-fpm php-mysql php-json php-mbstring
        sudo systemctl enable php-fpm
        sudo systemctl start php-fpm
    fi
fi

# Tạo thư mục API
sudo mkdir -p "$API_PATH"
sudo chown -R ec2-user:ec2-user "$API_PATH"

echo "✅ API server setup hoàn tất!"
echo "📁 API path: $API_PATH"
echo "🔌 API port: $API_PORT"
DEPLOY_SCRIPT

# Upload và chạy script trên server
scp /tmp/deploy-api-server.sh $SSH_HOST:/tmp/
ssh $SSH_HOST "chmod +x /tmp/deploy-api-server.sh && bash /tmp/deploy-api-server.sh $API_TYPE $API_PATH $API_PORT"
rm /tmp/deploy-api-server.sh

echo ""
echo "✅ API server setup hoàn tất!"
echo ""
echo "📝 Các bước tiếp theo:"
echo "1. Clone API code:"
echo "   ssh $SSH_HOST 'git clone git@github.com:bsv-dungngo/tcomie-api.git $API_PATH'"
echo ""
echo "2. Install dependencies:"
if [ "$API_TYPE" = "fastapi" ] || [ "$API_TYPE" = "python" ]; then
    echo "   ssh $SSH_HOST 'cd $API_PATH && pip3 install -r requirements.txt'"
elif [ "$API_TYPE" = "nodejs" ]; then
    echo "   ssh $SSH_HOST 'cd $API_PATH && npm install'"
fi
echo ""
echo "3. Cấu hình Nginx để proxy API requests (uncomment API location trong nginx.conf)"
echo ""
echo "4. Start API server:"
if [ "$API_TYPE" = "fastapi" ] || [ "$API_TYPE" = "python" ]; then
    echo "   ssh $SSH_HOST 'cd $API_PATH && gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker -b 127.0.0.1:$API_PORT --daemon'"
    echo "   Hoặc dùng PM2:"
    echo "   ssh $SSH_HOST 'cd $API_PATH && pm2 start \"gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker -b 127.0.0.1:$API_PORT\" --name tcomie-api'"
elif [ "$API_TYPE" = "nodejs" ]; then
    echo "   ssh $SSH_HOST 'cd $API_PATH && pm2 start app.js --name tcomie-api'"
elif [ "$API_TYPE" = "php" ]; then
    echo "   ssh $SSH_HOST 'sudo systemctl restart php-fpm'"
fi

