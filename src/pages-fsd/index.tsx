import React from 'react'
import { Container, Grid, TextField } from '@mui/material'
import { Box } from '@/shared/ui'
import BaseLink from '@/shared/ui/BaseLink/BaseLink'
import { MainBanner } from '@/widgets/MainBanner/MainBanner'
import PopularBrands from '@/features/popularBrands/components/PopularBrands'
import { OpenFilterProducts } from '@/features/filterProducts/components/OpenFilterProducts/OpenFilterProducts'
import { getFilters } from '@/entities/filters/services'
import { getPopularBrands } from '@/entities/brand/services'
import CardSlider from '@/shared/ui/CardSlider/CardSlider'
import { getProducts } from '@/entities/product/services'
import { ProductCard } from '@/widgets/ProductCard/ProductCard'
import { SaveDeal } from '@/features/safeDeal/SaveDeal'

export default async function Home() {
  const filters = await getFilters()
  const products = await getProducts()
  const brands = await getPopularBrands()

  const handleView = async () => {
    'use server'
  }

  return (
    <>
      {/*<BaseSwitch onChange={handleSetMode} checked={mode === 'dark'} />*/}
      <Box>
        <Box flexDirection="row" width="100%" p={2} bgcolor="general.white">
          <TextField id="search" placeholder="Поиск" fullWidth />
          {filters && <OpenFilterProducts filterData={filters} />}
        </Box>
        <Box mb={3}>
          <MainBanner handleView={handleView} />
        </Box>
        <Container>
          <Box width="100%" mb={2}>
            <BaseLink text="Лучшие предложения" href="/" />
          </Box>
          {products && (
            <Box width="100%" flexDirection="row" mb={3}>
              <CardSlider>
                {products?.map((i) => (
                  <ProductCard key={i.id} {...i} />
                ))}
              </CardSlider>
            </Box>
          )}
          <Box mb={2}>
            <SaveDeal />
          </Box>
          <Box mb={2}>
            <Box width="100%" mb={2}>
              <BaseLink text="Популярные бренды" href="/" />
            </Box>
            <PopularBrands brands={brands} />
          </Box>
          <Box width="100%">
            <Box width="100%" mb={2}>
              <BaseLink text="Популярные товары" href="/" />
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
    </>
  )
}

// {/*<BaseLink text="Журнал" href="/" />*/}
// {/*{articles && (*/}
// {/*  <Box width="100%" flexDirection="row" mb={3}>*/}
// {/*    <CardSlider>*/}
// {/*      {articles?.map((i) => (*/}
// {/*        <ArticleCard key={i.id} {...i} />*/}
// {/*      ))}*/}
// {/*    </CardSlider>*/}
// {/*  </Box>*/}
// {/*)}*/}
// {/*<Box bgcolor="general.secondary" p={2.5} mb={3}>*/}
// {/*  <Typography variant="subtitle1" mb={1.5}>*/}
// {/*    Хотите продать часы?*/}
// {/*  </Typography>*/}
// {/*  <Typography variant="caption" mb={2.5} color="gray.500">*/}
// {/*    Рассчитайте точную стоимость часов и продайте их на площадке*/}
// {/*  </Typography>*/}
// {/*  <Box*/}
// {/*    flexDirection="row"*/}
// {/*    justifyContent="center"*/}
// {/*    alignItems="center"*/}
// {/*    width="100%"*/}
// {/*  >*/}
// {/*    <Box width="100%" mr={1}>*/}
// {/*      <Button size="medium">Рассчитать цену</Button>*/}
// {/*    </Box>*/}
// {/*    <Box width="100%">*/}
// {/*      <Button size="medium" variant="text">*/}
// {/*        Продать часы*/}
// {/*      </Button>*/}
// {/*    </Box>*/}
// {/*  </Box>*/}
// {/*</Box>*/}
