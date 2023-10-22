'use client'

import React, { FC } from 'react'
import { Dialog, DialogContent } from '@mui/material'
import {
  FilterProducts,
  FilterProductsProps,
} from '@/features/filterProducts/components'
import { ModalProps } from '@/shared/hooks/useModal'
import { useGetFilterValues } from '@/features/filterProducts/hooks/useGetFilterValues'

export const ModalFilterProducts: FC<
  Pick<FilterProductsProps, 'filterData' | 'handleSubmitForm'> &
    Pick<ModalProps, 'open'>
> = ({ open, filterData, handleSubmitForm }) => {
  const values = useGetFilterValues(filterData)

  return (
    <Dialog open={open} fullScreen={true}>
      <DialogContent>
        {values && filterData && (
          <FilterProducts
            values={values}
            filterData={filterData}
            handleSubmitForm={handleSubmitForm}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
