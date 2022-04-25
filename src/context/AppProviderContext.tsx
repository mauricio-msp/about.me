import { createContext, useState, ReactNode } from 'react'

type AppContextData = {
  language: string
  sound: boolean
  toggleLanguage: (l: string) => void
  enableSound: (s: boolean) => void
}

export const Context = createContext({} as AppContextData)

type AppContextProviderProps = {
  children: ReactNode
}

export function AppProvider({ children }: AppContextProviderProps) {
  const [language, setLanguage] = useState<string>('en')
  const [sound, setSound] = useState<boolean>(true)

  function toggleLanguage(language: string) {
    setLanguage(language)

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('@app:language', language)
    }
  }

  function enableSound(sound: boolean) {
    setSound(sound)

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('@app:sound', JSON.stringify(sound))
    }
  }

  return (
    <Context.Provider
      value={{
        language,
        sound,
        toggleLanguage,
        enableSound,
      }}
    >
      {children}
    </Context.Provider>
  )
}
