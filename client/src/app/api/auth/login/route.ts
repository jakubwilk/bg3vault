import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { IAuthLoginResponse } from 'auth/models'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    const response = await fetch(`${process.env['NEXT_PUBLIC_BASE_API_URL']}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      const error = await response.json()
      return NextResponse.json({ message: error.message }, { status: error.statusCode })
    }

    const { data } = await response.json()

    const { authToken, uid } = data as IAuthLoginResponse
    const expireAuthTokenDate = new Date()

    expireAuthTokenDate.setTime(expireAuthTokenDate.getTime() + 1 * 24 * 60 * 60 * 1000)
    cookies().set('auth', authToken, {
      sameSite: 'strict',
      secure: false,
      priority: 'high',
      expires: expireAuthTokenDate,
    })
    cookies().set('uid', uid, { sameSite: 'strict', priority: 'high' })

    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error('Error', error)
    return NextResponse.json({ message: 'cycki' }, { status: 500 })
  }
}
