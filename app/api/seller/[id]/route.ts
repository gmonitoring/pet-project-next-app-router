import { NextResponse } from 'next/server'
import { SellerMocks } from '@/app/api/seller/mocks'
import { Seller } from '@/entities/seller/types'

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
    const seller = SellerMocks.find((i) => i.id == Number(params.id))
    if (seller) {
      return NextResponse.json<Seller>(seller)
    } else {
      throw new Error()
    }
  } else {
    throw new Error()
  }
}
