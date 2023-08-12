/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
        {
          test: /\.md$/,
          type: 'asset/source',
        }
    )
    return config
  },
  async redirects() {
    return [
      {
        source: '/team',
        destination: '/members',
        permanent: true
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true
      }
    ];
  }
}

module.exports = nextConfig
