import { NextResponse } from 'next/server'
import { Product } from '@/entities/product/types'
import { ProductsMocks } from '@/app/api/products/mocks'

// , {
//   headers: {
//     'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//   },
// }

export async function GET() {
  return NextResponse.json<Array<Product>>(ProductsMocks)
}
