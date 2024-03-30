// NOTE:
//    We currently use remark-gfm@^1.0.0 since version 2.0.0 requires being
//    loaded as an ESM module (which we can't do in next.config.js).
//    This plugin provides support for tables, to-do lists, and auto-linking.
// const remarkGfm = require("remark-gfm");
// import remarkGfm from 'remark-gfm';
// const withImages = require('next-images');
// const { publicDecrypt } = require("crypto");

import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // target: 'serverless',
  webpack: (config) => {
    config.module.rules.push({
      test: /.svg$/,
      use: "@svgr/webpack",
    });
    return config;
  },
  redirects: async () => ([
    {
      source: '/2023/:path',
      destination: '/archive/2023/:path',
      permanent: false
    }
  ])
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);

// const withMDX = require("@next/mdx")({
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [],
//   },
// });

// module.exports = withImages();

// module.exports = withMDX({
//   pageExtensions: ["js", "jsx", "tsx", "mdx"],
//   target: "serverless",
//   webpack(config) {
//     config.module.rules.push({
//       test: /.svg$/,
//       use: "@svgr/webpack",
//     });
//     return config;
//   },
// });

