'use client'

import React, { FC, PropsWithChildren } from 'react'
import { SnackbarProvider as NotistackSnackbarProvider } from 'notistack'
import { SnackContent } from '@/shared/ui'

export const SnackbarProvider: FC<PropsWithChildren> = ({ children }) => (
  <NotistackSnackbarProvider
    maxSnack={5}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    autoHideDuration={2500}
    Components={{
      success: SnackContent,
      warning: SnackContent,
      default: SnackContent,
      error: SnackContent,
      info: SnackContent,
    }}
  >
    {children}
  </NotistackSnackbarProvider>
)
