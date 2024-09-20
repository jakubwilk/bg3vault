import { User } from '@prisma/client'
import { IAuthUser } from 'auth/models'

export function getUserDTO(user: User): IAuthUser {
  const { id, username, email, role } = user

  return {
    id,
    username,
    email,
    role,
  }
}
