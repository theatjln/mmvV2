// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const path = require("path");
module.exports = {
  trailingSlash: true, //whenever a user goes to any particular url, its gonna automatically add a trailing slash if it doesn exist, good for SEO
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
