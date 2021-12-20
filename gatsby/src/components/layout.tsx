import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

interface LayoutProps {
	title?: string
	hideFooter?: boolean
}

const Layout: FC<LayoutProps> = props => {
	return (
		<main className='py-10 px-8 sm:px-8 md:px-10 lg:px-10 xl:px-10 max-w-5xl mx-auto'>
			<Helmet>
				<title>Aditya Rathod{props.title ? ` | ${props.title}` : ''}</title>
			</Helmet>
			{props.children}
			{!props.hideFooter && (
				<footer className='mt-20 text-center text-gray-300 text-sm'>
					&copy; {new Date().getFullYear()} Aditya Rathod. All rights reserved.
				</footer>
			)}
		</main>
	)
}

export default Layout
