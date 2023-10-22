import { NextResponse } from 'next/server'
import { getPopularBrands } from "@/entities/brand/services";

// , {
//   headers: {
//     'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//   },
// }

export async function GET() {
  const popularBrands = await getPopularBrands()

  return NextResponse.json(popularBrands)
}
