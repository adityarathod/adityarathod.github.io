import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

interface ArticleMetaProps {
	title: string
	description: string
	url: string
	domain: string
	image: string
}

export const ArticleMeta: FC<ArticleMetaProps> = ({ title, description, domain, url, image }) => {
	return (
		<Helmet>
			<title>Aditya Rathod{title ? ` | ${title}` : ''}</title>
			<meta name='description' content={description} />
			{/* OpenGraph properties */}
			<meta property='og:url' content={url} />
			<meta property='og:type' content='article' />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={image} />
			{/* Twitter properties */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta property='twitter:domain' content={domain} />
			<meta property='twitter:url' content={url} />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={image} />
		</Helmet>
	)
}

const Meta: FC<ArticleMetaProps> = ({ title, description, domain, url, image }) => {
	return (
		<Helmet>
			<meta name='description' content={description} />
			{/* OpenGraph properties */}
			<meta property='og:url' content={url} />
			<meta property='og:type' content='website' />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={image} />
			{/* Twitter properties */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta property='twitter:domain' content={domain} />
			<meta property='twitter:url' content={url} />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={image} />
		</Helmet>
	)
}

export default Meta
