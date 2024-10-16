import { NextRequest, NextResponse } from 'next/server'
// import { getTranslations } from 'next-intl/server'
// import prisma from 'db'
// import HttpException, { HttpStatus, IHttpException } from 'services/error'
import api from 'services/fetch'
// import { axios } from 'services/index'
// import { hashUserPassword } from 'services/server'

export async function POST(request: NextRequest) {
  const { email, username, password } = await request.json()

  const response = await api.post('/auth/register', { email, username, password })

  if (response?.statusCode !== 201) {
    return NextResponse.json(response?.message, { status: response?.statusCode })
  }

  return NextResponse.json({})
  // try {
  //   const t = await getTranslations('Common')
  //   const body = await request.json()
  //   const user = await prisma.user.findUnique({ where: { email: body.email } })

  //   if (user) {
  //     throw HttpException.throwBadRequest(t('Exception.CreateUserExist'))
  //   }

  //   const hashPassword = await hashUserPassword(body.password)
  //   await prisma.user.create({
  //     data: {
  //       email: body.email,
  //       username: body.username,
  //       password: hashPassword,
  //       createTime: new Date(),
  //     },
  //   })

  //   return NextResponse.json(null, { status: HttpStatus.CREATE })
  // } catch (err) {
  //   const error = err as IHttpException
  //   return NextResponse.json(error.message, {
  //     status: error.status,
  //   })
  // }
}
