import { useEffect } from 'react'

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'

import { styled } from '@stitches/react'
import { useProvider } from '@/hooks/useProvider'

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: 'inline-flex',
  borderRadius: 4,
})

const StyledItem = styled(ToggleGroupPrimitive.Item, {
  all: 'unset',
  width: 35,
  height: 35,
  color: '$primary',
  backgroundColor: '$backgroundCard',

  fontSize: '0.8rem',
  fontWeight: 'bold',
  lineHeight: 1,
  marginLeft: 1,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease-in-out',
  boxShadow: `0 2px 10px rgba(0, 0, 0, 0.1)`,

  '&:first-child': {
    marginLeft: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  '&:last-child': { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  '&:hover:not(:disabled)': {
    opacity: 0.5,
    cursor: 'pointer',
  },
  '&[data-state=on]': {
    backgroundImage: `linear-gradient(to right, $blue500, $blue300, $green300)`,
    color: '$primary',
  },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px black` },
  '&[disabled]': { cursor: 'not-allowed' },
})

const ToggleGroup = StyledToggleGroup
const ToggleGroupItem = StyledItem

export function ToggleButtonLanguage() {
  const { language, toggleLanguage } = useProvider()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storageLanguage = window.localStorage.getItem('@app:language')

      if (storageLanguage) toggleLanguage(storageLanguage)
    }
  }, [])

  return (
    <ToggleGroup
      type="single"
      value={language}
      aria-label="Text translated"
      css={{ display: 'flex' }}
      onValueChange={(value: string) => toggleLanguage(value)}
    >
      <ToggleGroupItem
        value="pt"
        aria-label="pt translate"
        disabled={language === 'pt'}
      >
        PT
      </ToggleGroupItem>
      <ToggleGroupItem
        value="en"
        aria-label="en translate"
        disabled={language === 'en'}
      >
        EN
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
