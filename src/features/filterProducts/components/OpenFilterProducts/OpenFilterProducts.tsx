'use client'

import { IconButton } from '@mui/material'
import Filter from 'public/icons/filter.svg'
import { useModal } from '@/shared/hooks/useModal'
import { ModalFilterProducts } from '@/features/filterProducts/components/ModalFilterProducts/ModalFilterProducts'
import { FC } from 'react'
import { FilterProductsProps } from '@/features/filterProducts/components'

export const OpenFilterProducts: FC<
  Pick<FilterProductsProps, 'filterData'>
> = ({ filterData }) => {
  const { open, handleClickOpen, handleClickClose } = useModal()

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <Filter />
      </IconButton>
      <ModalFilterProducts
        open={open}
        filterData={filterData}
        handleSubmitForm={(data) => {
          console.log(data)
          handleClickClose()
        }}
      />
    </>
  )
}
