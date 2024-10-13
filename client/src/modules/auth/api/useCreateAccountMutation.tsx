'use client'
import { useMutation } from '@tanstack/react-query'
import { axios } from 'services/index'
// import api from 'services/fetch'

export interface ICreateAccountRequest {
  email: string
  username: string
  password: string
}

export const CreateAccountKey = 'CREATE_ACCOUNT_KEY'

const createAccount = async ({ email, username, password }: ICreateAccountRequest) => {
  return await axios.post('auth/register', { email, username, password })
}

export default function useCreateAccountMutation() {
  return useMutation({ mutationKey: [CreateAccountKey], mutationFn: createAccount })
}
