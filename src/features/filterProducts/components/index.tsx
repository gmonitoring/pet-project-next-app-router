'use client'

import React, { FC, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  QueryFilterFormValues,
  resolver,
} from '@/features/filterProducts/components/validation'
import { Stack, Typography } from '@mui/material'
import { ResetProductFilter } from '@/features/filterProducts/components/ResetProductFIlter/ResetProductFilter'
import { FilterSex } from '@/features/filterProducts/components/FilterSex/FilterSex'
import { FilterBrand } from '@/features/filterProducts/components/FilterBrand/FilterBrand'
import { FilterPrice } from '@/features/filterProducts/components/FilterPrice/FilterPrice'
import { FilterSet } from '@/features/filterProducts/components/FilterSet/FilterSet'
import { FilterAvailability } from '@/features/filterProducts/components/FilterAvailability/FilterAvailability'
import { FilterMaterial } from '@/features/filterProducts/components/FilterMaterial/FilterMaterial'
import { FilterGlassMaterial } from '@/features/filterProducts/components/FilterGlassMaterial/FilterGlassMaterial'
import { Button } from '@/shared/ui'
import { AllFilters } from '@/entities/filters/types'
import { FilterCountry } from '@/features/filterProducts/components/FilterCountry/FilterCountry'
import { filterDefaultValues } from '@/entities/filters/consts'

const defaultValues: QueryFilterFormValues = filterDefaultValues

export type FilterProductsProps = {
  values: QueryFilterFormValues
  filterData: AllFilters
  handleSubmitForm: (data: QueryFilterFormValues) => void
}

export const FilterProducts: FC<FilterProductsProps> = ({
  values = defaultValues,
  filterData,
  handleSubmitForm,
}) => {
  const methods = useForm<QueryFilterFormValues>({
    resolver: resolver,
    defaultValues: defaultValues,
  })

  const { handleSubmit, reset } = methods

  useEffect(() => {
    reset(values)
  }, [reset, values])

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(
          (data) => {
            handleSubmitForm(data)
          },
          (error) => {
            console.log(error)
          }
        )}
      >
        <Stack spacing={4} mb={10}>
          <ResetProductFilter />
          {filterData.sex && <FilterSex sex={filterData.sex} />}
          {filterData.brand && <FilterBrand brands={filterData.brand} />}
          {filterData && <FilterPrice />}
          {filterData.set && <FilterSet set={filterData.set} />}
          {filterData.availability && (
            <FilterAvailability availability={filterData.availability} />
          )}
          <Typography mb={3} variant="subtitle1">
            Особенности
          </Typography>
          {filterData.material && (
            <FilterMaterial material={filterData.material} />
          )}
          {filterData.glassMaterial && (
            <FilterGlassMaterial glassMaterial={filterData.glassMaterial} />
          )}
          {filterData.country && (
            <FilterCountry countries={filterData.country} />
          )}
          <Button type="submit">Пременить фильтр</Button>
        </Stack>
      </form>
    </FormProvider>
  )
}
