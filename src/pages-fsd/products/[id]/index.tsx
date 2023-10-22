import React from 'react'
import { Container, Grid } from '@mui/material'
import { Box } from '@/shared/ui'
import { getProduct, getProducts } from '@/entities/product/services'
import { DefaultPageProps } from '@/shared/types'
import ProductSlider from '@/widgets/ProductSlider/ProductSlider'
import { ProductDescription } from '@/entities/product/components/ProductDescription/ProductDescription'
import { ProductActions } from '@/features/productActions/ProductActions'
import { ProductInfo } from '@/entities/product/components/ProductInfo/ProductInfo'
import { getSeller } from '@/entities/seller/services'
import { SellerCard } from '@/entities/seller/components/SellerCard/SellerCard'
import BaseLink from '@/shared/ui/BaseLink/BaseLink'
import { ProductCard } from '@/widgets/ProductCard/ProductCard'

export default async function ProductId({
  params,
}: DefaultPageProps<{ id: string }>) {
  const { id } = params
  const products = await getProducts()
  const product = await getProduct(Number(id))
  const seller = await getSeller(product.sellerId)

  return (
    <>
      {product ? (
        <Box>
          <Box mb={4}>
            <ProductSlider product={product}>
              {product.images.map((i) => (
                <Box key={i.id} height={350}>
                  <img className="main-slider-image" src={i.src} alt="image" />
                </Box>
              ))}
            </ProductSlider>
          </Box>
          <Container>
            <Box mb={3}>
              <ProductDescription {...product} />
            </Box>
            <Box mb={3}>
              <ProductActions />
            </Box>
            <Box mb={5}>
              <ProductInfo {...product} />
            </Box>
            <Box mb={3}>
              <SellerCard {...seller} />
            </Box>
            <Box width="100%" mb={3}>
              <Box width="100%" mb={2}>
                <BaseLink text="Похожие объявления" href="/" />
              </Box>
              <Grid container spacing={2}>
                {products.length &&
                  products.map((i) => (
                    <Grid key={i.id} item xs={6} sx={{ height: 'auto' }}>
                      <ProductCard key={i.id} {...i} />
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      ) : (
        <Box>Товар не найден</Box>
      )}
    </>
  )
}
