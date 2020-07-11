import React, { FC, useContext } from 'react'
import classNames from 'classnames'

import { ThemeContext } from '../../pages/_app'

const Footer: FC = () => {
	const { theme } = useContext(ThemeContext)
	const darkMode = theme === 'dark'
	return (
		<div
			className={classNames(
				'mt-32',
				'mb-8',
				'text-center',
				darkMode ? 'text-secondaryLabel-dark' : 'text-secondaryLabel-light'
			)}>
			<p>Designed by Aditya in California.</p>
			<p className='mt-4 text-xs'>&copy; 2020 Aditya Rathod. All rights reserved.</p>
		</div>
	)
}

export default Footer
