'use client'
import { FC } from 'react'
import { Box } from '@/shared/ui/Box/Box'

const MainLoader: FC = () => {
  return (
    <Box minHeight="100vh" alignItems="center" justifyContent="center">
      <img src="/images/loader_logo.png" />
    </Box>
  )
}

export default MainLoader
