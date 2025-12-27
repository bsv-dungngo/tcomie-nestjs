#!/bin/bash

# Script deploy Next.js với PM2
# Sử dụng: bash deploy-pm2.sh
# Hoặc: bash deploy-pm2.sh duta

set -e  # Exit on error

SSH_HOST="${1:-duta}"  # SSH host từ ~/.ssh/config
PROJECT_DIR="/home/ec2-user/tcomie-nextjs"
GIT_REPO="git@github.com:bsv-dungngo/tcomie-nextjs.git"
PORT="${PORT:-3000}"

echo "🚀 Bắt đầu deploy Next.js với PM2..."

# Tạo script deploy trên server
cat > /tmp/deploy-pm2-server.sh <<'DEPLOY_SCRIPT'
#!/bin/bash
set -e

PROJECT_DIR="$1"
GIT_REPO="$2"
PORT="$3"

echo "📦 Installing Node.js và PM2..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
    sudo yum install -y nodejs
fi

if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    sudo npm install -g pm2
    pm2 startup systemd -u ec2-user --hp /home/ec2-user
fi

# Clone hoặc pull code
if [ -d "$PROJECT_DIR" ]; then
    echo "📥 Pulling latest code..."
    cd "$PROJECT_DIR"
    git pull
else
    echo "📥 Cloning repository..."
    git clone "$GIT_REPO" "$PROJECT_DIR"
    cd "$PROJECT_DIR"
fi

# Install dependencies
echo "📦 Installing dependencies..."
yarn install

# Build project
echo "🔨 Building project..."
yarn build

# Stop existing PM2 process
echo "🛑 Stopping existing PM2 process..."
pm2 stop tcomie-nextjs 2>/dev/null || true
pm2 delete tcomie-nextjs 2>/dev/null || true

# Start với PM2
echo "🚀 Starting Next.js với PM2..."

# Copy ecosystem.config.js nếu có
if [ -f "ecosystem.config.js" ]; then
    echo "📋 Using ecosystem.config.js..."
    pm2 start ecosystem.config.js
else
    # Serve static files với serve package
    if command -v serve &> /dev/null || npm list -g serve &> /dev/null; then
        pm2 start serve --name tcomie-nextjs -- -s build -l $PORT
    else
        echo "📦 Installing serve package..."
        npm install -g serve
        pm2 start serve --name tcomie-nextjs -- -s build -l $PORT
    fi
fi

# Save PM2 process list
pm2 save

echo ""
echo "✅ Deploy hoàn tất!"
echo "📊 PM2 Status:"
pm2 list
echo ""
echo "📝 Useful commands:"
echo "   pm2 logs tcomie-nextjs    # Xem logs"
echo "   pm2 restart tcomie-nextjs # Restart"
echo "   pm2 stop tcomie-nextjs    # Stop"
DEPLOY_SCRIPT

# Upload và chạy script trên server
scp /tmp/deploy-pm2-server.sh $SSH_HOST:/tmp/
ssh $SSH_HOST "chmod +x /tmp/deploy-pm2-server.sh && bash /tmp/deploy-pm2-server.sh $PROJECT_DIR $GIT_REPO $PORT"
rm /tmp/deploy-pm2-server.sh

echo ""
echo "✅ Deploy hoàn tất!"
echo "🌐 Website: http://18.141.146.247:$PORT"
echo ""
echo "📝 Để xem logs:"
echo "   ssh $SSH_HOST 'pm2 logs tcomie-nextjs'"

