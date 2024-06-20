import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json([{ id: 100, name: 'Test' }], { status: 200 })
}
