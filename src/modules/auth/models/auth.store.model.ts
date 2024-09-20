import { Role } from '@prisma/client'

export interface IAuthUser {
  id: string
  username: string
  email: string
  role: Role
}

export interface IAuthReducer {
  user: IAuthUser | null
}
