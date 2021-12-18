import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

interface LayoutProps {
	title?: string
}

const Layout: FC<LayoutProps> = props => {
	return (
		<main className='py-10 px-8 sm:px-8 md:px-10 lg:px-10 xl:px-10 max-w-5xl mx-auto'>
			<Helmet>
				<title>{props.title || 'Aditya Rathod'}</title>
			</Helmet>
			{props.children}
		</main>
	)
}

export default Layout
