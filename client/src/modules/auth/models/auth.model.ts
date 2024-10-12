export enum AuthRoleEnum {
  // eslint-disable-next-line no-unused-vars
  USER = 'USER',
  // eslint-disable-next-line no-unused-vars
  MOD = 'MOD',
  // eslint-disable-next-line no-unused-vars
  ADMIN = 'ADMIN',
}

export interface ILoginFormValues {
  email: string
  password: string
}

export interface IRegisterFormValues {
  email: string
  username: string
  password: string
}
