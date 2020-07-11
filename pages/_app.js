import React from 'react';
import '../styles/index.css';

export const ThemeContext = React.createContext({
	theme: 'light',
	toggleTheme: () => { },
})

export default function MyApp({ Component, pageProps }) {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => setTheme(darkMode === 'light' ? 'dark' : 'light');
	const ctx = { theme, toggleTheme };
	return (
		<ThemeContext.Provider value={ctx}>
			<Component {...pageProps} />
		</ThemeContext.Provider>
	);
}