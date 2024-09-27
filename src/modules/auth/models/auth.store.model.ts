import { Role } from '@prisma/client'

export interface IAuthUser {
  id: string
  username: string
  email: string
  role: Role
  isActivated: boolean
  isBanned: boolean | null
  isDeleted: boolean | null
}

export interface IAuthReducer {
  user: IAuthUser | null
}
