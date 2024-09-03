import { NextRequest, NextResponse } from 'next/server'
import prisma from 'db'

export async function POST(request: NextRequest) {
  const { cookies } = request
  const body = await request.json()

  const user = await prisma.user.findUnique({ where: { email: body.email } })

  console.log('user', user)
  console.log('request', { body, cookies })

  return NextResponse.json({ data: [], total: 0 }, { status: 201 })
}
