/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		fontFamily: {
			sans: [
				// 'Urbanist',
				'DM Sans',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji',
      ],
       mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
		},
		extend: {
			colors: {
				// custom colors
				space: 'rgb(7, 13, 44)',
				orange: '#ff3f0a',
				cyan: '#1ac8ed',
				spring: '#0fff95',
				lemon: '#ffffb3',
			},
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/typography')],
}
