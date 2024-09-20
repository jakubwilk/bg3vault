import * as bcrypt from 'bcrypt'
import { isEqual } from 'lodash'
import { v4 as uuidv4 } from 'uuid'

import HttpException from './error'

export function checkIfPasswordAreTheSame(firstPassword: string, secondPassword: string) {
  if (!isEqual(firstPassword, secondPassword)) {
    throw new Error('Hasła nie są takie same')
  }

  return true
}

export async function hashUserPassword(password: string) {
  bcrypt.genSalt(14, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        HttpException.throwServerError('Wystąpił problem z utworzeniem konta')
      }

      return hash
    })
  })
}

export async function verifyPassword(password: string, savedPassword: string) {
  return await bcrypt.compare(password, savedPassword)
}

export function createExpireTimeForCookie(days: number): Date {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)

  return date
}

export function generateUUID() {
  return uuidv4()
}
