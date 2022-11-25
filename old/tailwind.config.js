module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Urbanist',
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
      typography: {
        DEFAULT: {
          css: {
            color: 'white',
            maxWidth: '70ch',
            a: {
              color: '#1ac8ed',
              textDecoration: 'none',
              '&:hover': {
                opacity: 0.9,
              },
              '> code': {
                color: '#1ac8ed !important',
              },
            },
            h1: {
              color: 'white',
            },
            h2: {
              color: 'white',
            },
            h3: {
              color: 'white',
            },
            h4: {
              color: 'white',
            },
            code: {
              color: 'white',
              '&::before': {
                display: 'none',
              },
              '&::after': {
                display: 'none',
              },
            },
            strong: {
              color: 'white',
            },
            em: {
              color: 'white',
            },
            th: {
              color: 'white',
            },
            blockquote: {
              color: 'white',
            },
          },
        },
      },
      colors: {
        // custom colors
        space: '#1c1f29',
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
