/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./src/utils/i18n.ts",
);

const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  env: {
    API_URL: process.env.API_URL,
    AUTH_API_URL: process.env.AUTH_API_URL,
    COMPANY_API_URL: process.env.COMPANY_API_URL,
    UPLOAD_API_URL: process.env.UPLOAD_API_URL,
    TIME_SHEET_API_URL: process.env.TIME_SHEET_API_URL,
    CHAT_API_URL: process.env.CHAT_API_URL,
    NEXT_APP_WS_URL: process.env.NEXT_APP_WS_URL,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "103.196.145.232",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /**
   * if you need proxy, then try this
   */
  // async rewrites() {
  //   return process.env.NODE_ENV === 'development'
  //     ? [
  //         {
  //           source: '/api/:path*',
  //           destination: `${process.env.CHAT_API_URL}/:path*`,
  //         },
  //       ]
  //     : [];
  // },
};

module.exports = withNextIntl(nextConfig);
