import React, { FC } from 'react'
import { Box } from '@/shared/ui'
import { Typography } from '@mui/material'
import ArrowRight from 'public/icons/arrow_right.svg'
import Link, { LinkProps } from 'next/link'

export type BaseLinkProps<T> = {
  text: string
} & LinkProps<T>

type BaseLinkFCProps<T = string> = FC<BaseLinkProps<T>>

const BaseLink: BaseLinkFCProps = ({ text, ...props }) => {
  return (
    <Link {...props}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Typography variant="subtitle1">{text}</Typography>
        <ArrowRight />
      </Box>
    </Link>
  )
}

export default BaseLink
