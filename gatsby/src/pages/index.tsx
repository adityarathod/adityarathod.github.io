import React, { FC } from 'react'
import { graphql, PageProps, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Meta from '../components/meta'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Projects from '../components/projects'

const IndexPage: FC<PageProps> = () => {
	const {
		data: {
			site: {
				siteMetadata: { siteUrl },
			},
		},
	} = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					siteUrl
				}
			}
		}
	`)
	return (
		<Layout title='Aditya Rathod | Home'>
			<Meta
				title='Aditya Rathod'
				description='Aditya is a computer science junior at The University of Texas at Dallas.'
				domain={siteUrl}
				image={`${siteUrl}/og-image.png`}
				url={siteUrl}
			/>
			<Navbar />
			<Hero />
			<section className='pt-24 max-w-3xl mx-auto'>
				<Projects />
			</section>
		</Layout>
	)
}

export default IndexPage
