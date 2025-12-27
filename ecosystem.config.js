module.exports = {
  apps: [
    {
      name: 'tcomie-nextjs',
      script: 'serve',
      args: '-s build -l 3000',
      cwd: '/home/ec2-user/tcomie-nextjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: '/var/log/tcomie-nextjs-error.log',
      out_file: '/var/log/tcomie-nextjs-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
    // Nếu muốn chạy Next.js server mode (không dùng static export)
    // Uncomment và comment phần trên
    // {
    //   name: 'tcomie-nextjs',
    //   script: 'npm',
    //   args: 'start',
    //   cwd: '/home/ec2-user/tcomie-nextjs',
    //   instances: 1,
    //   exec_mode: 'fork',
    //   env: {
    //     NODE_ENV: 'production',
    //     PORT: 3000,
    //   },
    //   error_file: '/var/log/tcomie-nextjs-error.log',
    //   out_file: '/var/log/tcomie-nextjs-out.log',
    //   log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    //   merge_logs: true,
    //   autorestart: true,
    //   watch: false,
    //   max_memory_restart: '1G',
    // },
  ],
}
