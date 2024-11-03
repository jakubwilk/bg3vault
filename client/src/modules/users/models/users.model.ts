export enum UserRoleEnum {
  // eslint-disable-next-line no-unused-vars
  USER = 'USER',
  // eslint-disable-next-line no-unused-vars
  MOD = 'MOD',
  // eslint-disable-next-line no-unused-vars
  ADMIN = 'ADMIN',
}

export interface IUser {
  id: string
  username: string
  email: string
  role: UserRoleEnum
  isActivated: boolean
  isBanned: boolean | null
  isDeleted: boolean | null
}
