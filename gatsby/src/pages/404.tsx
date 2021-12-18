import React, { FC } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'
import Navbar from '../components/navbar'

const NotFoundPage: FC<PageProps> = () => {
	return (
		<Layout title='Aditya Rathod | Home'>
			<Navbar />
			<section className='mt-24 text-center'>
				<h1 className='text-9xl font-bold text-spring mb-8'>404</h1>
				<h2 className='text-3xl mb-3'>
					This little server wasn't able to find what you're looking for.
				</h2>
				<h3 className='text-lg text-gray-300'>
					maybe try looking using those links above? or if you know this is a mistake,{' '}
					<a
						href='//github.com/adityarathod/adityarathod.github.io/issues'
						className='text-cyan'>
						file an issue!
					</a>
				</h3>
			</section>
		</Layout>
	)
}

export default NotFoundPage
