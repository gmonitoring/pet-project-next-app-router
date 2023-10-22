import { NextResponse } from 'next/server'
import { SellerMocks } from '@/app/api/seller/mocks'
import { Seller } from '@/entities/seller/types'

// , {
//   headers: {
//     'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//   },
// }

export async function GET() {
  return NextResponse.json<Array<Seller>>(SellerMocks)
}
