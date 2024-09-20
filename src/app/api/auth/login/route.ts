import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { getTranslations } from 'next-intl/server'
import { User } from '@prisma/client'
import prisma from 'db'
import HttpException, { HttpStatus, IHttpException } from 'services/error'
import { getUserDTO } from 'services/mapper'
import { createExpireTimeForCookie, generateUUID, verifyPassword } from 'services/server'

export async function POST(request: NextRequest) {
  try {
    const t = await getTranslations('Common')
    const body = await request.json()
    const user = await prisma.user.findUnique({ where: { username: body.username } })

    if (!user) {
      throw HttpException.throwBadRequest(t('Exception.LoginUserNotExist'))
    }

    const isPasswordCorrect = await verifyPassword(body.password, user?.password || '')

    if (!isPasswordCorrect) {
      throw HttpException.throwBadRequest(t('Exception.LoginUserPasswordIncorrect'))
    }

    const expireTimeForCookie = createExpireTimeForCookie(7)
    const token = generateUUID()
    const updatedUser = await prisma.user.update({
      where: { username: body.username },
      data: { token },
    })
    const userDTO = getUserDTO(updatedUser as User)

    cookies().set('auth', token, {
      sameSite: true,
      secure: false,
      expires: expireTimeForCookie,
    })
    cookies().set('uid', updatedUser.id, { sameSite: true })
    return NextResponse.json({ data: userDTO }, { status: HttpStatus.OK })
  } catch (err) {
    const error = err as IHttpException
    return NextResponse.json(error.message, {
      status: error.status,
    })
  }
}
