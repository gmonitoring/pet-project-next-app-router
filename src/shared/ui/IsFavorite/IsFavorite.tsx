'use client'

import React, { FC } from 'react'
import FavoriteActive from 'public/icons/favorite_active.svg'
import FavoriteInactive from 'public/icons/favorite_inactive.svg'
import { IconButton, NoSsr } from '@mui/material'

export const IsFavorite: FC<{
  isFavorite: boolean
  handleFavorite: (newState: boolean) => void
}> = ({ isFavorite, handleFavorite }) => {
  return (
    <IconButton
      aria-label="favorite"
      onClick={(e) => {
        e.preventDefault()
        handleFavorite(!isFavorite)
      }}
    >
      {/*TODO по сути это кастылёк NOSSR */}
      <NoSsr>{isFavorite ? <FavoriteActive /> : <FavoriteInactive />}</NoSsr>
    </IconButton>
  )
}
