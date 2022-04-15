module.exports = {
  images: {
    domains: ["dev.to"],
  },
  async redirects() {
    return [
      {
        source: "/link",
        destination: "https://campsite.bio/ilhambara",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "https://project.barathrum.studio",
        permanent: false,
      },
    ];
  },
};
