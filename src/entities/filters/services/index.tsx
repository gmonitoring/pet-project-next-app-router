import { AllFilters } from '@/entities/filters/types'

export const getFilters = async (): Promise<AllFilters> => {
  try {
    return await fetch(`http://localhost:3000/api/filters/`).then((res) =>
      res.json()
    )
  } catch (e) {
    throw new Error(e)
  }
}
