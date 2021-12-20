/* eslint-disable no-undef */
module.exports = {
	siteMetadata: {
		siteUrl: 'https://adityarathod.github.io',
		title: 'Aditya Rathod',
	},
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-react-helmet',
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
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `blog`,
				path: `./src/posts/`,
			},
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-prismjs`,
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 800,
							quality: 85,
							withWebp: { quality: 100 },
						},
					},
				],
			},
		},
		{
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-75364115-1",
      },
    },
	],
}
