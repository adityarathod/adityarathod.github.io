import React, { FC, useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '../../pages/_app'

const TopLinkDivider: FC = () => {
	const { theme } = useContext(ThemeContext)
	const darkMode = theme === 'dark'
	return (
		<div
			className={classNames(
				'text-4xl',
				'font-thin',
				darkMode ? 'text-systemGray2-dark' : 'text-systemGray2-light',
				'select-none'
			)}>
			/
		</div>
	)
}

export default TopLinkDivider
