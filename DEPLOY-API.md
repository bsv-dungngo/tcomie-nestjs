# Hướng dẫn Deploy API Server

## Tổng quan

Project này hỗ trợ deploy cả Frontend (Next.js static) và Backend API. Bạn có thể deploy riêng lẻ hoặc cùng lúc.

## Cấu trúc

```
Server
├── /var/www/html/tcomie/          # Frontend (Next.js static)
└── /home/ec2-user/tcomie-api/     # Backend API (tùy chọn)
```

## Deploy Frontend

```bash
# Từ local
yarn deploy

# Hoặc từ server
cd ~/tcomie-nextjs
git pull
yarn install
yarn build
sudo cp -r build/* /var/www/html/tcomie/
```

## Deploy API

### Node.js API

1. **Setup API server:**
```bash
bash deploy-api.sh nodejs /home/ec2-user/tcomie-api
```

2. **Deploy API code:**
```bash
# Trên server
cd ~/tcomie-api
git pull
npm install
pm2 restart tcomie-api
```

3. **Cấu hình Nginx:**
- Mở file `/etc/nginx/conf.d/tcomie.conf`
- Uncomment phần API location:
```nginx
location /api/ {
    proxy_pass http://localhost:3001;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

4. **Reload Nginx:**
```bash
sudo nginx -t
sudo systemctl reload nginx
```

### PHP API

1. **Setup PHP API:**
```bash
bash deploy-api.sh php /var/www/api
```

2. **Cấu hình Nginx:**
```nginx
location ~ \.php$ {
    fastcgi_pass unix:/var/run/php-fpm/www.sock;
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include fastcgi_params;
}
```

### Python API (Django/Flask)

1. **Setup Python API:**
```bash
# Trên server
sudo yum install -y python3 python3-pip
pip3 install gunicorn
```

2. **Cấu hình Nginx:**
```nginx
location /api/ {
    proxy_pass http://127.0.0.1:8000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

## Deploy cả Frontend và API

### Từ Git trên server

```bash
# Deploy cả hai
DEPLOY_TYPE=both API_REPO=git@github.com:your-org/tcomie-api.git bash deploy-from-git.sh

# Chỉ frontend
DEPLOY_TYPE=frontend bash deploy-from-git.sh

# Chỉ API
DEPLOY_TYPE=api API_REPO=git@github.com:your-org/tcomie-api.git bash deploy-from-git.sh
```

## Environment Variables

### Frontend
Tạo file `.env.local` trên server:
```bash
API_URL=https://api.yourdomain.com
IMAGE_DOMAIN=images.yourdomain.com
```

### API
Tạo file `.env` trong thư mục API:
```bash
NODE_ENV=production
PORT=3001
DATABASE_URL=...
```

## PM2 Commands (cho Node.js API)

```bash
# Start API
pm2 start npm --name tcomie-api -- start

# Stop API
pm2 stop tcomie-api

# Restart API
pm2 restart tcomie-api

# View logs
pm2 logs tcomie-api

# Auto start on reboot
pm2 startup
pm2 save
```

## Kiểm tra

1. **Frontend:**
```bash
curl http://yourdomain.com
```

2. **API:**
```bash
curl http://yourdomain.com/api/health
```

## Troubleshooting

### API không hoạt động
- Kiểm tra API server đang chạy: `pm2 list` hoặc `sudo systemctl status php-fpm`
- Kiểm tra port: `sudo netstat -tlnp | grep 3001`
- Kiểm tra Nginx logs: `sudo tail -f /var/log/nginx/tcomie_error.log`

### CORS Issues
Thêm vào Nginx config:
```nginx
add_header Access-Control-Allow-Origin *;
add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS";
add_header Access-Control-Allow-Headers "Authorization, Content-Type";
```

### API Timeout
Tăng timeout trong Nginx:
```nginx
proxy_read_timeout 300s;
proxy_connect_timeout 75s;
```

