'use client'
import React from 'react'
import { IconButton, Theme, Typography, useTheme } from '@mui/material'
import Close from '/public/icons/close.svg'
import {
  OptionsObject,
  SnackbarContent,
  SnackbarKey,
  SnackbarMessage,
  useSnackbar,
  VariantType,
} from 'notistack'
import { Box } from '@/shared/ui/Box/Box'
import { ButtonProps } from '@/shared/ui/Button/Button'

const getBackgroundColor = (variant: VariantType, theme: Theme): string => {
  switch (variant) {
    case 'success': {
      return theme.palette.success.main
    }
    case 'warning': {
      return theme.palette.warning.main
    }
    case 'error': {
      return theme.palette.error.main
    }
    case 'info': {
      return theme.palette.primary.main
    }
    case 'default': {
      return theme.palette.primary.main
    }
    default: {
      return theme.palette.primary.main
    }
  }
}

export type SnackContentProps = Pick<ButtonProps, 'onClick'> & {
  id: SnackbarKey
  message: SnackbarMessage
} & OptionsObject

export const SnackContent = React.forwardRef<HTMLDivElement, SnackContentProps>(
  (props, ref) => {
    const theme = useTheme()
    const { id, message, variant = 'default' } = props
    const { closeSnackbar } = useSnackbar()

    return (
      <SnackbarContent ref={ref}>
        <Box
          minWidth={280}
          maxWidth={320}
          pl={2}
          pr={4}
          py={2}
          borderRadius="8px"
          position="relative"
          flexDirection="row"
          background={getBackgroundColor(variant as VariantType, theme)}
        >
          <Typography variant="body1" color="white" whiteSpace="pre-wrap">
            {message}
          </Typography>
          <Box position="absolute" top="0" right="0">
            <IconButton disableFocusRipple onClick={() => closeSnackbar(id)}>
              <Close color="white" />
            </IconButton>
          </Box>
        </Box>
      </SnackbarContent>
    )
  }
)

SnackContent.displayName = 'SnackContent'
