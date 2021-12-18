/* eslint-disable no-undef */
module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'Aditya Rathod',
	},
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-mdx',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
		'gatsby-transformer-json',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `./src/data/`,
			},
		}
	],
}
