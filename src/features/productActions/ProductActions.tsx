import React, { FC } from 'react'
import { Box, Button } from '@/shared/ui'

export const ProductActions: FC = () => {
  return (
    <Box>
      <Box flexDirection="row" mb={1.5}>
        <Box width="100%" mr={1.5}>
          <Button size="medium">Написать</Button>
        </Box>
        <Box width="100%">
          <Button size="medium" variant='black'>Позвонить</Button>
        </Box>
      </Box>
      <Box width="100%">
        <Button size="medium"  variant="contained" color='secondary'>Предложить свою цену</Button>
      </Box>
    </Box>
  )
}
