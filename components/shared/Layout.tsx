import React, { FC } from 'react'
import TopNav from './TopNav'
import Footer from './Footer'

interface LayoutProps {
	children: React.ReactNode
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => (
	<>
		<TopNav />
		{props.children}
		<Footer />
	</>
)

export default Layout
