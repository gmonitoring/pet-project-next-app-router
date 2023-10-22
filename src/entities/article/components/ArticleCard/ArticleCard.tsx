import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { Box } from '@/shared/ui'
import { Article } from '@/entities/article/types'

export type ArticleCardProps = Article

export const ArticleCard: FC<ArticleCardProps> = ({
  image,
  title,
  date,
  type,
}) => {
  return (
    <Box width="100%">
      <Box mb={2}>
        <img src={image} alt="article-card" />
      </Box>
      <Box maxWidth="80%">
        <Typography variant="subtitle1" mb={1}>
          {title}
        </Typography>
        <Box flexDirection="row">
          <Typography variant="button" color="primary.main">
            {type === 'article' ? 'Статья' : 'Интервью'}
          </Typography>
          <Typography px={0.5} color="primary.main">
            ·
          </Typography>
          <Typography variant="button" color="primary.main">
            {date}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
