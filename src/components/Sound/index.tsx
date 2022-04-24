import * as TogglePrimitive from '@radix-ui/react-toggle'
import { SpeakerLoudIcon, SpeakerOffIcon } from '@radix-ui/react-icons'

import { styled } from '@stitches/react'
import { useProvider } from '@/hooks/useProvider'

const StyledToggle = styled(TogglePrimitive.Root, {
  all: 'unset',

  width: 35,
  height: 35,
  color: '$primary',

  backgroundColor: '$backgroundCard',
  borderRadius: 4,
  boxShadow: `0 2px 10px rgba(0, 0, 0, 0.1)`,

  fontSize: '0.8rem',
  lineHeight: 1,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease-in-out',

  '&:hover': { opacity: 0.5, cursor: 'pointer' },
  '&[data-state=on]': {
    backgroundImage: `linear-gradient(to right, $blue500, $blue300, $green300)`,
    color: '$primary',
  },
  '&:focus': { boxShadow: `0 0 0 2px black` },
})

const Toggle = StyledToggle

// Your app...
export function ButtonSound() {
  const { sound, enableSound } = useProvider()

  return (
    <Toggle
      pressed={sound}
      onPressedChange={(pressed: boolean) => enableSound(pressed)}
      aria-label="Toggle sound"
    >
      {sound ? <SpeakerLoudIcon /> : <SpeakerOffIcon />}
    </Toggle>
  )
}
