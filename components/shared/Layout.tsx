import React, { FC, useEffect } from 'react'
import TopNav from './TopNav'
import Footer from './Footer'
import { initialize, logPageView } from '~/utils/google-analytics'

interface LayoutProps {
	children: React.ReactNode
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
	useEffect(() => {
		initialize()
		logPageView()
	}, [])
	return (
		<>
			<TopNav />
			{props.children}
			<Footer />
		</>
	)
}
export default Layout
