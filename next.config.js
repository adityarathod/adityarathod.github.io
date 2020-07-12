/* eslint-disable @typescript-eslint/no-var-requires */
const rehypePrism = require('@mapbox/rehype-prism')
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		hastPlugins: [rehypePrism],
	},
})
module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
})
