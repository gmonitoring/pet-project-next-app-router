export type SexFilter = Array<{
  id: number
  name: string
  label: string
}>

export type BrandFilter = Array<{
  id: number
  name: string
  image: string
}>

export type SetFilter = Array<{
  id: number
  name: string
  label: string
  description: string
}>

export type AvailabilityFilter = Array<{
  id: number
  name: string
  label: string
  description: string
}>

export type MaterialFilter = Array<{
  id: number
  name: string
  label: string
  background: string
}>

export type GlassMaterialFilter = Array<{
  id: number
  name: string
  label: string
}>

export type CountryFilter = Array<{
  id: number
  name: string
  image: string
}>

export type AllFilters = {
  sex: SexFilter
  brand: BrandFilter
  price: {
    min: number
    max: number
  }
  set: SetFilter
  availability: AvailabilityFilter
  material: MaterialFilter
  glassMaterial: GlassMaterialFilter
  country: CountryFilter
}
