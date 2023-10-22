import React, { FC } from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { Box } from '@/shared/ui'
import { Typography } from '@mui/material'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { QueryFilterFormValues } from '@/features/filterProducts/components/validation'
import { SexFilter } from '@/entities/filters/types'

export const FilterSex: FC<{ sex: SexFilter }> = ({ sex }) => {
  const { control } = useFormContext<QueryFilterFormValues>()

  const { fields: sexFields } = useFieldArray({
    control,
    name: 'sex',
  })

  return (
    <Box flexDirection="row">
      {sexFields?.map((field, index) => (
        <Box flexDirection="row" alignItems="center" mr={3} key={index}>
          <Typography variant="subtitle1" mr={1.5} alignItems="center">
            {sex[index].label}
          </Typography>
          <Controller
            name={`sex.${index}.value`}
            control={control}
            render={({ field: { value, ref, ...props } }) => (
              <Checkbox checked={value} inputRef={ref} {...props} />
            )}
          />
        </Box>
      ))}
    </Box>
  )
}
