import { NextResponse } from 'next/server'
import { getArticles } from "@/entities/article/services";

// , {
//   headers: {
//     'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//   },
// }

export async function GET() {
  const articles = await getArticles()

  return NextResponse.json(articles)
}
