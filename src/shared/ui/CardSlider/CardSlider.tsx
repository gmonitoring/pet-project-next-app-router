'use client'

import React, { Children, FC, PropsWithChildren } from 'react'
import { useTheme } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'

import { Box } from '@/shared/ui'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'

const CardSlider: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme()

  return (
    <Swiper
      className="swiper-container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={8}
      breakpoints={{
        [theme.breakpoints.values.xs]: { slidesPerView: 1.5 },
        [theme.breakpoints.values.md]: { slidesPerView: 1.9 },
        [theme.breakpoints.values.lg]: { slidesPerView: 3 },
      }}
    >
      {Children.map(children, (child, index) => (
        <SwiperSlide className="swiper-slide" key={index}>
          <Box width="100%" height="100%">
            {child}
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CardSlider
