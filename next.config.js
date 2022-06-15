module.exports = {
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
