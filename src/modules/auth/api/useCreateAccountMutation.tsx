'use client'
import { useMutation } from '@tanstack/react-query'
import api from 'services/api'

export interface ICreateAccountRequest {
  email: string
  username: string
  password: string
}

export const CreateAccountKey = 'CREATE_ACCOUNT_KEY'

const createAccount = async ({ email, username, password }: ICreateAccountRequest) => {
  const { data } = await api.post('/api/auth/create', { email, username, password })

  return data
}

export default function useCreateAccountMutation() {
  return useMutation({ mutationKey: [CreateAccountKey], mutationFn: createAccount })
}
