import { Box, Button } from '@/shared/ui'
import { Typography } from '@mui/material'
import React from 'react'

export const SaveDeal = () => {
  return (
    <Box bgcolor="general.secondary" p={2.5}>
      <Typography variant="subtitle1" mb={1.5}>
        Безопасная сделка
      </Typography>
      <Typography variant="caption" mb={2.5} color="gray.500">
        Мы обеспечиваем максимальную безопасность ваших покупок
      </Typography>
      <Box width="100%" alignItems="center" justifyContent="center">
        <Button size="medium">Подробнее про условия</Button>
      </Box>
    </Box>
  )
}
