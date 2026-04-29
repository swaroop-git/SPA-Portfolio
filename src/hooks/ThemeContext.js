import { createContext, useContext } from 'react'

export const ThemeCtx = createContext()

export function useTheme() {
  return useContext(ThemeCtx)
}
