import * as argon2 from 'argon2'
import { v4 as uuidv4, v6 as uuidv6 } from 'uuid'

import HttpException from './error'

export async function hashUserPassword(password: string) {
  try {
    return await argon2.hash(password)
  } catch (err) {
    throw HttpException.throwServerError(
      'Wystąpił wewnętrzny problem. Skontaktuj się z administratorem serwisu',
    )
  }
}

export async function verifyPassword(password: string, savedPassword: string) {
  try {
    return await argon2.verify(savedPassword, password)
  } catch (err) {
    throw HttpException.throwServerError(
      'Wystąpił wewnętrzny problem. Skontaktuj się z administratorem serwisu',
    )
  }
}

export function createExpireTimeForCookie(days: number): Date {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)

  return date
}

export function generateUUID(version: number = 4) {
  if (version === 4) {
    return uuidv4()
  }

  return uuidv6()
}
