import { NextResponse } from 'next/server'
import { Product } from '@/entities/product/types'
import { ProductsMocks } from '@/app/api/products/mocks'

// , {
//   headers: {
//     'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//   },
// }

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // const { searchParams } = new URL(request.url)
  // const id = Number(searchParams.get('id'))

  if (params.id) {
    const product = ProductsMocks.find((i) => i.id == Number(params.id))
    if (product) {
      return NextResponse.json<Product>(product)
    } else {
      throw new Error()
    }
  } else {
    throw new Error()
  }
}
