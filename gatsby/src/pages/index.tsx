import React, { FC } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Projects from '../components/projects'

const IndexPage: FC<PageProps> = () => {
	return (
		<Layout title='Aditya Rathod | Home'>
			<Navbar />
			<Hero />
			<section className='pt-24 max-w-3xl mx-auto'>
				<Projects />
			</section>
		</Layout>
	)
}

export default IndexPage
