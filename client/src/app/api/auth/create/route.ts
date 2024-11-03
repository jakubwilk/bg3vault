import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, username, password } = await request.json()
    const response = await fetch(`${process.env['NEXT_PUBLIC_BASE_API_URL']}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, password }),
    })

    if (!response.ok) {
      const error = await response.json()
      return NextResponse.json({ message: error.message }, { status: error.statusCode })
    }

    return NextResponse.json(null, { status: response.status })
  } catch (error) {
    console.error('Error', error)
    return NextResponse.json({ message: 'message' }, { status: 500 })
  }
}
