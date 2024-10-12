import { User } from '@prisma/client'

import { IUserDTO } from './users.model'

export const convertUserToUserDTO = (user: User): IUserDTO | null => {
  console.log('user', user)
  return null
}
