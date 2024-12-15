import { Role } from '@prisma/client'

export interface IUserDTO {
  id: string
  username: string
  email: string
  role: Role
  isActivated: boolean
  isBanned: boolean | null
  isDeleted: boolean | null
}
