import { User } from '@prisma/client'

import { IUserDTO } from './users.model'

export const convertUserToUserDTO = (user: User): IUserDTO | null => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
    isActivated: user.isActivated,
    isBanned: user.isBanned,
    isDeleted: user.isDeleted,
  }
}
