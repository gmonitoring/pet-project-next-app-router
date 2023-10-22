'use client'

import React, { FC, PropsWithChildren, useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { SnackbarProvider } from '@/shared/ui'
import { darkTheme, lightTheme } from '@/shared/config/theme/newTheme'
import { ThemeMode } from '@/shared/config/types'
import { isDarkMode, isLightMode } from '@/shared/typeGuards/theme'
import { RootStyleRegistry } from '@/app-fsd/providers/emotion'
import '@/shared/config/theme/css/allCssImports'

type PageContext = {
  mode: ThemeMode
  handleSetMode?: () => void
}

const isBrowser = typeof window !== 'undefined'
export let initialMode: ThemeMode = 'light'

if (typeof window !== 'undefined') {
  const lsMode: string | null = localStorage?.getItem('themeMode')

  if (lsMode && (isLightMode(lsMode) || isDarkMode(lsMode))) {
    initialMode = lsMode
  }
}

export const PageContext = React.createContext<PageContext>({
  mode: initialMode,
})

const Providers: FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(initialMode)

  const handleSetMode = () => {
    if (isDarkMode(mode)) {
      setMode('light')
      if (isBrowser) localStorage.setItem('themeMode', 'light')
    } else {
      setMode('dark')
      if (isBrowser) localStorage.setItem('themeMode', 'dark')
    }
  }

  return (
    <RootStyleRegistry>
      <PageContext.Provider
        value={{
          mode: mode,
          handleSetMode,
        }}
        key={mode}
      >
        <CssBaseline />
        <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
          <SnackbarProvider>{children}</SnackbarProvider>
        </ThemeProvider>
      </PageContext.Provider>
    </RootStyleRegistry>
  )
}

export default Providers
