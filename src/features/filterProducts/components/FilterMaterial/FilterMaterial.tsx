import React, { FC } from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { Box } from '@/shared/ui'
import { Typography } from '@mui/material'
import { QueryFilterFormValues } from '@/features/filterProducts/components/validation'
import { CheckboxMaterial } from '@/shared/ui/CheckboxMaterial/CheckboxMaterial'
import { MaterialFilter } from '@/entities/filters/types'

export const FilterMaterial: FC<{ material: MaterialFilter }> = ({
  material,
}) => {
  const { control } = useFormContext<QueryFilterFormValues>()

  const { fields: brandFields } = useFieldArray({
    control,
    name: 'material',
  })

  return (
    <Box>
      <Box mb={3}>
        <Typography variant="caption">Материал корпуса</Typography>
      </Box>
      <Box flexDirection="row" flexWrap="wrap">
        <Box flexDirection="row" flexWrap="wrap">
          {brandFields?.map((field, index) => (
            <Box mr={1} mb={1} key={index}>
              <Controller
                name={`material.${index}.value`}
                control={control}
                render={({ field: { value, ref, ...props } }) => (
                  <CheckboxMaterial
                    background={material[index].background}
                    checked={value}
                    inputRef={ref}
                    {...props}
                  />
                )}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
