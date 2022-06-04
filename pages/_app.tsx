import React, { FC } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { MDXProvider } from '@mdx-js/react'
import { DefaultSeo } from 'next-seo'

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
			<DefaultSeo
				openGraph={{
					type: 'website',
					locale: 'en_US',
					url: 'https://adityarathod.github.io/',
					site_name: 'Aditya Rathod',
					profile: {
						firstName: 'Aditya',
						lastName: 'Rathod',
					},
				}}
				twitter={{
					handle: '@adibytes',
					site: '@adibytes',
					cardType: 'summary',
				}}
			/>
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
