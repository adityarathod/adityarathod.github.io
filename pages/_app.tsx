import React, { ComponentType, FC, useState, useEffect } from 'react'
import '../styles/_app.css'
import '../styles/prism-atom-dark.css'
import classNames from 'classnames'
import { MDXProvider } from '@mdx-js/react'
import components from '../components/blog'
import Head from 'next/head'

interface IThemeContext {
	theme: string
	toggleTheme: () => void
}

export const ThemeContext = React.createContext<IThemeContext>({
	theme: 'dark',
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	toggleTheme: () => {},
})

interface AppProps {
	Component: ComponentType
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	pageProps: any
}

const App: FC<AppProps> = (props: AppProps) => {
	const { Component, pageProps } = props

	const getPersistedState = () => {
		let mode
		if (
			typeof window !== 'undefined' &&
			typeof window.localStorage !== 'undefined' &&
			typeof window.matchMedia !== 'undefined'
		) {
			// is a modern browser
			const retrievedMode = localStorage.getItem('darkModeState')
			if (!retrievedMode) {
				mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
			} else {
				mode = retrievedMode
			}
		} else {
			// is not modern or is not a browser (SRR)
			mode = 'light'
		}
		return mode
	}

	// light mode users will get a "flash of darkness" before their preferred theme is loaded,
	// which is unfortunate but ¯\_(ツ)_/¯, you can't please everyone.
	const [theme, setTheme] = useState('dark')

	useEffect(() => {
		setTheme(getPersistedState())
	}, [])

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('darkModeState', theme)
		}
		if (document) document.body.style.background = theme === 'dark' ? 'black' : 'white'
	}, [theme])
	const ctx = { theme, toggleTheme }
	return (
		<>
			<Head>
				<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
			</Head>
			<ThemeContext.Provider value={ctx}>
				<MDXProvider components={components}>
					<Component
						{...pageProps}
						className={classNames(
							theme === 'dark'
								? 'bg-systemBackground-dark'
								: 'bg-systemBackground-light'
						)}
					/>
				</MDXProvider>
			</ThemeContext.Provider>
		</>
	)
}

export default App
