import { FC } from 'react'
import { DefaultPageProps } from '@/shared/types'
import ProductId from '@/pages-fsd/products/[id]'

const ProductIdPage: FC = (props: DefaultPageProps<{ id: string }>) => (
  /*@ts-expect-error Server Component */
  <ProductId {...props} />
)

export default ProductIdPage
