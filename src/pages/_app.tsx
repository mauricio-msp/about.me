import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { Provider } from '@/context/ProviderContext'

import { globalStyle } from '@/styles/global'
import { light, dark } from '@/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyle()}
      <Provider>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          value={{
            light: light.className,
            dark: dark.className,
          }}
        >
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
