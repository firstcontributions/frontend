// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
import { withSentryConfig } from '@sentry/nextjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config, { isServer, webpack }) => {
  //   if (!isServer) {
  //     // Ensures no server modules are included on the client.
  //     config.plugins.push(new webpack.IgnorePlugin(/lib\/server/));
  //   }

  //   return config;
  // },  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    relay: {
      src: './',
      language: 'typescript',
      artifactDirectory: '__generated__',
    },
  },
  experimental: { appDir: true },
  async rewrites() {
    return [
      {
        source: '/@:handle([a-zA-Z0-9-_]+)/:id*',
        destination: '/users/:handle/:id*',
      },
      {
        source: '/story/:id([a-zA-Z0-9=+-/]+)___:suffix*',
        destination: '/story/:id',
      },
    ]
  },
}

module.exports = nextConfig

module.exports = withSentryConfig(
  module.exports,
  { silent: true },
  { hideSourcemaps: true }
)
