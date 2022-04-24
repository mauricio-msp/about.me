import { useRef } from 'react'

import { Typography } from '@/styles/components/typography'
import { styled } from '@/styles/stitches.config'

import { useProvider } from '@/hooks/useProvider'
import { datas } from '@/utils/information'

const Container = styled('div', {
  marginBottom: 72,
})

const Box = styled('div', {
  display: 'flex',
  gap: 24,
  marginBottom: 64,

  '&:hover article': {
    opacity: 0.5,
  },

  '& article:hover': {
    opacity: 1,
  },

  '&.column': {
    flexDirection: 'column',
  },

  '&.grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',

    '@xs': { gridTemplateColumns: '1fr' },
    '@sm': { gridTemplateColumns: '1fr' },
    '@md': { gridTemplateColumns: '1fr' },
    '@lg': { gridTemplateColumns: 'repeat(2, 1fr)' },
  },
})

const Content = styled('article', {
  width: '100%',
  padding: 32,
  background: '$backgroundCard',
  borderRadius: 8,

  display: 'flex',
  flexDirection: 'column',
  gap: 16,

  transition: 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out',

  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.08)',
  },
})

type DataType = {
  id: string
  style: string
  info: Array<{
    title: string
    category: string
    description: string
  }>
}

export function Card() {
  const { sound, language } = useProvider()
  const audioRef = useRef<HTMLAudioElement>(null)

  return (
    <>
      <audio src="/click.wav" ref={audioRef} />

      <Container>
        {datas[`${language}`].more.map(({ id, style, info }: DataType) => (
          <Box key={id} className={style}>
            <>
              {info.map((item, index) => (
                <Content
                  key={index}
                  onMouseEnter={() => sound && audioRef.current?.play()}
                >
                  <Typography
                    as="p"
                    color="gradient"
                    css={{
                      textTransform: 'uppercase',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      letterSpacing: 2,
                    }}
                  >
                    {item.category}
                  </Typography>

                  <Typography as="h2" color="primary">
                    {item.title}
                  </Typography>

                  {item.description && (
                    <Typography
                      as="p"
                      css={{ fontSize: '0.875rem', lineHeight: 1.75 }}
                    >
                      {item.description}
                    </Typography>
                  )}
                </Content>
              ))}
            </>
          </Box>
        ))}
      </Container>
    </>
  )
}
