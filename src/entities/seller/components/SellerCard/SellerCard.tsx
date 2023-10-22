import React, { FC } from 'react'
import { Box } from '@/shared/ui'
import { Seller } from '@/entities/seller/types'
import { Typography } from '@mui/material'

export type ProductCardEntityProps = Seller

export const SellerCard: FC<ProductCardEntityProps> = ({
  name,
  adsCount,
  image,
}) => {
  return (
    <Box width="100%" flexDirection="row" alignItems="center">
      <Box maxWidth={64} maxHeight={64} mr={2}>
        <picture>
          <img src={image.src} alt="seller-logo" />
        </picture>
      </Box>
      <Box>
        <Typography variant="subtitle1" mb="2px">
          {name}
        </Typography>
        <Typography variant="caption" color='gray.500'>{adsCount} Объявления</Typography>
      </Box>
    </Box>
  )
}
