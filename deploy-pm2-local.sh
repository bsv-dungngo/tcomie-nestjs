#!/bin/bash

# Script deploy Next.js từ local lên server với PM2 - Setup đầy đủ từ đầu
# Sử dụng: bash deploy-pm2-local.sh
# Hoặc: bash deploy-pm2-local.sh duta

set -e  # Exit on error

SSH_HOST="${1:-duta}"
PROJECT_DIR="/home/ec2-user/tcomie-nextjs"
GIT_REPO="git@github.com:bsv-dungngo/tcomie-nextjs.git"
PORT="${PORT:-3000}"
DOMAIN="tcomie.com"
NGINX_CONF="/etc/nginx/conf.d/tcomie.conf"

echo "🚀 Bắt đầu setup và deploy đầy đủ từ đầu..."
echo "🌐 Domain: https://${DOMAIN}"
echo ""

# Không cần build local, sẽ build trên server sau khi pull git
echo "ℹ️  Code sẽ được build trên server sau khi pull từ Git"

# Tạo script setup đầy đủ trên server
cat > /tmp/setup-full-server.sh <<'SETUP_SCRIPT'
#!/bin/bash
set -e

PROJECT_DIR="$1"
GIT_REPO="$2"
PORT="$3"
DOMAIN="$4"
NGINX_CONF="$5"

echo "=========================================="
echo "📦 Bước 1: Update system packages"
echo "=========================================="
sudo yum update -y

echo ""
echo "=========================================="
echo "📦 Bước 2: Install Node.js"
echo "=========================================="
if ! command -v node &> /dev/null; then
    echo "Installing Node.js 18.x..."
    curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
    sudo yum install -y nodejs
    echo "✅ Node.js version: $(node --version)"
else
    echo "✅ Node.js đã được cài đặt: $(node --version)"
fi

echo ""
echo "=========================================="
echo "📦 Bước 3: Install PM2"
echo "=========================================="
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    sudo npm install -g pm2
    pm2 startup systemd -u ec2-user --hp /home/ec2-user
    echo "✅ PM2 đã được cài đặt"
else
    echo "✅ PM2 đã được cài đặt sẵn"
fi

echo ""
echo "=========================================="
echo "📦 Bước 4: Install serve package"
echo "=========================================="
if ! command -v serve &> /dev/null && ! npm list -g serve &> /dev/null; then
    echo "Installing serve package..."
    sudo npm install -g serve
    echo "✅ serve đã được cài đặt"
else
    echo "✅ serve đã được cài đặt sẵn"
fi

echo ""
echo "=========================================="
echo "📦 Bước 5: Install Nginx"
echo "=========================================="
if ! command -v nginx &> /dev/null; then
    echo "Installing Nginx..."
    sudo yum install -y nginx
    sudo systemctl enable nginx
    sudo systemctl start nginx
    echo "✅ Nginx đã được cài đặt"
else
    echo "✅ Nginx đã được cài đặt sẵn"
    sudo systemctl start nginx || true
fi

echo ""
echo "=========================================="
echo "📁 Bước 6: Setup project directory và Git"
echo "=========================================="
sudo mkdir -p "$PROJECT_DIR"
sudo chown -R ec2-user:ec2-user "$PROJECT_DIR"

# Clone hoặc pull code
if [ ! -d "$PROJECT_DIR/.git" ]; then
    echo "📥 Cloning repository từ Git..."
    git clone "$GIT_REPO" "$PROJECT_DIR"
    echo "✅ Repository đã được clone"
else
    echo "📥 Pulling latest code từ Git..."
    cd "$PROJECT_DIR"
    git pull
    echo "✅ Code đã được cập nhật"
fi

echo ""
echo "=========================================="
echo "⚙️  Bước 7: Cấu hình Nginx"
echo "=========================================="
sudo tee "$NGINX_CONF" > /dev/null <<EOF
# Upstream cho PM2
upstream tcomie_nextjs {
    server 127.0.0.1:${PORT};
    keepalive 64;
}

