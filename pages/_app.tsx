import React, { ComponentType, FC, useState } from 'react'
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
	const [theme, setTheme] = useState('dark')
	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
		if (document) document.body.style.background = theme === 'light' ? 'black' : 'white'
	}
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
