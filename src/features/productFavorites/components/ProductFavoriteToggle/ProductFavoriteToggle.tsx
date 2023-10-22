'use client'

import { FC, useState } from 'react'
import { IsFavorite } from '@/shared/ui'
import { favoriteToggle, isFavorite } from '@/features/productFavorites/utils'
import { Product } from '@/entities/product/types'

export const ProductFavoriteToggle: FC<Product> = (product) => {
  const [isActive, setIsActive] = useState<boolean>(isFavorite(product.id))

  return (
    <IsFavorite
      isFavorite={isActive}
      handleFavorite={() => {
        favoriteToggle(product)
        setIsActive(isFavorite(product.id))
      }}
    />
  )
}
