import React, { FC } from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { Box } from '@/shared/ui'
import { Typography } from '@mui/material'
import { QueryFilterFormValues } from '@/features/filterProducts/components/validation'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { SetFilter } from "@/entities/filters/types";

export const FilterSet: FC<{ set: SetFilter }> = ({ set }) => {
  const { control } = useFormContext<QueryFilterFormValues>()

  const { fields: setFields } = useFieldArray({
    control,
    name: 'set',
  })

  return (
    <Box>
      <Typography variant="subtitle1" mb={3}>
        Комплектация
      </Typography>
      <Box flexDirection="row">
        {setFields?.map((field, index) => (
          <Box flexDirection="row" alignItems="center" mr={3} key={index}>
            <Controller
              name={`set.${index}.value`}
              control={control}
              render={({ field: { value, ref, ...props } }) => (
                <Checkbox checked={value} inputRef={ref} {...props} />
              )}
            />
            <Box>
              <Typography variant="subtitle1" mr={1} alignItems="center">
                {set[index].label}
              </Typography>
              <Typography variant="caption">
                {set[index].description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
