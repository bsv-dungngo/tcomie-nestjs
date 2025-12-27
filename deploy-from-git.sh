#!/bin/bash

# Script deploy từ Git trên server
# Chạy script này trên server sau khi clone repo
# Hỗ trợ deploy cả Frontend và API

set -e  # Exit on error

GIT_REPO="git@github.com:bsv-dungngo/tcomie-nextjs.git"
PROJECT_DIR="$HOME/tcomie-nextjs"
WEB_ROOT="/var/www/html/tcomie"
API_REPO="${API_REPO:-git@github.com:bsv-dungngo/tcomie-api.git}"  # FastAPI repo
API_PATH="${API_PATH:-/home/ec2-user/tcomie-api}"  # Thư mục API
API_PORT="${API_PORT:-8000}"  # FastAPI port
DEPLOY_TYPE="${DEPLOY_TYPE:-frontend}"  # frontend, api, hoặc both

echo "🚀 Bắt đầu deploy từ Git..."

# Deploy Frontend
if [ "$DEPLOY_TYPE" = "frontend" ] || [ "$DEPLOY_TYPE" = "both" ]; then
    echo ""
    echo "📱 Deploying Frontend..."
    
    # 1. Clone hoặc pull code
    if [ -d "$PROJECT_DIR" ]; then
        echo "📥 Pulling latest frontend code..."
        cd "$PROJECT_DIR"
        git pull
    else
        echo "📥 Cloning frontend repository..."
        git clone "$GIT_REPO" "$PROJECT_DIR"
        cd "$PROJECT_DIR"
    fi

    # 2. Install dependencies
    echo "📦 Installing dependencies..."
    yarn install

    # 3. Build project
    echo "🔨 Building project..."
    yarn build

    # 4. Copy files to web root
    echo "📤 Copying files to web root..."
    sudo mkdir -p "$WEB_ROOT"
    sudo cp -r build/* "$WEB_ROOT/"
    sudo chown -R nginx:nginx "$WEB_ROOT"
    sudo chmod -R 755 "$WEB_ROOT"
    
    echo "✅ Frontend deploy hoàn tất!"
fi

# Deploy API (nếu có)
if [ "$DEPLOY_TYPE" = "api" ] || [ "$DEPLOY_TYPE" = "both" ]; then
    if [ -n "$API_REPO" ]; then
        echo ""
        echo "🔌 Deploying API..."
        
        # Clone hoặc pull API code
        if [ -d "$API_PATH" ]; then
            echo "📥 Pulling latest API code..."
            cd "$API_PATH"
            git pull
        else
            echo "📥 Cloning API repository..."
            git clone "$API_REPO" "$API_PATH"
            cd "$API_PATH"
        fi
        
        # Install dependencies và start API (tùy theo loại API)
        # FastAPI (Python)
        if [ -f "requirements.txt" ] || [ -f "pyproject.toml" ]; then
            echo "📦 Installing FastAPI dependencies..."
            pip3 install -r requirements.txt 2>/dev/null || pip3 install fastapi uvicorn gunicorn
            
            echo "🔄 Restarting FastAPI server..."
            # Stop existing process if running
            pkill -f "gunicorn.*tcomie" 2>/dev/null || true
            pm2 stop tcomie-api 2>/dev/null || true
            
            # Start with Gunicorn
            if command -v gunicorn &> /dev/null; then
                cd "$API_PATH"
                nohup gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker \
                    -b 127.0.0.1:$API_PORT \
                    --access-logfile /var/log/tcomie-api-access.log \
                    --error-logfile /var/log/tcomie-api-error.log \
                    --daemon > /dev/null 2>&1 || \
                pm2 start "gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker -b 127.0.0.1:$API_PORT" \
                    --name tcomie-api --log /var/log/tcomie-api.log
            else
                echo "⚠️  Gunicorn chưa được cài đặt. Cài đặt: sudo pip3 install gunicorn"
            fi
        # Node.js API
        elif [ -f "package.json" ]; then
            echo "📦 Installing Node.js API dependencies..."
            npm install
            
            echo "🔄 Restarting API server..."
            if command -v pm2 &> /dev/null; then
                pm2 restart tcomie-api || pm2 start npm --name tcomie-api -- start
            else
                echo "⚠️  PM2 chưa được cài đặt. Cài đặt: sudo npm install -g pm2"
            fi
        # PHP API
        elif [ -f "composer.json" ]; then
            echo "📦 Installing PHP dependencies..."
            composer install --no-dev --optimize-autoloader
            sudo systemctl restart php-fpm
        else
            echo "⚠️  Không tìm thấy file requirements.txt, package.json hoặc composer.json"
            echo "⚠️  Đảm bảo API code đã được clone đúng"
        fi
        
        echo "✅ API deploy hoàn tất!"
    else
        echo "⚠️  API_REPO chưa được cấu hình. Bỏ qua API deploy."
    fi
fi

# Reload Nginx
echo ""
echo "🔄 Reloading Nginx..."
sudo systemctl reload nginx

echo ""
echo "✅ Deploy hoàn tất!"
echo "🌐 Website: http://18.141.146.247"

