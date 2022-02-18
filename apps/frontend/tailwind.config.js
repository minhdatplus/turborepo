module.exports = {
  content: [
    'pages/**/*.{js,ts,jsx,tsx}',
    'components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mangaBox': '#00000099',
        'mangaBox': '#f4f4f4',
        'borderAuthor': '#9fadc9',
        'colorAuthor': '#3f5a93',
        'borderCategory': '#ffb0b4',
        'colorCategory': '#bf2c24',
        'bgAuthor': '#ecf0f1'
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'ui-sans-serif', 'system-ui', "Helvetica Neue", 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        serif: ['"Literata"'],
        roboto: ['Roboto'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        altsans: ['"SF Pro Rounded"', '"Inter"', '-apple-system', 'BlinkMacSystemFont', 'ui-sans-serif', 'system-ui', "Helvetica Neue", 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        arial: ['Arial', '"HelveticaNeue-Light"', '"Helvetica Neue Light"', 'sans-serif'],
      },
      maxWidth: {
        '0.5': '272px'
      }
    }
  },
  plugins: [],
}

// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
