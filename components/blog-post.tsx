import React, { FC } from 'react'
import Head from 'next/head'
import Error from 'next/error'
import { NextSeo } from 'next-seo'

interface PostWrapperProps {
	frontMatter: {
		title: string
		description: string
		date: string
		draft: boolean
		hasMath: boolean
		pubTime: string
	}
	children?: React.ReactNode
}

const PostWrapper: FC<PostWrapperProps> = ({
	frontMatter: { title, description, hasMath, date, draft, pubTime },
	children,
}: PostWrapperProps) => {
	if (draft) return <Error statusCode={404} />
	return (
		<>
			<Head>
				{hasMath && (
					<link
						rel='stylesheet'
						href='https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css'
						crossOrigin='anonymous'
					/>
				)}
			</Head>
			<NextSeo
				title={`Aditya Rathod: ${title}`}
				description={description}
				openGraph={{
					title,
					description,
					type: 'article',
					article: {
						publishedTime: pubTime,
						authors: ['https://adityarathod.github.io/'],
					},
				}}
			/>
			<main className='mt-24'>
				<div className='mb-8 mx-auto max-w-xl'>
					<h1 className='mb-2 text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-center'>
						{title}
					</h1>
					<h2 className='text-cyan font-semibold text-center'>{date}</h2>
				</div>
				<article className='prose prose-md text-white mx-auto'>{children}</article>
			</main>
		</>
	)
}

const components = {
	// eslint-disable-next-line react/display-name
	wrapper: PostWrapper,
}

export default components
