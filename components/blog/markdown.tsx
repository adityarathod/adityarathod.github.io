/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '../../pages/_app'

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

const textLabel = { dark: 'text-label-dark', light: 'text-label-light' }

export const p = MarkdownFCFactory([textLabel], ['my-4', 'leading-relaxed'], 'p')
export const h1 = MarkdownFCFactory([textLabel], ['text-2xl', 'font-bold', 'mt-4'], 'h1')
export const h2 = MarkdownFCFactory([textLabel], ['text-xl', 'font-medium', 'my-2'], 'h2')
export const h3 = MarkdownFCFactory([textLabel], ['text-lg'], 'h3')
export const h4 = MarkdownFCFactory([textLabel], ['text-md'], 'h4')
export const h5 = MarkdownFCFactory(
	[textLabel],
	['text-md', 'font-medium', 'tracking-widest'],
	'h5'
)
export const h6 = MarkdownFCFactory(
	[textLabel],
	['uppercase', 'font-medium', 'tracking-widest'],
	'h6'
)
export const ul = MarkdownFCFactory([textLabel], ['list-disc', 'mx-6', 'my-2'], 'ul')
export const ol = MarkdownFCFactory([textLabel], ['list-decimal', 'mx-6', 'my-2'], 'ol')
export const blockquote = MarkdownFCFactory(
	[
		{ dark: 'text-secondaryLabel-dark', light: 'text-secondaryLabel-light' },
		{ dark: 'border-systemGray-dark', light: 'border-systemGray-light' },
	],
	['mx-3', 'px-4', 'py-1', 'border-l-4', 'italic', 'leading-tight'],
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
export const table = MarkdownFCFactory([textLabel], ['table-auto', 'my-6', 'mx-auto'], 'table')
export const th = MarkdownFCFactory(
	[textLabel, { dark: 'bg-tertiarySystemFill-dark', light: 'bg-tertiarySystemFill-light' }],
	['font-bold', 'text-center', 'px-4', 'py-2', 'align-middle'],
	'th'
)
export const td = MarkdownFCFactory(
	[textLabel, { dark: 'bg-quaternarySystemFill-dark', light: 'bg-quaternarySystemFill-light' }],
	['px-4', 'py-2', 'align-middle'],
	'td'
)
export const a = MarkdownFCFactory([{ dark: 'text-link-dark', light: 'text-link-light' }], [], 'a')
export const img = MarkdownFCFactory([], ['mx-auto', 'my-4', 'text-center'], 'img')
