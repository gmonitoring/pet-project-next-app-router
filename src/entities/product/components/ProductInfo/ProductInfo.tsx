import React, { FC } from 'react'
import { Divider, Typography } from '@mui/material'
import { Box } from '@/shared/ui'
import { Product } from '@/entities/product/types'
import { CheckboxMaterial } from '@/shared/ui/CheckboxMaterial/CheckboxMaterial'

export type ProductInfoProps = Product

export const ProductInfo: FC<ProductInfoProps> = ({
  brand,
  sex,
  state,
  year,
  set,
  material,
  glassMaterial,
  impermeability,
  diameter,
}) => {
  return (
    <Box width="100%">
      <Typography variant="subtitle1" mb={3}>
        Информация о товаре
      </Typography>
      <Box width="100%" mb={2}>
        <Box flexDirection="row" justifyContent="space-between" mb={1.5}>
          <Typography color="primary">Бренд</Typography>
          <Typography>{brand.name}</Typography>
        </Box>
        <Divider />
      </Box>
      <Box width="100%" mb={2}>
        <Box flexDirection="row" justifyContent="space-between" mb={1.5}>
          <Typography color="primary">Пол</Typography>
          <Typography>{sex.label}</Typography>
        </Box>
        <Divider />
      </Box>
      <Box width="100%" mb={2}>
        <Box flexDirection="row" justifyContent="space-between" mb={1.5}>
          <Typography color="primary">Состояние, год выпуска</Typography>
          <Typography>
            {state === 'new' ? 'Новые' : 'Не новые'} {year}
          </Typography>
        </Box>
        <Divider />
      </Box>
      <Box width="100%">
        <Box flexDirection="row" justifyContent="space-between" mb={1.5}>
          <Typography color="primary">Комплект</Typography>
          <Typography>{set.label}</Typography>
        </Box>
        <Divider />
      </Box>
      <Box width="100%" mb={2}>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography color="primary">Материал корпуса</Typography>
          <Box flexDirection="row" alignItems="center">
            <Typography>{material.label}</Typography>
            <CheckboxMaterial
              background={material.background}
              checked={false}
              disabled
            />
          </Box>
        </Box>
        <Divider />
      </Box>
      <Box width="100%" mb={2}>
        <Box flexDirection="row" justifyContent="space-between" mb={1.5}>
          <Typography color="primary">Материал стекла</Typography>
          <Typography>{glassMaterial.label}</Typography>
        </Box>
        <Divider />
      </Box>
      <Box width="100%" mb={2}>
        <Box flexDirection="row" justifyContent="space-between" mb={1.5}>
          <Typography color="primary">Водонепроницаемость</Typography>
          <Typography>{impermeability} ATM</Typography>
        </Box>
        <Divider />
      </Box>
      <Box flexDirection="row" justifyContent="space-between">
        <Typography color="primary">Диаметр корпуса</Typography>
        <Typography>{diameter} MM</Typography>
      </Box>
    </Box>
  )
}
