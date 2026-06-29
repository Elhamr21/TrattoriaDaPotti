'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

/* ---------------------------------- Theme --------------------------------- */

type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within Providers')
  return ctx
}

/* --------------------------------- Provider ------------------------------- */

export function Providers({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  // Read the initial theme from the class set by the inline script in <head>.
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'dark' : 'light')
    setMounted(true)
  }, [])

  // Keep the DOM + storage in sync whenever the theme changes. Keeping the
  // side effects here (instead of inside the state updater) makes the updater
  // pure, so React Strict Mode's double-invoke can't cancel out the toggle.
  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('potti-theme', theme)
    } catch {}
  }, [theme, mounted])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  const themeValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  )

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  )
}
