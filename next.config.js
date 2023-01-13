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
