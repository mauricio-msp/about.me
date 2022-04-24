import { globalCss } from '@/styles/stitches.config'

export const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  'html, body, #__next': {
    height: '100vh',
    background: '$background',
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  button: {
    cursor: 'pointer',
  },

  ul: {
    listStyle: 'none',
  },
})
