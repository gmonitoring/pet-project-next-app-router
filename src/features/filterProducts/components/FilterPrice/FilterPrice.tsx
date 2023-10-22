import { Box } from '@/shared/ui'
import { Slider, TextField, Typography } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import React, { FC } from 'react'
import { QueryFilterFormValues } from '@/features/filterProducts/components/validation'

export const FilterPrice: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<QueryFilterFormValues>()

  return (
    <Box>
      <Typography variant="subtitle1" mb={3}>
        Стоимость
      </Typography>
      <Controller
        name="price"
        control={control}
        render={({
          field: {
            value: { min, max },
            onChange,
          },
        }) => (
          <Box>
            <Box mb={2}>
              <Slider
                track="inverted"
                min={0}
                max={10000}
                value={[min, max]}
                defaultValue={[0, 0]}
                onChange={(_, value) => {
                  onChange({
                    min: value[0],
                    max: value[1],
                  })
                }}
              />
            </Box>
            <Box flexDirection="row">
              <Box mr={2}>
                <TextField
                  fullWidth
                  name="price.min"
                  variant="outlined"
                  error={!!errors[`price.min`]}
                  helperText={errors[`${`price.min` as string}`]?.message}
                  InputProps={{
                    startAdornment: <Box>От</Box>,
                  }}
                  sx={{
                    input: {
                      textAlign: 'right',
                      color: 'text.secondary',
                    },
                  }}
                  value={min}
                  onChange={(e) =>
                    onChange({
                      min: Number(e.target.value),
                      max: max,
                    })
                  }
                />
              </Box>
              <Box>
                <TextField
                  fullWidth
                  name="price.max"
                  variant="outlined"
                  error={!!errors[`price.max`]}
                  helperText={errors[`${`price.max` as string}`]?.message}
                  InputProps={{
                    startAdornment: <Box>До</Box>,
                  }}
                  sx={{
                    input: {
                      textAlign: 'right',
                      color: 'text.secondary',
                    },
                  }}
                  value={max}
                  onChange={(e) =>
                    onChange({
                      min: min,
                      max: Number(e.target.value),
                    })
                  }
                />
              </Box>
            </Box>
          </Box>
        )}
      />
    </Box>
  )
}
