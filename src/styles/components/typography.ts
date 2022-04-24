import { styled } from '@/styles/stitches.config'

export const Typography = styled('h1', {
  fontFamily: 'Roboto, sans-serif',
  variants: {
    color: {
      primary: {
        color: '$primary',
      },
      gradient: {
        linearGradient: 'to right, $blue500, $blue300, $green300',
        backgroundClip: 'text',
        '-webkit-text-fill-color': 'transparent',
      },
      gray: {
        color: '$gray300',
      },
      white: {
        color: '$white500',
      },
    },
  },

  defaultVariants: {
    color: 'gray',
  },
})
