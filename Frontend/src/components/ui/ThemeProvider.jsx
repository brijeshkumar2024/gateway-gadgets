import React, { createContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const browserWindow = globalThis.window
    if (!browserWindow) return 'light'
    const storedTheme = browserWindow.localStorage.getItem('theme')
    return storedTheme || 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.style.setProperty('color-scheme','dark')
    } else {
      root.classList.remove('dark')
      root.style.setProperty('color-scheme','light')
    }
    const browserWindow = globalThis.window
    if (browserWindow) {
      browserWindow.localStorage.setItem('theme', theme)
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const value = useMemo(() => ({ theme, setTheme, toggle }), [theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
