import React, { useState } from 'react';
import '../styles/_app.css';
import classNames from 'classnames';

export const ThemeContext = React.createContext({
	theme: 'dark',
	toggleTheme: () => { },
})

export default function MyApp({ Component, pageProps }) {
	const [theme, setTheme] = useState('dark');
	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
		if (document) document.body.style.background = theme === 'light' ? 'black' : 'white';
	}
	const ctx = { theme, toggleTheme };
	return (
		<ThemeContext.Provider value={ctx}>
			<Component {...pageProps} className={classNames(theme === 'dark' ? 'bg-systemBackground-dark' : 'bg-systemBackground-light')} />
		</ThemeContext.Provider>

	);
}