import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { Box, Button } from '@/shared/ui'
import ArrowRight from 'public/icons/arrow_right.svg'

export type MainBannerProps = {
  handleView: () => void
}

export const MainBanner: FC<MainBannerProps> = ({ handleView }) => {
  return (
    <Box
      sx={{
        backgroundImage: "url('/images/main_banner.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      pt={9.25}
      pb={6.5}
      px={3}
      height={470}
    >
      <Box mb="auto">
        <Typography mb={1} variant="h1" color="white">
          Настоящие шедевры часового мастерства
        </Typography>
        <Typography variant="caption" color="gray.500">
          Прочувствуйте секунды совершенства
        </Typography>
      </Box>
      <Box maxWidth={195}>
        <Button endIcon={<ArrowRight />} onClick={handleView}>
          Смотреть бренды
        </Button>
      </Box>
    </Box>
  )
}
