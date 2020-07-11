import React, { ComponentType, FC, useState } from 'react'
import '../styles/_app.css'
import classNames from 'classnames'

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
		<ThemeContext.Provider value={ctx}>
			<Component
				{...pageProps}
				className={classNames(
					theme === 'dark' ? 'bg-systemBackground-dark' : 'bg-systemBackground-light'
				)}
			/>
		</ThemeContext.Provider>
	)
}

export default App
