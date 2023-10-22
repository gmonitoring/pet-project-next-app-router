import { FC, PropsWithChildren } from 'react'
import MainLayout from '@/app-fsd/components/layouts/MainLayout'
import Providers from '@/app-fsd/providers/'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
