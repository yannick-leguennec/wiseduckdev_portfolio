const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "wiseduckdev.vercel.app",
          },
        ],
        destination: "https://wiseduckdev.com/:path*",
        permanent: true, // Indicates a 301 redirect
      },
    ];
  },
};
