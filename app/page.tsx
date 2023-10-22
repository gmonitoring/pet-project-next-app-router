import Home from '@/pages-fsd/index'
import { DefaultPageProps } from '@/shared/types'

const HomePage = (_: DefaultPageProps) => {
  /*@ts-expect-error Server Component */
  return <Home />
}

export default HomePage
