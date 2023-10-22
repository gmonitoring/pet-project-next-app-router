import React, { FC } from 'react'
import { Chip } from '@mui/material'
import ChipDelete from 'public/icons/chip_delete.svg'
import { Box } from '@/shared/ui'

export type FilterChipProps = {
  label: string
  imageSrc: string
  value: boolean
  onChange: (value: boolean) => void
}

export const FilterChip: FC<FilterChipProps> = ({
  imageSrc,
  label,
  value,
  onChange,
}) => {
  return (
    <>
      <Chip
        variant={value ? 'filled' : 'outlined'}
        label={label}
        icon={
          <Box maxWidth={20}>
            <img src={imageSrc} alt="chip-icon" />
          </Box>
        }
        deleteIcon={value ? <ChipDelete /> : <></>}
        onClick={() => {
          if (!value) onChange(!value)
        }}
        onDelete={() => {
          if (value) onChange(!value)
        }}
        color="primary"
      />
    </>
  )
}
