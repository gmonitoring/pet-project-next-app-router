'use client'

import { Product } from '@/entities/product/types'

export const getFavorites = (): Array<Product> => {
  if (typeof window !== 'undefined') {
    const favoritesLs = localStorage.getItem('favorites')
    return favoritesLs ? JSON.parse(favoritesLs) : []
  }
  return []
}

export const isFavorite = (id: Product['id']): boolean => {
  const favorites = getFavorites()
  return favorites?.length > 0
    ? !!favorites?.find((product) => product.id === id)
    : false
}

export const favoriteToggle = (product: Product): void => {
  const favorites = getFavorites()

  if (typeof window !== 'undefined' && product) {
    if (favorites.find((p) => p.id === product.id)) {
      localStorage.setItem(
        'favorites',
        JSON.stringify(favorites.filter((p) => p.id !== product.id))
      )
    } else {
      favorites.push(product)
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
  }
}
