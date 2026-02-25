// import type { NextConfig } from "next";
import buildNextConfig from "@next/mdx";

const withMDX = buildNextConfig({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  }
});

/* @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default withMDX(nextConfig);