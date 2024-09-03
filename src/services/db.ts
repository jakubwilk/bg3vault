import * as bcrypt from 'bcrypt'
import { isEqual } from 'lodash'

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
