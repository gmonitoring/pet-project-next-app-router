'use client'

import React, { FC } from 'react'
import { Box, FilterChip } from '@/shared/ui'
import { Brand } from '@/entities/brand/types'

export type PopularBrandsProps = {
  brands: Array<Brand>
}

const PopularBrands: FC<PopularBrandsProps> = ({ brands }) => {
  return (
    <Box
      width="100%"
      sx={{
        overflowX: 'scroll',
        '::-webkit-scrollbar': {
          width: 0,
          background: 'transparent',
        },
      }}
    >
      <Box flexDirection="row" flexWrap="wrap" width="150%">
        {!!brands?.length &&
          brands.map((brand) => (
            <Box mr={1} mb={1} key={brand.id}>
              <FilterChip
                label={brand.name}
                imageSrc={brand.image}
                value={false}
                onChange={(newValue) => console.log(newValue)}
              />
            </Box>
          ))}
      </Box>
    </Box>
  )
}

export default PopularBrands
