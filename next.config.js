// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const path = require("path");
module.exports = {
  images: {
    domains: [
      "dummyimage.com",
      "images.pexels.com",
      "images.ctfassets.net",
      "picsum.photos",
    ],
  },
  future: { webpack5: true },
  reactStrictMode: true, //equivalent to 'use strict'
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
