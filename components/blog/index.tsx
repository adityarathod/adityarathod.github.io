import React, { FC, useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '../../pages/_app'
import TopNav from '../shared/TopNav'
import * as markdown from './markdown'

const BigHeader = (props: { title: string }) => {
	const { theme } = useContext(ThemeContext)
	const darkMode = theme === 'dark'
	return (
		<h1
			className={classNames(
				darkMode ? 'text-label-dark' : 'text-label-light',
				'text-4xl',
				'font-bold',
				'mb-6',
				'text-center'
			)}>
			{props.title}
		</h1>
	)
}

interface IMdxPage {
	frontMatter: {
		title: string
	}
	children?: React.ReactNode
}

const PageWrapper: FC<IMdxPage> = (props: IMdxPage) => {
	const { theme } = useContext(ThemeContext)
	const darkMode = theme === 'dark'
	console.log(props)
	return (
		<>
			<TopNav />
			<main
				className={classNames(
					'mx-auto',
					'my-0',
					'mt-4',
					'max-w-5xl',
					'px-8',
					'py-6',
					darkMode
						? 'bg-secondarySystemBackground-dark'
						: 'bg-secondarySystemBackground-light'
				)}
				style={{ borderRadius: '15px' }}>
				<BigHeader title={props.frontMatter.title} />
				{props.children}
			</main>
		</>
	)
}

const components = {
	// eslint-disable-next-line react/display-name
	wrapper: PageWrapper,
	...markdown,
}

export default components
