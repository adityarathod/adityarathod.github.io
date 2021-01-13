import React, { FC } from 'react'
import Head from 'next/head'
import Error from 'next/error'

interface PostWrapperProps {
	frontMatter: {
		title: string
		description: string
		date: string
		draft: boolean
		hasMath: boolean
	}
	children?: React.ReactNode
}

const PostWrapper: FC<PostWrapperProps> = ({
	frontMatter: { title, description, hasMath, date, draft },
	children,
}: PostWrapperProps) => {
	if (draft) return <Error statusCode={404} />
	return (
		<>
			<Head>
				<meta property='og:title' content={title} />
				<meta property='og:description' content={description} />
				<meta property='og:type' content='article' />
				<meta name='description' content={description} />
				<title>{title}</title>
				{hasMath && (
					<link
						rel='stylesheet'
						href='https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css'
						crossOrigin='anonymous'
					/>
				)}
			</Head>
			<main className='mt-12'>
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
