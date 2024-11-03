'use client'
import { useCallback, useState } from 'react'
import { IAuthLoginResponse } from 'auth/models'
import { useNotification } from 'common/hooks'

export interface ILoginAccountRequest {
  email: string
  password: string
}

interface ILoginAccountRequestInit {
  onSuccess?: () => void
  onError?: () => void
}

export default function useLoginAccountMutation() {
  const { showErrorNotification } = useNotification()
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<IAuthLoginResponse | null>(null)

  const loginAccount = useCallback(
    async (values: ILoginAccountRequest, { onSuccess, onError }: ILoginAccountRequestInit) => {
      try {
        setIsPending(true)
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        })

        const result = await response.json()

        if (!response.ok) {
          showErrorNotification(result.message)
          setError(result.message)

          if (onError) {
            onError()
          }

          return
        }

        setData(result)

        if (onSuccess) {
          onSuccess()
        }
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
