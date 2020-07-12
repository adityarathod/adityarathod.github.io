import React, { FC, useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '../../pages/_app'
import TopLink from './TopLink'
import TopLinkDivider from './TopLinkDivider'

const TopNav: FC = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	const darkMode = theme === 'dark'
	return (
		<div className='my-8 mx-auto w-full'>
			{/* dark mode toggle */}
			<button
				className={classNames(
					'absolute',
					'text-sm',
					'font-bold',
					'outline-none',
					darkMode ? 'text-systemBlue-dark' : 'text-systemBlue-light'
				)}
				style={{ top: '10px', right: '10px', outline: 'none' }}
				onClick={() => toggleTheme()}>
				{theme} mode
			</button>
			<div className='mb-8'>
				<h1
					className={classNames(
						'text-3xl',
						'text-center',
						'font-bold',
						darkMode ? 'text-label-dark' : 'text-label-light'
					)}>
					Aditya Rathod
				</h1>
				<div className='px-4 max-w-md mx-auto my-0 flex flex-row items-center justify-between'>
					<TopLink href='/' text='home' />
					<TopLinkDivider />
					<TopLink href='//github.com/adityarathod' text='github' />
					<TopLinkDivider />
					<TopLink href='/resume.pdf' text='resumé' />
					<TopLinkDivider />
					<TopLink href='/blog' text='blog' />
				</div>
			</div>
		</div>
	)
}

export default TopNav
