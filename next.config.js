/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config, { isServer, webpack }) => {
  //   if (!isServer) {
  //     // Ensures no server modules are included on the client.
  //     config.plugins.push(new webpack.IgnorePlugin(/lib\/server/));
  //   }

  //   return config;
  // },
  async rewrites() {
    return [
      {
        source: '/:handle(@[a-zA-Z0-9]+)/:id*',
        destination: "/users/:handle/:id*",
      }
    ]
  }
}

module.exports = nextConfig
