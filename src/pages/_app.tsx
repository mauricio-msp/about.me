import type { AppProps } from 'next/app'

import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'

import { AppProvider } from '@/context/AppProviderContext'
import { SEO } from '@/config/next-seo.config'

import { globalStyle } from '@/styles/global'
import { light, dark } from '@/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyle()}
      <DefaultSeo {...SEO} />
      <AppProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          value={{
            light: light.className,
            dark: dark.className,
          }}
        >
          <Component {...pageProps} />
        </ThemeProvider>
      </AppProvider>
    </>
  )
}

export default MyApp
