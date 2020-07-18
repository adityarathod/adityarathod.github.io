import React, { FC, useContext } from 'react'
import Head from 'next/head'
import Error from 'next/error'
import classNames from 'classnames'
import { ThemeContext } from '../../pages/_app'
import Layout from '../shared/Layout'
import * as markdown from './markdown'

const BigHeader = (props: { title: string }) => {
	const { theme } = useContext(ThemeContext)
	const darkMode = theme === 'dark'
	return (
		<h1
			className={classNames(
				darkMode ? 'text-label-dark' : 'text-label-light',
				'text-4xl',
				'font-bold',
				'mx-auto',
				'my-0',
				'max-w-xl',
				'mb-6',
				'text-center'
			)}>
			{props.title}
		</h1>
	)
}

interface IMdxPage {
	frontMatter: {
		title: string
		description: string
		date: string
		draft: boolean
		hasMath: boolean
	}
	children?: React.ReactNode
}

const PageWrapper: FC<IMdxPage> = (props: IMdxPage) => {
	const { theme } = useContext(ThemeContext)
	const darkMode = theme === 'dark'
	if (props.frontMatter.draft) {
		return <Error statusCode={404} />
	}
	return (
		<Layout>
			<Head>
				<meta property='og:title' content={props.frontMatter.title} />
				<meta property='og:description' content={props.frontMatter.description} />
				<meta property='og:type' content='article' />
				<meta name='description' content={props.frontMatter.description} />
				<title>{props.frontMatter.title}</title>
				{props.frontMatter.hasMath && (
					<link
						rel='stylesheet'
						href='https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css'
						crossOrigin='anonymous'
					/>
				)}
			</Head>
			<main
				className={classNames('mx-auto', 'my-0', 'mt-4', 'max-w-5xl', 'px-8', 'py-6')}
				style={{ borderRadius: '15px' }}>
				<BigHeader title={props.frontMatter.title} />
				<div
					className={classNames(
						'mb-6',
						'text-center',
						darkMode ? 'text-secondaryLabel-dark' : 'text-secondaryLabel-light'
					)}>
					{props.frontMatter.date}
				</div>
				{props.children}
			</main>
		</Layout>
	)
}

const components = {
	// eslint-disable-next-line react/display-name
	wrapper: PageWrapper,
	...markdown,
}

export default components
