import type { NextConfig } from "next";

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
});

const nextConfig: NextConfig = {

};

export default nextConfig;
