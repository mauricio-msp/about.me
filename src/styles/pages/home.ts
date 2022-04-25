import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  width: '100%',
  maxWidth: 1280,
  margin: '0 auto',

  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',

  '@xs': { flexDirection: 'column' },
  '@sm': { flexDirection: 'column' },
})

export const Settings = styled('div', {
  position: 'absolute',
  top: 16,
  right: 24,
  height: 35,
  zIndex: 9999,

  display: 'flex',
  alignItems: 'center',
  gap: 16,
})

export const Profile = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: 32,

  padding: '80px 24px',

  '& .avatar': {
    borderRadius: '9999px',
  },

  '& .icon-greetings': {
    objectFit: 'contain',
    width: '100% !important',
    position: 'relative !important',
    height: 'unset !important',
  },

  '& .description': {
    width: '100%',
    maxWidth: 460,
    color: '$gray300',
    fontSize: '1.25rem',
    lineHeight: 1.75,
  },

  '@xs': {
    width: '100%',
    height: 'auto',
    position: 'relative',

    '& .icon-greetings': {
      width: '30px !important',
      height: '30px !important',
    },
  },
  '@sm': {
    width: '100%',
    height: 'auto',
    position: 'relative',
  },
  '@md': {
    width: '50%',
    height: '100vh',
    position: 'fixed',
  },
})

export const Line = styled('div', {
  width: '100%',
  maxWidth: 460,
  position: 'relative',
  background: '$background',
  textAlign: 'center',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  textTransform: 'uppercase',
  fontWeight: 'bold',
  color: '$primary',

  '&::before, &::after': {
    content: '""',
    height: 1,
    background: '$primary',
    flexGrow: 1,
  },

  '&::before': { marginRight: 8 },
  '&::after': { marginLeft: 8 },
})

export const Social = styled('footer', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 460,
  marginTop: 'auto',

  '& .disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'none',
    color: '$gray300',
  },
})

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  padding: '80px 24px',
  right: 0,

  '@xs': {
    width: '100%',
    height: 'auto',
    position: 'relative',
  },
  '@sm': {
    width: '100%',
    height: 'auto',
    position: 'relative',
  },
  '@md': {
    width: '50%',
    height: '100vh',
    position: 'absolute',
  },
})
