import { NextRequest, NextResponse } from 'next/server'
import prisma from 'db'
import { hashUserPassword } from 'services/db'
import HttpException, { HttpStatus } from 'services/error'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const user = await prisma.user.findUnique({ where: { email: body.email } })

    if (user) {
      HttpException.throwBadRequest('Common.Exception.CreateUserExist')
    }

    const hashPassword = await hashUserPassword(body.password)
    await prisma.user.create({ data: { password: hashPassword, expireTime: new Date(), ...body } })

    return NextResponse.json(null, { status: HttpStatus.CREATE })
  } catch (err) {
    return NextResponse.json('Common.Exception.ServerCreateUserExist', {
      status: HttpStatus.SERVER_ERROR,
    })
  }
}
