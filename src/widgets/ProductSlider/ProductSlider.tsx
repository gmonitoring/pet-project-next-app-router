'use client'

import React, { Children, FC, PropsWithChildren } from 'react'
import { Box } from '@/shared/ui'
import MainSlider from '@/shared/ui/MainSlider/MainSlider'
import { zIndexLevel4 } from '@/shared/config/theme/cssVars'
import { Product } from '@/entities/product/types'
import { ProductFavoriteToggle } from '@/features/productFavorites/components/ProductFavoriteToggle/ProductFavoriteToggle'

const ProductSlider: FC<{ product: Product } & PropsWithChildren> = ({
  product,
  children,
}) => {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        bottom={24}
        right={24}
        borderRadius="50%"
        bgcolor="general.white"
        zIndex={zIndexLevel4}
      >
        <ProductFavoriteToggle {...product} />
      </Box>
      <MainSlider>
        {Children.map(children, (child, index) => (
          <Box key={index}>{child}</Box>
        ))}
      </MainSlider>
    </Box>
  )
}

export default ProductSlider
