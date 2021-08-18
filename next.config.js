// NOTE:
//    We currently use remark-gfm@^1.0.0 since version 2.0.0 requires being
//    loaded as an ESM module (which we can't do in next.config.js).
//    This plugin provides support for tables, to-do lists, and auto-linking.
const remarkGfm = require("remark-gfm");

const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "tsx", "mdx"],
  target: "serverless",
  webpack(config) {
    config.module.rules.push({
      test: /.svg$/,
      use: "@svgr/webpack",
    });
    return config;
  },
});
