import React, { FC } from 'react'
import { graphql, Link, PageProps, useStaticQuery } from 'gatsby'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'

import 'katex/dist/katex.min.css'

const BlogHomepage: FC<PageProps> = () => {
	const {
		postData: { allPosts },
	} = useStaticQuery(graphql`
		query PostHomepageListing {
			postData: allMdx(
				filter: { frontmatter: { draft: { ne: true } } }
				sort: { fields: frontmatter___date, order: DESC }
			) {
				allPosts: edges {
					node {
						frontmatter {
							displayDate
							description
							title
						}
						slug
					}
				}
			}
		}
	`)

	const postList = allPosts.map((post, idx) => (
		<Link to={`/blog/${post.node.slug}`} key={idx}>
			<div className='py-10 hover:opacity-70 transition-opacity'>
				<h4 className='text-sm font-semibold text-cyan uppercase' role='doc-subtitle'>
					{post.node.frontmatter.displayDate}
				</h4>
				<h2 className='text-2xl text-white font-bold'>{post.node.frontmatter.title}</h2>
				<p className='text-md mt-2 opacity-80 text-white'>
					{post.node.frontmatter.description}
				</p>
			</div>
		</Link>
	))

	return (
		<Layout title='Blog'>
			<Navbar />
			<div className='mt-12'>
				<h1 className='text-4xl font-bold mb-4'>Latest Blog Posts</h1>
				{postList}
			</div>
		</Layout>
	)
}

export default BlogHomepage
