/** @type {import('next').NextConfig} */
module.exports = {
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  swcMinify: true,
  reactStrictMode: true,
}