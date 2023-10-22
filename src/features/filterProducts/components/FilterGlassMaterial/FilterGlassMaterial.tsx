import React, { FC } from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { Box } from '@/shared/ui'
import { Typography } from '@mui/material'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { QueryFilterFormValues } from '@/features/filterProducts/components/validation'
import { GlassMaterialFilter } from "@/entities/filters/types";

export const FilterGlassMaterial: FC<{
  glassMaterial: GlassMaterialFilter
}> = ({ glassMaterial }) => {
  const { control } = useFormContext<QueryFilterFormValues>()

  const { fields: glassMaterialFields } = useFieldArray({
    control,
    name: 'glassMaterial',
  })

  return (
    <Box>
      <Box mb={3}>
        <Typography variant="caption">Материал стекла</Typography>
      </Box>
      <Box flexDirection="row">
        {glassMaterialFields?.map((field, index) => (
          <Box flexDirection="row" alignItems="center" mr={3} key={index}>
            <Typography variant="subtitle1" mr={1.5} alignItems="center">
              {glassMaterial[index].label}
            </Typography>
            <Controller
              name={`glassMaterial.${index}.value`}
              control={control}
              render={({ field: { value, ref, ...props } }) => (
                <Checkbox checked={value} inputRef={ref} {...props} />
              )}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
