import React, { FC } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { MDXProvider } from '@mdx-js/react'

import '../styles/_app.css'
import '../styles/prism-dracula.css'

import postComponents from '../components/blog-post'
import Navbar from '~/components/navbar'
import Footer from '~/components/footer'

const App: FC<AppProps> = (props: AppProps) => {
	const { Component, pageProps } = props

	const pageWrapper = (
		<div className='py-10 px-8 sm:px-8 md:px-10 lg:px-10 xl:px-10 max-w-5xl mx-auto'>
			<Head>
				<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
			</Head>
			<Navbar />
			<MDXProvider components={postComponents}>
				<Component {...pageProps} />
			</MDXProvider>
			<Footer />
		</div>
	)

	return pageWrapper
}

export default App
