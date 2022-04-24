import { useState, useEffect } from 'react'

export function useViewport() {
  const [viewport, getViewport] = useState({
    width: globalThis.window?.innerWidth,
    height: globalThis.window?.innerHeight,
  })

  const setDimension = () => {
    getViewport({
      width: globalThis.window?.innerWidth,
      height: globalThis.window?.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension)

    return () => {
      window.removeEventListener('resize', setDimension)
    }
  }, [viewport])

  return { viewport }
}
