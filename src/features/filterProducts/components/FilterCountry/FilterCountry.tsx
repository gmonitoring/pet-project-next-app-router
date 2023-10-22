import React, { FC } from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { Box, FilterChip } from '@/shared/ui'
import { Typography } from '@mui/material'
import { QueryFilterFormValues } from '@/features/filterProducts/components/validation'
import { CountryFilter } from '@/entities/filters/types'

export const FilterCountry: FC<{ countries: CountryFilter }> = ({
  countries,
}) => {
  const { control } = useFormContext<QueryFilterFormValues>()

  const { fields: brandFields } = useFieldArray({
    control,
    name: 'country',
  })

  return (
    <Box>
      <Box mb={3}>
        <Typography variant="subtitle1">Страна производитель</Typography>
      </Box>
      <Box flexDirection="row" flexWrap="wrap">
        <Box flexDirection="row" flexWrap="wrap">
          {brandFields?.map((field, index) => (
            <Box mr={1} mb={1} key={index}>
              <Controller
                name={`country.${index}.value`}
                control={control}
                render={({ field: { value, onChange } }) => (
                  <FilterChip
                    label={countries[index].name}
                    imageSrc={countries[index].image}
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
