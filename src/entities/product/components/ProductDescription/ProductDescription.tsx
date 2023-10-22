import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { Box } from '@/shared/ui'
import { rubSymbol } from '@/shared/config/constants'
import { Product } from '@/entities/product/types'

export type ProductDescriptionProps = Product

export const ProductDescription: FC<ProductDescriptionProps> = ({
  name,
  brand,
  price,
  discountedPrice,
  discount,
  description,
  create_at,
  views,
}) => {
  return (
    <Box>
      <Box width="100%" mb={3}>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
          mb={1}
        >
          <Box bgcolor="primary.main" px="6px" py="4px">
            {discount && (
              <Typography color="white">{`-${discount}%`}</Typography>
            )}
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
      <Box mb={2.5}>
        <Typography variant="button" color="primary" mb={1.5}>
          Описание товара
        </Typography>
        <Typography>{description}</Typography>
      </Box>
      <Box flexDirection="row">
        <Typography variant="caption" color="primary" mr={2}>
          {create_at}
        </Typography>
        <Typography variant="caption" color="primary">
          {views} Просмотр
        </Typography>
      </Box>
    </Box>
  )
}
