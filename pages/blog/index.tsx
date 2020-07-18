import React, { useContext } from 'react'
import classNames from 'classnames'
import posts from '~/data/posts'
import Layout from '~/components/shared/Layout'
import { ThemeContext } from '../_app'
import Link from 'next/link'

const Blog = () => {
	const { theme } = useContext(ThemeContext)
	return (
		<Layout>
			<h1
				className={classNames(
					theme === 'dark' ? 'text-label-dark' : 'text-label-light',
					'text-5xl',
					'font-bold',
					'mx-auto',
					'my-0',
					'max-w-xl',
					'mb-6',
					'text-center'
				)}>
				Blog
			</h1>
			<div className='my-0 mx-auto max-w-4xl px-6 cursor-pointer'>
				{posts.map((post, idx) => (
					<Link href={`/blog/${post.slug}`} key={idx}>
						<div
							className={classNames(
								'mt-12',
								'py-6',
								'px-6',
								'rounded-lg',
								theme === 'dark' ? 'text-label-dark' : 'text-label-light',
								theme === 'dark'
									? 'bg-secondarySystemBackground-dark'
									: 'bg-secondarySystemBackground-light'
							)}>
							<h3 className={classNames('text-2xl', 'font-medium')}>{post.title}</h3>
							<h4
								className={classNames(
									'text-lg',
									// 'max-w-2xl',
									theme === 'dark'
										? 'text-secondaryLabel-dark'
										: 'text-secondaryLabel-light'
								)}>
								{post.description}
							</h4>
							<h5
								className={classNames(
									'text-md',
									// 'max-w-2xl',
									theme === 'dark'
										? 'text-tertiaryLabel-dark'
										: 'text-tertiaryLabel-light'
								)}>
								{post.date}
							</h5>
						</div>
					</Link>
				))}
			</div>
		</Layout>
	)
}

export default Blog
