export interface IAuthLoginData {
  email: string
  password: string
}

export interface IAuthRegisterData {
  email: string
  username: string
  password: string
}

export interface IAuthFinalizeLoginData {
  authToken: string
  uid: string
}
