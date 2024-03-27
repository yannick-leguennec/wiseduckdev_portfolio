const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  // ! TO ACTIVATE WHEN SWITCHING DOMAIN
  // async redirects() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'https://wiseduckdev.com/:path*',
  //       permanent: true, // Indicates a 301 redirect
  //     },
  //   ];
  // },
};
