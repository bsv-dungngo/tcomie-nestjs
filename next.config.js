/**
 * @type {import('next').NextConfig}
 */
const path = require('path')
const intercept = require('intercept-stdout')

// safely ignore recoil warning messages in dev (triggered by HMR)
function interceptStdout(text) {
  if (text.includes('Duplicate atom key')) {
    return ''
  }
  return text
}

if (process.env.NODE_ENV === 'development') {
  intercept(interceptStdout)
}

const nextConfig = {
  // output: 'export', // Bỏ static export, chạy SSR bình thường
  // distDir: 'build',
  eslint: {
    dirs: ['pages', 'utils', 'layout', 'hooks', 'app-redux', 'types'],
  },
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: [process.env.API_URL, process.env.IMAGE_DOMAIN],
    unoptimized: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  env: {
    CURRENT_ENV: process.env.CURRENT_ENV,
    API_URL: process.env.API_URL,
    PUSHER_APP_KEY: process.env.PUSHER_APP_KEY,
    PUSHER_APP_CLUSTER: process.env.PUSHER_APP_CLUSTER,
    PUSHER_APP_AUTH_URL: process.env.PUSHER_APP_AUTH_URL,
  },
  compiler: {
    removeConsole: {
      exclude: ['log'],
    },
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "abstracts/mixins.scss";`,
  },

  trailingSlash: true,

  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   // ignoreBuildErrors: true,

  //   i18n: {
  //     locales: ['vi', 'en'],
  //     defaultLocale: 'vi',
  //   },
  // },
  // Note: redirects() doesn't work with static export
  // Handle redirects on your server instead
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/vi/trang-chu',
  //       permanent: true,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
