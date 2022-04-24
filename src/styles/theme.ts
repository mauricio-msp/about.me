import { createTheme } from '@/styles/stitches.config'

export const light = createTheme({
  colors: {
    primary: '$gray900',
    secondary: '$gray300',
    background: '$white500',
    backgroundCard: '$gray100',
  },
})

export const dark = createTheme({
  colors: {
    primary: '$white500',
    secondary: '$gray300',
    background: '$gray900',
    backgroundCard: '$gray700',
  },
})
