'use client'

import React, { Children, FC, PropsWithChildren } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box } from '@/shared/ui'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'
import { PaginationOptions } from 'swiper/types/modules/pagination'

const pagination: PaginationOptions = {
  type: 'custom',
  clickable: true,
  renderCustom: function (swiper, current, total): string {
    let htmlPagination = ''
    for (let i = 1; i <= total; i++) {
      if (i === current) {
        htmlPagination +=
          '<div class="swiper-pagination-bullet main active"></div>'
      } else {
        htmlPagination += '<div class="swiper-pagination-bullet main"></div>'
      }
    }

    return htmlPagination
  },
}

const MainSlider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Swiper
      className="main-swiper"
      modules={[Navigation, Scrollbar, A11y, Pagination]}
      pagination={pagination}
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

export default MainSlider
