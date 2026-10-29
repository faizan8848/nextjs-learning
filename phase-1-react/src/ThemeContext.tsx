import { createContext, useContext } from 'react'

type Theme = 'light' | 'dark'
type ThemeContextType = { theme: Theme; toggle: () => void }

export const ThemeContext = createContext<ThemeContextType | null>(null)

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme ko ThemeContext.Provider ke andar use karo')
  return ctx
}