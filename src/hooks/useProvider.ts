import { useContext } from 'react'
import { Context } from '@/context/AppProviderContext'

export function useProvider() {
  return useContext(Context)
}
