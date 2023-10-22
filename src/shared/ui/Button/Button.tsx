import React, { FC } from 'react'
import {
  ButtonProps as MuiButtonProps,
  default as MuiButton,
} from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

export type ButtonProps = MuiButtonProps & {
  loading?: boolean
}

export const Button: FC<ButtonProps> = ({
  loading = false,
  children,
  ...rest
}) => (
  <MuiButton {...rest} className={loading ? 'button-loading' : ''}>
    {loading ? <CircularProgress size="1.25rem" /> : children}
  </MuiButton>
)
