import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { AppProvider } from '@/context/AppProviderContext'

import { globalStyle } from '@/styles/global'
import { light, dark } from '@/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyle()}
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
