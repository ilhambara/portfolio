module.exports = {
  async redirects() {
    return [
      {
        source: "/links",
        destination: "https://campsite.bio/ilhambara",
        permanent: true,
      },
    ];
  },
};
