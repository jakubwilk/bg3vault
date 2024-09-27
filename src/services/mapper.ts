import { User } from '@prisma/client'
import { IAuthUser } from 'auth/models'

export function getUserDTO(user: User): IAuthUser {
  console.log('user', user)
  const { id, username, email, role, isActivated, isBanned, isDeleted } = user

  return {
    id,
    username,
    email,
    role,
    isActivated,
    isBanned,
    isDeleted,
  }
}
