const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dev.to", "images.ctfassets.net"],
  },
  async redirects() {
    return [
      {
        source: "/link",
        destination: "https://campsite.bio/ilhambara",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
