// import { cookies } from 'next/headers'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
import { IAuthLoginResponse, ILoginFormValues } from 'auth/models'
// import { axios } from 'services/index'
// import { getTranslations } from 'next-intl/server'
// import { User } from '@prisma/client'
// import prisma from 'db'
// import HttpException, { HttpStatus, IHttpException } from 'services/error'
import api from 'services/fetch'
// import { getUserDTO } from 'services/mapper'
// import { createExpireTimeForCookie, generateUUID, verifyPassword } from 'services/server'

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()

  const { data } = await api.post<ILoginFormValues>('/auth/login', { email, password })

  if (data) {
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
  }

  return data

  // try {
  //   const t = await getTranslations('Common')
  //   const body = await request.json()
  //   const user = await prisma.user.findUnique({ where: { username: body.username } })

  //   if (!user) {
  //     throw HttpException.throwBadRequest(t('Exception.LoginUserNotExist'))
  //   }

  //   const isPasswordCorrect = await verifyPassword(body.password, user?.password || '')

  //   if (!isPasswordCorrect) {
  //     throw HttpException.throwBadRequest(t('Exception.LoginUserPasswordIncorrect'))
  //   }

  //   const expireTimeForCookie = createExpireTimeForCookie(7)
  //   const token = generateUUID(6)
  //   const updatedUser = await prisma.user.update({
  //     where: { username: body.username },
  //     data: { token },
  //   })
  //   const userDTO = getUserDTO(updatedUser as User)

  // cookies().set('auth', token, {
  //   sameSite: 'strict',
  //   secure: false,
  //   priority: 'high',
  //   expires: expireTimeForCookie,
  // })
  // cookies().set('uid', updatedUser.id, { sameSite: 'strict', priority: 'high' })
  //   return NextResponse.json({ data: userDTO }, { status: HttpStatus.OK })
  // } catch (err) {
  //   const error = err as IHttpException
  //   return NextResponse.json(error.message, {
  //     status: error.status,
  //   })
  // }
}
