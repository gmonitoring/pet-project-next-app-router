import { NextResponse } from 'next/server'
import { FiltersMocks } from '@/app/api/filters/mocks'

export async function GET() {
  return NextResponse.json(FiltersMocks)
}
