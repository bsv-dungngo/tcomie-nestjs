#!/bin/bash

# Script deploy Next.js static site lên Amazon Linux 2023 với Nginx
# Chạy script này trên server: bash deploy-server.sh

set -e  # Exit on error

# Cấu hình
DOMAIN="${DOMAIN:-yourdomain.com}"  # Thay đổi domain của bạn
WEB_ROOT="/var/www/html/tcomie"     # Thư mục chứa website
NGINX_CONF="/etc/nginx/conf.d/tcomie.conf"

echo "🚀 Bắt đầu setup server..."

# 1. Update system
echo "📦 Updating system packages..."
sudo yum update -y

# 2. Install Nginx
echo "📦 Installing Nginx..."
if ! command -v nginx &> /dev/null; then
    sudo yum install -y nginx
    sudo systemctl enable nginx
    sudo systemctl start nginx
    echo "✅ Nginx đã được cài đặt"
else
    echo "✅ Nginx đã được cài đặt sẵn"
fi

# 3. Tạo thư mục web root
echo "📁 Creating web directory..."
sudo mkdir -p "$WEB_ROOT"
sudo chown -R $USER:$USER "$WEB_ROOT"
sudo chmod -R 755 "$WEB_ROOT"

# 4. Tạo cấu hình Nginx (hỗ trợ cả Frontend và API)
echo "⚙️  Creating Nginx configuration..."
API_PORT="${API_PORT:-3001}"  # Port cho API server (có thể thay đổi)
API_PATH="${API_PATH:-/api}"  # Path prefix cho API

sudo tee "$NGINX_CONF" > /dev/null <<EOF
server {
    listen 80;
    server_name ${DOMAIN} www.${DOMAIN};

    root ${WEB_ROOT};
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # FastAPI Proxy - Uncomment khi đã setup API
    # location /api/ {
    #     proxy_pass http://127.0.0.1:8000;
    #     proxy_http_version 1.1;
    #     proxy_set_header Upgrade \$http_upgrade;
    #     proxy_set_header Connection 'upgrade';
    #     proxy_set_header Host \$host;
    #     proxy_set_header X-Real-IP \$remote_addr;
    #     proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    #     proxy_set_header X-Forwarded-Proto \$scheme;
    #     proxy_cache_bypass \$http_upgrade;
    #     proxy_read_timeout 300s;
    #     proxy_connect_timeout 75s;
    #     
    #     # CORS headers (nếu cần)
    #     # add_header Access-Control-Allow-Origin *;
    #     # add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS";
    #     # add_header Access-Control-Allow-Headers "Authorization, Content-Type";
    # }

    # Redirect root to Vietnamese homepage
    location = / {
        return 301 /vi/trang-chu/;
    }

    # Serve static files
    location / {
        try_files \$uri \$uri/ \$uri.html /index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot|webp|avif)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle Next.js _next folder
    location /_next/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Error pages
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
    
    location = /50x.html {
        root /usr/share/nginx/html;
    }
}
EOF

# 5. Test Nginx configuration
echo "🧪 Testing Nginx configuration..."
sudo nginx -t

# 6. Reload Nginx
echo "🔄 Reloading Nginx..."
sudo systemctl reload nginx

echo ""
echo "✅ Setup hoàn tất!"
echo ""
echo "📝 Các bước tiếp theo:"
echo "1. Copy files từ build/ lên server vào thư mục: $WEB_ROOT"
echo "2. Cấu hình domain trong file: $NGINX_CONF"
echo "3. Nếu dùng SSL, cài đặt Certbot: sudo yum install -y certbot python3-certbot-nginx"
echo "4. Chạy: sudo certbot --nginx -d ${DOMAIN} -d www.${DOMAIN}"
echo ""
echo "🌐 Website sẽ được serve tại: http://${DOMAIN}"

