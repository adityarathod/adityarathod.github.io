/* eslint-disable @typescript-eslint/no-var-requires */
const rehypePrism = require('@mapbox/rehype-prism')
const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypePrism, rehypeKatex],
	},
})
module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	exportTrailingSlash: true,
})
