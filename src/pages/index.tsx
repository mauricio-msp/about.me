import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { ButtonSound } from '@/components/Sound'
import { Card } from '@/components/Card'
import { TranslateGroup } from '@/components/Translated'
import { Separator } from '@/components/Separator'
import { Switch } from '@/components/Switch'

import { useViewport } from '@/hooks/useViewport'
import { useProvider } from '@/hooks/useProvider'

import { datas } from '@/utils/information'

import { Typography } from '@/styles/components/typography'
import * as H from '@/styles/pages/home'

const Home: NextPage = () => {
  const { language } = useProvider()
  const { viewport } = useViewport()
  const isMobile = viewport.width < 600

  return (
    <>
      <Head>
        <title>Home | Maurício Porfírio</title>
      </Head>

      <H.Container>
        <H.Settings>
          <Switch />
          <Separator orientation="vertical" />
          <TranslateGroup />
          <Separator orientation="vertical" />
          <ButtonSound />
        </H.Settings>

        <H.Profile>
          <Image
            className="avatar"
            src="https://avatars.githubusercontent.com/u/13602785?s=400&u=0cfb4342fb23380686c32083051c846b107279d3&v=4"
            alt="Maurício Porfírio"
            width={150}
            height={150}
          />

          <Typography
            color="gradient"
            css={{ fontSize: '3.5rem', '@xs': { fontSize: '2rem' } }}
          >
            {datas[`${language}`].greetings[0]}
            {''}
            <Image
              src="/hi.gif"
              alt="Hi!"
              width={isMobile ? 30 : 50}
              height={isMobile ? 30 : 50}
            />
            , {datas[`${language}`].greetings[1]} <br /> Maurício Porfírio.
          </Typography>

          <H.Line>Front-end Engineer</H.Line>

          <Typography
            as="p"
            className="description"
            css={{ '@xs': { fontSize: '2rem' } }}
          >
            {datas[`${language}`].about}⚡
          </Typography>

          <H.Social>
            <a href="#" rel="noopener noreferrer" className="disabled">
              Blog
            </a>
            <a
              href="https://github.com/mauricio-msp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.instagram.com/mauricioporfirio_mp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/mauricio-porfirio-673857105/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a href="#" rel="noopener noreferrer" className="disabled">
              More
            </a>
          </H.Social>
        </H.Profile>

        <H.Main>
          <Card />
        </H.Main>
      </H.Container>
    </>
  )
}

export default Home
