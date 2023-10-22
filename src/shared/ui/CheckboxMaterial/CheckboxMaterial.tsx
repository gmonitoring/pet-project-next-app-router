'use client'

import React, { FC } from 'react'
import { styled } from '@mui/material'
import { CheckboxProps, default as MuiCheckbox } from '@mui/material/Checkbox'

export type CheckboxMaterials = { background: string }

export const DefaultIcon = styled('span')<CheckboxMaterials>(
  ({ background }) => ({
    padding: '16px',
    borderRadius: '50%',
    // border: `1.5px solid ${theme.palette.gray["400"]}`,
    width: 28,
    height: 28,
    boxShadow: '0px 0px 2px 0px rgba(34, 60, 80, 0.16) inset',
    background: ((): string => {
      return background ?? 'transparent'
    })(),
    'input:hover ~ &': {
      boxShadow: '0px 0px 4px 0px rgba(34, 60, 80, 0.16) inset',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      opacity: 0.5,
    },
  })
)

export const DefaultIconChecked = styled('span')<CheckboxMaterials>(
  ({ theme, background }) => ({
    borderRadius: '50%',
    border: `1.5px solid ${theme.palette.primary.main}`,
    width: 28,
    height: 28,
    boxShadow: '0px 0px 2px 0px rgba(34, 60, 80, 0.16) inset',
    '&::before': {
      content: "''",
      position: 'absolute',
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: ((): string => {
        return background ?? 'transparent'
      })(),
      right: '50%',
      top: '50%',
      transform: 'translate(50%, -50%)',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      opacity: 0.5,
    },
  })
)

export const CheckboxMaterial: FC<CheckboxProps & CheckboxMaterials> = ({
  background,
  ...props
}) => {
  return (
    <MuiCheckbox
      disableRipple={true}
      checkedIcon={<DefaultIconChecked background={background} />}
      icon={<DefaultIcon background={background} />}
      {...props}
    />
  )
}
