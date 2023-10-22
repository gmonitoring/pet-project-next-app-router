import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { Box } from '@/shared/ui'
import { rubSymbol } from '@/shared/config/constants'
import { Product } from '@/entities/product/types'

export type ProductCardEntityProps = Product & {
  FavoriteSlot: React.FC<Product>
}

export const ProductCardEntity: FC<ProductCardEntityProps> = ({
  FavoriteSlot,
  ...product
}) => {
  const { name, brand, price, discountedPrice, discount, image } = product

  return (
    <Box width="100%">
      <Box
        position="relative"
        width="100%"
        bgcolor="secondary.main"
        p="10px"
        sx={{
          backgroundImage: `url(${image.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        height={143}
        mb={2.5}
      >
        <Box flexDirection="row" justifyContent="space-between" width="100%">
          <Box bgcolor="primary.main" px="6px" py="4px">
            {discount && (
              <Typography color="white">{`-${discount}%`}</Typography>
            )}
          </Box>
          {product && <FavoriteSlot {...product} />}
        </Box>
      </Box>
      <Box width="100%">
        <Typography variant="body1" mb={1}>
          {`${brand.name} ${name}`}
        </Typography>
        <Box flexDirection="row">
          <Typography variant="caption" mr={0.8}>
            {`${discountedPrice} ${rubSymbol}`}
          </Typography>
          <Typography
            variant="caption"
            mr={0.8}
            color="gray.500"
            sx={{ textDecoration: 'line-through' }}
          >
            {`${price} ${rubSymbol}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
