import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { cookies } = request
  const body = await request.json()

  console.log('request', { body, cookies })

  return NextResponse.json({ data: [], total: 0 }, { status: 201 })
}
