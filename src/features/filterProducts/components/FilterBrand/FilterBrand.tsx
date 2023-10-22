import React, { FC } from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { Box, FilterChip } from '@/shared/ui'
import { Typography } from '@mui/material'
import { QueryFilterFormValues } from '@/features/filterProducts/components/validation'
import { BrandFilter } from "@/entities/filters/types";

export const FilterBrand: FC<{ brands: BrandFilter }> = ({ brands }) => {
  const { control } = useFormContext<QueryFilterFormValues>()

  const { fields: brandFields } = useFieldArray({
    control,
    name: 'brand',
  })

  return (
    <Box>
      <Box mb={3}>
        <Typography variant="subtitle1">Бренды</Typography>
      </Box>
      <Box flexDirection="row" flexWrap="wrap">
        <Box flexDirection="row" flexWrap="wrap">
          {brandFields?.map((field, index) => (
            <Box mr={1} mb={1} key={index}>
              <Controller
                name={`brand.${index}.value`}
                control={control}
                render={({ field: { value, onChange } }) => (
                  <FilterChip
                    label={brands[index].name}
                    imageSrc={brands[index].image}
                    value={value}
                    onChange={(newValue) => onChange(newValue)}
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
