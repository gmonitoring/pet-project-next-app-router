import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { Box, Button } from '@/shared/ui'
import { Typography } from '@mui/material'

export const ResetProductFilter: FC = () => {
  const { reset } = useFormContext()
  // ${JSON.stringify(
  //         watch()
  //       )}
  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Typography variant="subtitle1">{`Фильтры()`}</Typography>
      <Box>
        <Button
          variant="text"
          color="primary"
          size="medium"
          onClick={() => reset()}
        >
          Убрать фильтры
        </Button>
      </Box>
    </Box>
  )
}
