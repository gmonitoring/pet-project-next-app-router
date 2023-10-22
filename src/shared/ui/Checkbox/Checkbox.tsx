import React, { FC } from 'react'
import { styled } from '@mui/material'
import { CheckboxProps, default as MuiCheckbox } from '@mui/material/Checkbox'

export const DefaultIcon = styled('span')(({ theme }) => ({
  borderRadius: 4,
  border: `1.5px solid ${theme.palette.gray['400']}`,
  width: 28,
  height: 28,
  boxShadow: '0px 0px 2px 0px rgba(34, 60, 80, 0.16) inset',
  backgroundColor: theme.palette.background.default,
  'input:hover ~ &': {
    boxShadow: '0px 0px 4px 0px rgba(34, 60, 80, 0.16) inset',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    opacity: 0.5,
  },
}))

export const DefaultIconChecked = styled('span')(({ theme }) => ({
  borderRadius: 4,
  border: `1.5px solid ${theme.palette.gray['400']}`,
  width: 28,
  height: 28,
  boxShadow: '0px 0px 2px 0px rgba(34, 60, 80, 0.16) inset',
  '&::before': {
    content: "''",
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: theme.palette.general.black,
    right: '50%',
    top: '50%',
    transform: 'translate(50%, -50%)',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    opacity: 0.5,
  },
}))

export const Checkbox: FC<CheckboxProps> = (props) => {
  return (
    <MuiCheckbox
      disableRipple={true}
      checkedIcon={<DefaultIconChecked />}
      icon={<DefaultIcon />}
      {...props}
    />
  )
}
