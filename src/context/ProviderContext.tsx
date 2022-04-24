import { createContext, useState, ReactNode } from 'react'

type ContextData = {
  language: string
  sound: boolean
  toggleLanguage: (l: string) => void
  enableSound: (s: boolean) => void
}

export const Context = createContext({} as ContextData)

type ContextProviderProps = {
  children: ReactNode
}

export function Provider({ children }: ContextProviderProps) {
  const [language, setLanguage] = useState<string>('en')
  const [sound, setSound] = useState<boolean>(true)

  function toggleLanguage(language: string) {
    setLanguage(language)
  }

  function enableSound(sound: boolean) {
    setSound(sound)
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
