import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

import * as SwitchPrimitive from '@radix-ui/react-switch'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

import { styled } from '@/styles/stitches.config'
import { useProvider } from '@/hooks/useProvider'

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: '$gray200',
  borderRadius: '9999px',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': {
    linearGradient: 'to right, $blue500, $blue300, $green300',
  },

  '&:hover': { cursor: 'pointer' },
})

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: '$white500',
  borderRadius: '9999px',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': {
    transform: 'translateX(19px)',
  },
})

const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})

const SwitchRoot = StyledSwitch
const SwitchThumb = StyledThumb

export function Switch() {
  const { sound } = useProvider()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  const audioRef = useRef<HTMLAudioElement>(null)

  function handleToggleTheme() {
    const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light'

    setTheme(targetTheme)
  }

  if (!mounted) return null

  return (
    <Flex>
      <audio src="/click.wav" ref={audioRef} />

      <SunIcon />
      <SwitchRoot
        id="switch-theme"
        checked={resolvedTheme === 'dark'}
        onCheckedChange={handleToggleTheme}
        onClick={() => sound && audioRef.current?.play()}
      >
        <SwitchThumb />
      </SwitchRoot>
      <MoonIcon />
    </Flex>
  )
}
