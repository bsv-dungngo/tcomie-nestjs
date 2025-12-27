# Hướng dẫn Deploy Next.js Static Site lên Amazon Linux 2023

## Yêu cầu
- Server Amazon Linux 2023
- Quyền sudo trên server
- SSH access đến server
- Domain name (nếu có)

## Cách 1: Setup tự động trên Server

### Bước 1: Upload script lên server
```bash
scp deploy-server.sh ec2-user@your-server-ip:~/
```

### Bước 2: Chạy script setup trên server
```bash
ssh ec2-user@your-server-ip
chmod +x deploy-server.sh
DOMAIN=yourdomain.com bash deploy-server.sh
```

Script sẽ tự động:
- Cài đặt Nginx
- Tạo thư mục web
- Cấu hình Nginx
- Setup permissions

### Bước 3: Deploy files từ local
```bash
# Build project
yarn build

# Deploy lên server
bash deploy-local.sh ec2-user your-server-ip
```

## Cách 2: Setup thủ công

### Bước 1: Cài đặt Nginx trên server
```bash
sudo yum update -y
sudo yum install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx
```

### Bước 2: Tạo thư mục web
```bash
sudo mkdir -p /var/www/html/tcomie
sudo chown -R ec2-user:ec2-user /var/www/html/tcomie
```

### Bước 3: Copy cấu hình Nginx
```bash
sudo cp nginx.conf.example /etc/nginx/conf.d/tcomie.conf
sudo nano /etc/nginx/conf.d/tcomie.conf  # Sửa domain và paths
```

### Bước 4: Test và reload Nginx
```bash
sudo nginx -t
sudo systemctl reload nginx
```

### Bước 5: Deploy files
```bash
# Từ local machine
yarn build
rsync -avz --delete build/ ec2-user@your-server-ip:/var/www/html/tcomie/

# Set permissions trên server
ssh ec2-user@your-server-ip
sudo chown -R nginx:nginx /var/www/html/tcomie
sudo chmod -R 755 /var/www/html/tcomie
```

## Cài đặt SSL (HTTPS)

### Sử dụng Certbot
```bash
sudo yum install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Certbot sẽ tự động:
- Cài đặt SSL certificate
- Cấu hình Nginx cho HTTPS
- Setup auto-renewal

## Cấu trúc thư mục trên server
```
/var/www/html/tcomie/
├── index.html
├── 404.html
├── _next/
├── vi/
├── en/
├── images/
└── ...
```

## Kiểm tra

1. **Kiểm tra Nginx status:**
   ```bash
   sudo systemctl status nginx
   ```

2. **Kiểm tra website:**
   ```bash
   curl http://your-server-ip
   ```

3. **Xem logs:**
   ```bash
   sudo tail -f /var/log/nginx/tcomie_access.log
   sudo tail -f /var/log/nginx/tcomie_error.log
   ```

## Troubleshooting

### Lỗi 403 Forbidden
```bash
sudo chown -R nginx:nginx /var/www/html/tcomie
sudo chmod -R 755 /var/www/html/tcomie
```

### Lỗi 502 Bad Gateway
- Kiểm tra Nginx đang chạy: `sudo systemctl status nginx`
- Kiểm tra cấu hình: `sudo nginx -t`
- Xem error log: `sudo tail -f /var/log/nginx/error.log`

### Files không update
- Xóa cache browser
- Kiểm tra permissions: `ls -la /var/www/html/tcomie`
- Reload Nginx: `sudo systemctl reload nginx`

## Scripts có sẵn

- `deploy-server.sh` - Setup Nginx trên server
- `deploy-local.sh` - Deploy files từ local lên server
- `nginx.conf.example` - File cấu hình Nginx mẫu

## Lưu ý

1. **Firewall:** Đảm bảo port 80 và 443 đã mở trong Security Group
2. **Domain:** Cấu hình DNS A record trỏ về IP server
3. **Backup:** Nên backup thư mục `/var/www/html/tcomie` trước khi deploy mới
4. **Build:** Luôn chạy `yarn build` trước khi deploy

## Auto-deploy với Git

Có thể setup GitHub Actions hoặc GitLab CI để tự động deploy khi push code:

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: yarn install
      - run: yarn build
      - name: Deploy to server
        uses: SamKirkland/FTP-Deploy-Action@4.0.0
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./build/
```

