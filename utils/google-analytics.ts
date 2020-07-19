import ReactGA from 'react-ga'

export const initialize = (): void => {
	console.log('[GA] init')
	ReactGA.initialize('UA-75364115-1', {
		debug: process.env.NODE_ENV !== 'production',
	})
}

export const logPageView = (): void => {
	console.log(`[GA] log pageview - ${window.location.pathname}`)
	ReactGA.set({ page: window.location.pathname })
	ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = ''): void => {
	if (category && action) {
		console.log(`[GA] log event - ${category}:${action}`)
		ReactGA.event({ category, action })
	}
}

export const logException = (description = '', fatal = false): void => {
	if (description) {
		console.log(`[GA] log exception - ${description}, fatal: ${fatal}`)
		ReactGA.exception({ description, fatal })
	}
}
