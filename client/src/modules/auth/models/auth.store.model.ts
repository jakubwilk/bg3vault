export interface IAuthUser {
  id: string
  username: string
  email: string
  // TODO: Fix typo
  role: any
  isActivated: boolean
  isBanned: boolean | null
  isDeleted: boolean | null
}

export interface IAuthReducer {
  user: IAuthUser | null
}
