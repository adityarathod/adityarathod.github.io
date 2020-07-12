/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '../../pages/_app'
import Link from 'next/link'

interface IDarkLightModePair {
	light: string
	dark: string
}

const MarkdownFCFactory = (
	darkLightModePairs: IDarkLightModePair[],
	extraClasses: string[],
	elementName: string
) => {
	const ThemedFC = (props: any) => {
		const { theme } = useContext(ThemeContext)
		const darkMode = theme === 'dark'
		return React.createElement(
			elementName,
			{
				...props,
				className: classNames(
					...extraClasses,
					...darkLightModePairs.map(pair => (darkMode ? pair.dark : pair.light))
				),
			},
			props.children || null
		)
	}
	ThemedFC.displayName = `MarkdownFC(${elementName})`
	return ThemedFC
}

export const p = MarkdownFCFactory(
	[{ dark: 'text-label-dark', light: 'text-label-light' }],
	['mb-4', 'text-justify'],
	'p'
)
export const h1 = MarkdownFCFactory(
	[{ dark: 'text-label-dark', light: 'text-label-light' }],
	['text-2xl', 'font-bold', 'mt-4'],
	'h1'
)
export const h2 = MarkdownFCFactory(
	[{ dark: 'text-label-dark', light: 'text-label-light' }],
	['text-xl', 'font-medium'],
	'h2'
)
export const h3 = MarkdownFCFactory(
	[{ dark: 'text-label-dark', light: 'text-label-light' }],
	['text-lg'],
	'h3'
)
export const h4 = MarkdownFCFactory(
	[{ dark: 'text-label-dark', light: 'text-label-light' }],
	['text-md'],
	'h4'
)
export const h5 = MarkdownFCFactory(
	[{ dark: 'text-label-dark', light: 'text-label-light' }],
	['text-md', 'font-medium', 'tracking-widest'],
	'h5'
)
export const h6 = MarkdownFCFactory(
	[{ dark: 'text-label-dark', light: 'text-label-light' }],
	['uppercase', 'font-medium', 'tracking-widest'],
	'h6'
)
export const ul = MarkdownFCFactory(
	[{ dark: 'text-label-dark', light: 'text-label-light' }],
	['list-disc', 'mx-6', 'my-2'],
	'ul'
)
export const ol = MarkdownFCFactory(
	[{ dark: 'text-label-dark', light: 'text-label-light' }],
	['list-decimal', 'mx-6', 'my-2'],
	'ol'
)
export const blockquote = MarkdownFCFactory(
	[
		{ dark: 'text-secondaryLabel-dark', light: 'text-secondaryLabel-light' },
		{ dark: 'border-systemGray-dark', light: 'border-systemGray-light' },
	],
	['mx-3', 'px-4', 'mt-1', 'py-1', 'border-l-4', 'italic', 'leading-tight'],
	'blockquote'
)
export const hr = (props: any) => {
	const { theme } = useContext(ThemeContext)
	const darkMode = theme === 'dark'
	return (
		<div
			{...props}
			className={classNames(
				darkMode ? 'bg-opaqueSeparator-dark' : 'bg-opaqueSeparator-light',
				'my-4'
			)}
			style={{ width: '100%', height: '1px' }}
		/>
	)
}
export const table = MarkdownFCFactory(
	[{ dark: 'text-label-dark', light: 'text-label-light' }],
	['table-auto', 'my-4', 'mx-auto'],
	'table'
)
export const th = MarkdownFCFactory(
	[
		{ dark: 'text-label-dark', light: 'text-label-light' },
		{ dark: 'bg-tertiarySystemFill-dark', light: 'bg-tertiarySystemFill-light' },
	],
	['font-bold', 'text-center', 'px-4', 'py-2', 'align-middle'],
	'th'
)
export const td = MarkdownFCFactory(
	[
		{ dark: 'text-label-dark', light: 'text-label-light' },
		{ dark: 'bg-quaternarySystemFill-dark', light: 'bg-quaternarySystemFill-light' },
	],
	['px-4', 'py-2', 'align-middle'],
	'td'
)
export const a = MarkdownFCFactory([{ dark: 'text-link-dark', light: 'text-link-light' }], [], 'a')
export const img = MarkdownFCFactory([], ['mx-auto', 'my-4', 'text-center'], 'img')
