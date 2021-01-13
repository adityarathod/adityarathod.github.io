import React, { FC } from 'react'
import Link from 'next/link'
import posts from '~/data/posts'

interface BlogProps {
	posts: typeof posts
}

const Blog: FC<BlogProps> = ({ posts }: BlogProps) => {
	const postList = posts.map((post, idx) => (
		<Link href={`/blog/${post.slug}`} key={idx}>
			<a className=''>
				<div className='py-10 hover:opacity-70 transition-opacity'>
					<h4 className='text-sm font-semibold text-cyan uppercase' role='doc-subtitle'>
						{post.date}
					</h4>
					<h2 className='text-2xl text-white font-bold'>{post.title}</h2>
					<p className='text-md mt-2 opacity-80 text-white'>{post.description}</p>
				</div>
			</a>
		</Link>
	))
	return (
		<>
			<div className='mt-12'>
				<h1 className='text-4xl font-bold mb-4'>Latest Blog Posts</h1>
				{postList}
			</div>
		</>
	)
}

export function getStaticProps(): { props: { posts: typeof posts } } {
	return {
		props: {
			posts,
		},
	}
}

export default Blog
