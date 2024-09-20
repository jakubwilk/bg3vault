import { useMutation } from '@tanstack/react-query'
import api from 'services/api'

export interface ILoginAccountRequest {
  username: string
  password: string
}

export const LoginAccountKey = 'LOGIN_ACCOUNT_KEY'

const loginAccount = async ({ username, password }: ILoginAccountRequest) => {
  const { data } = await api.post('/api/auth/login', { username, password })

  return data
}

export default function useLoginAccountMutation() {
  return useMutation({ mutationKey: [LoginAccountKey], mutationFn: loginAccount })
}
