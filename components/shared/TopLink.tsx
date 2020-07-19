import React, { FC, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { ThemeContext } from '../../pages/_app'

interface TopLinkProps {
	href: string
	text: string
}

const TopLink: FC<TopLinkProps> = (props: TopLinkProps) => {
	const { theme } = useContext(ThemeContext)
	const router = useRouter()
	const darkMode = theme === 'dark'
	const isCurPath = router.pathname === props.href
	return (
		<Link href={isCurPath ? '#' : props.href}>
			<a
				href={props.href}
				className={classNames(
					!isCurPath ? 'cursor-pointer' : 'cursor-default',
					'px-4',
					!isCurPath
						? darkMode
							? 'hover:text-link-dark'
							: 'hover:text-link-light'
						: null,
					isCurPath
						? darkMode
							? 'text-secondaryLabel-dark'
							: 'text-secondaryLabel-light'
						: darkMode
						? 'text-label-dark'
						: 'text-label-light'
				)}>
				{props.text}
			</a>
		</Link>
	)
}

export const TopLinkStatic: FC<TopLinkProps> = (props: TopLinkProps) => {
	const { theme } = useContext(ThemeContext)
	const router = useRouter()
	const darkMode = theme === 'dark'
	const isCurPath = router.pathname === props.href
	return (
		<a
			href={props.href}
			className={classNames(
				!isCurPath ? 'cursor-pointer' : 'cursor-default',
				'px-4',
				!isCurPath ? (darkMode ? 'hover:text-link-dark' : 'hover:text-link-light') : null,
				isCurPath
					? darkMode
						? 'text-secondaryLabel-dark'
						: 'text-secondaryLabel-light'
					: darkMode
					? 'text-label-dark'
					: 'text-label-light'
			)}>
			{props.text}
		</a>
	)
}

export default TopLink
