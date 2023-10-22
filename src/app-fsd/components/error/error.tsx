'use client'

import React, { FC } from 'react'
import { Box, Button } from '@/shared/ui'
import { Typography } from '@mui/material'

export const Error: FC = () => {
  return (
    <Box
      width="100%"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="box"
    >
      <Typography variant="h1" color="error.main" mb={2}>
        404
      </Typography>
      <Typography variant="h6" color="primary.main" mb={2}>
        Страница, которую вы ищете, не существует
      </Typography>
      <Box width="100%" maxWidth={250}>
        <Button variant="contained" size="medium" fullWidth>
          На главную
        </Button>
      </Box>
    </Box>
  )
}
