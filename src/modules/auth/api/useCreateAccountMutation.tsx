'use client'
import { useMutation } from '@tanstack/react-query'

export interface ICreateAccountRequest {
  email: string
  username: string
  password: string
}

export const CreateAccountKey = 'CREATE_ACCOUNT_KEY'

const createAccount = async ({ email, username, password }: ICreateAccountRequest) => {
  try {
    const response = await fetch('/api/auth/create', {
      method: 'POST',
      body: JSON.stringify({ email, username, password }),
    })
    const data = await response.json()

    return data
  } catch (err) {
    console.log('err', err)
    return err
  }
}

export default function useCreateAccountMutation() {
  return useMutation({ mutationKey: [CreateAccountKey], mutationFn: createAccount })
}
