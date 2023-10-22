'use client'
import React from 'react'
import { styled, Switch, SwitchProps } from '@mui/material'

export const BaseSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 62,
  height: 32,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    top: '50%',
    left: 3,
    transform: 'translateY(-50%)',
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translate(30px, -50%)',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.secondary.main,
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
      '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.primary.main,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: theme.palette.secondary.main,
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      opacity: 0.5,
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    width: 26,
    height: 26,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.gray['500'],
  },
  '& .MuiSwitch-track': {
    borderRadius: '50px',
    backgroundColor: theme.palette.secondary.main,
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}))
