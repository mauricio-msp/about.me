import { useContext } from 'react'
import { Context } from '@/context/ProviderContext'

export function useProvider() {
  return useContext(Context)
}
