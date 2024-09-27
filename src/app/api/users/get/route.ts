import { NextRequest, NextResponse } from 'next/server'
import { User } from '@prisma/client'
import prisma from 'db'
import { isEqual } from 'lodash'
import { IHttpException } from 'services/error'
import { getUserDTO } from 'services/mapper'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const token = searchParams.get('auth')
    const uid = searchParams.get('uid')

    console.log('token + uid', { token, uid })

    if (token && uid) {
      const user = await prisma.user.findUnique({ where: { id: uid } })

      if (isEqual(user?.token, token) && user) {
        const userDTO = getUserDTO(user as User)

        return NextResponse.json({ data: userDTO }, { status: 200 })
      }
    }

    return NextResponse.json({ data: null }, { status: 200 })
  } catch (err) {
    const error = err as IHttpException
    return NextResponse.json(error.message, { status: error.status })
  }
}
