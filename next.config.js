/* eslint-disable @typescript-eslint/no-var-requires */
const rehypePrism = require('@mapbox/rehype-prism')
const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')

const withMDX = require('@next/mdx')({
	options: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypePrism, rehypeKatex],
	},
})
module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	trailingSlash: true,
	future: {
		webpack5: true,
	},
})
