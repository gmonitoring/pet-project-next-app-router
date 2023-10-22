import React, { FC } from 'react'
import { BoxProps as MuiBoxProps, default as MuiBox } from '@mui/material/Box'
import { ResponsiveStyleValue } from '@mui/system/styleFunctionSx'

export type BoxProps = MuiBoxProps & {
  background?: MuiBoxProps['color']
  mixBlendMode?: string
  opacity?: number
  cursor?: string
  transform?: string
  backdropFilter?: string
  filter?: ResponsiveStyleValue<string>
}

export const Box: FC<BoxProps> = ({
  display = 'flex',
  flexDirection = 'column',
  background,
  mixBlendMode,
  opacity,
  cursor,
  transform,
  backdropFilter,
  filter,
  sx,
  ...rest
}) => (
  <MuiBox
    display={display}
    flexDirection={flexDirection}
    sx={
      {
        background,
        mixBlendMode,
        opacity,
        cursor,
        transform,
        backdropFilter,
        filter,
        ...sx,
      } as any
    }
    {...rest}
  />
)
