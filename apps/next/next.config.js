const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
})

/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  transpilePackages: ['sample-package'],
}

module.exports = withMDX(nextConfig)
