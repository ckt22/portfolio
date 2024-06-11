const nextConfig = {
  reactStrictMode: true,

  // Add basePath
  basePath: "/portfolio",

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
