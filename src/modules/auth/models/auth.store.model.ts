import { AuthRoleEnum } from './auth.model'

export interface IAuthUser {
  uid: string
  login: string
  role: AuthRoleEnum
}

export interface IAuthReducer {
  user: IAuthUser | null
}
