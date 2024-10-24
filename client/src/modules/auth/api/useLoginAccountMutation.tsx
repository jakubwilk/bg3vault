'use client'
import { useCallback, useState } from 'react'
import { IAuthLoginResponse } from 'auth/models'
import { useNotification } from 'common/hooks'

export interface ILoginAccountRequest {
  email: string
  password: string
}

export default function useLoginAccountMutation() {
  const { showErrorNotification } = useNotification()
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<IAuthLoginResponse | null>(null)

  const loginAccount = useCallback(
    async ({ email, password }: ILoginAccountRequest) => {
      try {
        setIsPending(true)
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        })

        const result = await response.json()

        if (!response.ok) {
          showErrorNotification(result.message)
          setError(result.message)
          return
        }

        setData(result)
      } catch (err) {
        console.error('useLoginAccountMutation: ' + err)
        setError('Unknown error')
      } finally {
        setIsPending(false)
      }
    },
    [showErrorNotification],
  )

  return { loginAccount, isPending, error, data }
}
