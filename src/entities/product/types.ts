import { BEImage } from '@/shared/types'

export type Sex = {
  id: number
  name: string
  label: string
}

export type Brand = {
  id: number
  name: string
  image: string
}

export type Set = {
  id: number
  name: string
  label: string
  description: string
}

export type Material = {
  id: number
  name: string
  label: string
  background: string
}

export type GlassMaterial = {
  id: number
  name: string
  label: string
}

export type Country = {
  id: number
  name: string
  image: string
}

export type Product = {
  id: number
  sellerId: number
  name: string
  price: number
  discountedPrice: number
  discount: number
  image: BEImage
  images: Array<BEImage>
  //   detail
  description: string
  create_at: string
  views: number
  brand: Brand
  sex: Sex
  year: string
  state: 'new' | 'used'
  set: Set
  material: Material
  glassMaterial: GlassMaterial
  country: Country
  impermeability: number
  diameter: number
}
