import React, { FC } from 'react'
import { Product } from '@/entities/product/types'
import { ProductFavoriteToggle } from '@/features/productFavorites/components/ProductFavoriteToggle/ProductFavoriteToggle'
import { ProductCardEntity } from '@/entities/product/components/ProductCardEntity/ProductCardEntity'
import Link from 'next/link'

export const ProductCard: FC<Product> = ({ ...product }) => {
  return (
    <Link href={{ pathname: `products/${product.id}` }}>
      <ProductCardEntity FavoriteSlot={ProductFavoriteToggle} {...product} />
    </Link>
  )
}
