import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  reset,
} = createStitches({
  theme: {
    colors: {
      blue300: '#12d8fa',
      blue500: '#1fa2ff',

      green300: '#a6ffcb',

      gray100: '#EEEEEE',
      gray200: '#CCCCCC',
      gray300: '#999999',
      gray700: '#202022',
      gray800: '#19191A',
      gray900: '#121212',

      white500: '#FFFFFF',
    },
  },
  media: {
    xs: '(max-width: 600px)',
    sm: '(min-width: 600px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
  },
  utils: {
    size: (value: string | number) => ({
      width: value,
      height: value,
    }),

    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
})
