import React, { FC } from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { Box } from '@/shared/ui'
import { Typography } from '@mui/material'
import { QueryFilterFormValues } from '@/features/filterProducts/components/validation'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { AvailabilityFilter } from "@/entities/filters/types";

export const FilterAvailability: FC<{ availability: AvailabilityFilter }> = ({
  availability,
}) => {
  const { control } = useFormContext<QueryFilterFormValues>()

  const { fields: availabilityFields } = useFieldArray({
    control,
    name: 'availability',
  })

  return (
    <Box>
      <Typography variant="subtitle1" mb={3}>
        Наличие
      </Typography>
      <Box flexDirection="row">
        {availabilityFields?.map((field, index) => (
          <Box flexDirection="row" alignItems="center" mr={3} key={index}>
            <Controller
              name={`availability.${index}.value`}
              control={control}
              render={({ field: { value, ref, ...props } }) => (
                <Checkbox checked={value} inputRef={ref} {...props} />
              )}
            />
            <Box>
              <Typography variant="subtitle1" mr={1} alignItems="center">
                {availability[index].label}
              </Typography>
              <Typography variant="caption">
                {availability[index].description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
