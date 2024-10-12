import { NextRequest } from 'next/server'
// import { getTranslations } from 'next-intl/server'
// import prisma from 'db'
// import HttpException, { HttpStatus, IHttpException } from 'services/error'
import api from 'services/fetch'
// import { hashUserPassword } from 'services/server'

export async function POST(request: NextRequest) {
  const { email, username, password } = await request.json()

  return api.post('auth/register', { email, username, password }, { credentials: 'include' })
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
