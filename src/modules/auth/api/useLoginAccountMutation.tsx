'use client'
import { useMutation } from '@tanstack/react-query'
import api from 'services/fetch'

export interface ILoginAccountRequest {
  username: string
  password: string
}

export const LoginAccountKey = 'LOGIN_ACCOUNT_KEY'

const loginAccount = async ({ username, password }: ILoginAccountRequest) => {
  return await api.post<ILoginAccountRequest>('api/auth/login', { username, password })
}

export default function useLoginAccountMutation() {
  return useMutation({ mutationKey: [LoginAccountKey], mutationFn: loginAccount })
}
