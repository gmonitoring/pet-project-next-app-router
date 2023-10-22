import { QueryFilterFormValues } from '@/features/filterProducts/components/validation'
import { AllFilters } from '@/entities/filters/types'
import { useSearchParams } from 'next/navigation'
import { filterDefaultValues } from '@/entities/filters/consts'

export const useGetFilterValues = (
  filterData: AllFilters
): QueryFilterFormValues => {
  const params = useSearchParams()

  let initialValues: QueryFilterFormValues = filterDefaultValues

  if (filterData) {
    initialValues = {
      sex: filterData.sex.map((i) => ({
        name: i.name,
        value: !!params.getAll('sex')?.find((param) => i.name === param),
      })),
      brand: filterData.brand.map((i) => ({
        name: i.name,
        value: !!params.getAll('brand')?.find((param) => i.name === param),
      })),
      price: {
        min: filterData.price.min,
        max: filterData.price.max,
      },
      set: filterData.set.map((i) => ({ name: i.name, value: false })),
      availability: filterData.availability.map((i) => ({
        name: i.name,
        value: !!params
          .getAll('availability')
          ?.find((param) => i.name === param),
      })),
      material: filterData.material.map((i) => ({
        name: i.name,
        value: !!params.getAll('material')?.find((param) => i.name === param),
      })),
      glassMaterial: filterData.glassMaterial.map((i) => ({
        name: i.name,
        value: !!params
          .getAll('glassMaterial')
          ?.find((param) => i.name === param),
      })),
      country: filterData.country.map((i) => ({
        name: i.name,
        value: !!params.getAll('country')?.find((param) => i.name === param),
      })),
    }
  }

  return initialValues
}
