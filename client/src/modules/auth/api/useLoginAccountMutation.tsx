'use client'
import { useMutation } from '@tanstack/react-query'
import { axios } from 'services/index'
// import api from 'services/fetch'

export interface ILoginAccountRequest {
  email: string
  password: string
}

export const LoginAccountKey = 'LOGIN_ACCOUNT_KEY'

const loginAccount = async ({ email, password }: ILoginAccountRequest) => {
  return await axios.post<ILoginAccountRequest>('auth/login', { email, password })
}

export default function useLoginAccountMutation() {
  return useMutation({ mutationKey: [LoginAccountKey], mutationFn: loginAccount })
}
