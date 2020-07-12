/* eslint-disable @typescript-eslint/no-var-requires */
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
})
module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
})
