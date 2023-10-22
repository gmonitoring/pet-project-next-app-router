import { FC, PropsWithChildren } from 'react'
import { Box } from '@/shared/ui/Box/Box'
import { Container } from '@mui/material'
import { zIndexLevel2 } from '@/shared/config/theme/cssVars'
import { MainMenu } from '@/widgets/MainMenu/MainMenu'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Box position="relative" minHeight="100vh" pb="96px">
        <Box>{children}</Box>
      </Box>
      <Box
        position="fixed"
        bottom={0}
        width="100%"
        bgcolor="general.white"
        alignItems="center"
        zIndex={zIndexLevel2}
      >
        <Container>
          <MainMenu />
        </Container>
      </Box>
    </Box>
  )
}

export default MainLayout