# HTTP server - sẽ redirect to HTTPS sau khi có SSL
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN} www.${DOMAIN};

    # Let's Encrypt verification
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }

    # Tạm thời serve HTTP, sẽ redirect HTTPS sau khi có SSL
    # location / {
    #     return 301 https://\$server_name\$request_uri;
    # }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript 
               application/x-javascript application/xml+rss 
               application/javascript application/json;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

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
    # }

    # Proxy to PM2
    location / {
        proxy_pass http://tcomie_nextjs;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot|webp|avif)$ {
        proxy_pass http://tcomie_nextjs;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle Next.js _next folder
    location /_next/ {
        proxy_pass http://tcomie_nextjs;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}

# HTTPS server - sẽ được enable sau khi có SSL
# Uncomment sau khi chạy certbot
# server {
#     listen 443 ssl http2;
#     listen [::]:443 ssl http2;
#     server_name ${DOMAIN} www.${DOMAIN};
#
#     ssl_certificate /etc/letsencrypt/live/${DOMAIN}/fullchain.pem;
#     ssl_certificate_key /etc/letsencrypt/live/${DOMAIN}/privkey.pem;
#
#     # ... (copy config từ HTTP server ở trên)
# }
EOF

echo "✅ Nginx config đã được tạo"

# Test Nginx config
echo "🧪 Testing Nginx configuration..."
sudo nginx -t

echo ""
echo "=========================================="
echo "📦 Bước 8: Install Yarn và dependencies"
echo "=========================================="
# Install Yarn nếu chưa có
if ! command -v yarn &> /dev/null; then
    echo "Installing Yarn..."
    sudo npm install -g yarn
    echo "✅ Yarn đã được cài đặt"
else
    echo "✅ Yarn đã được cài đặt sẵn"
fi

cd "$PROJECT_DIR"

# Install dependencies
echo "📦 Installing dependencies..."
yarn install

# Build project
echo "🔨 Building project..."
yarn build

echo ""
echo "=========================================="
echo "🔄 Bước 9: Setup PM2"
echo "=========================================="
# Stop existing process
pm2 stop tcomie-nextjs 2>/dev/null || true
pm2 delete tcomie-nextjs 2>/dev/null || true

# Start với PM2 (dùng npx serve vì serve là ES Module)
echo "Starting Next.js với PM2..."
pm2 start "npx serve -s $PROJECT_DIR/build -l $PORT" --name tcomie-nextjs
pm2 save

echo ""
echo "✅ PM2 đã được setup"
pm2 list

echo ""
echo "=========================================="
echo "🔄 Bước 10: Reload Nginx"
echo "=========================================="
sudo systemctl reload nginx

echo ""
echo "=========================================="
echo "🔒 Bước 11: Setup SSL với Certbot"
echo "=========================================="
if ! command -v certbot &> /dev/null; then
    echo "Installing Certbot..."
    sudo yum install -y certbot python3-certbot-nginx
    echo "✅ Certbot đã được cài đặt"
else
    echo "✅ Certbot đã được cài đặt sẵn"
fi

echo ""
echo "⚠️  QUAN TRỌNG: Để hoàn tất setup SSL:"
echo "1. Đảm bảo domain ${DOMAIN} đã trỏ về IP server này"
echo "2. Chạy lệnh sau để cài SSL:"
echo "   sudo certbot --nginx -d ${DOMAIN} -d www.${DOMAIN}"
echo ""
echo "Hoặc chạy tự động (nếu domain đã trỏ đúng):"
read -p "Bạn có muốn cài SSL ngay bây giờ? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Đang cài SSL..."
    sudo certbot --nginx -d ${DOMAIN} -d www.${DOMAIN} --non-interactive --agree-tos --email admin@${DOMAIN} || {
        echo "⚠️  Không thể cài SSL tự động. Có thể domain chưa trỏ đúng hoặc đã có SSL."
        echo "Chạy thủ công: sudo certbot --nginx -d ${DOMAIN} -d www.${DOMAIN}"
    }
fi

echo ""
echo "=========================================="
echo "✅ Setup hoàn tất!"
echo "=========================================="
echo "🌐 Website: https://${DOMAIN}"
echo "📊 PM2 Status:"
pm2 list
echo ""
echo "📝 Useful commands:"
echo "   pm2 logs tcomie-nextjs          # Xem logs"
echo "   pm2 restart tcomie-nextjs        # Restart"
echo "   sudo systemctl status nginx      # Nginx status"
echo "   sudo nginx -t                    # Test Nginx config"
SETUP_SCRIPT

# Upload và chạy setup script (không cần upload build, sẽ build trên server)
echo "⚙️  Running full setup on server..."
scp /tmp/setup-full-server.sh $SSH_HOST:/tmp/
ssh $SSH_HOST "chmod +x /tmp/setup-full-server.sh && bash /tmp/setup-full-server.sh $PROJECT_DIR $GIT_REPO $PORT $DOMAIN $NGINX_CONF"
rm /tmp/setup-full-server.sh

echo ""
echo "=========================================="
echo "✅ Deploy hoàn tất!"
echo "=========================================="
echo "🌐 Website: https://${DOMAIN}"
echo ""
echo "📝 Lưu ý:"
echo "- Nếu SSL chưa được cài, chạy trên server:"
echo "  sudo certbot --nginx -d ${DOMAIN} -d www.${DOMAIN}"
echo "- Đảm bảo domain đã trỏ về IP server"
echo "- Firewall: mở port 80 và 443"
