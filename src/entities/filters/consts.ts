import { QueryFilterFormValues } from '@/features/filterProducts/components/validation'

export const filterDefaultValues: QueryFilterFormValues = {
  sex: [],
  brand: [],
  price: {
    min: 0,
    max: 0,
  },
  set: [],
  availability: [],
  material: [],
  glassMaterial: [],
  country: [],
}
