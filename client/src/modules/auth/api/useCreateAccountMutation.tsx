'use client'

import { useCallback, useState } from 'react'
import { useNotification } from 'common/hooks'

export interface ICreateAccountRequest {
  email: string
  username: string
  password: string
}

interface ICreateAccountRequestInit {
  onSuccess?: () => void
  onError?: () => void
}

export default function useCreateAccountMutation() {
  const { showErrorNotification } = useNotification()
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createAccount = useCallback(
    async (
      values: ICreateAccountRequest,
      { onSuccess, onError }: ICreateAccountRequestInit = {},
    ) => {
      try {
        setIsPending(true)
        const response = await fetch('/api/auth/create', {
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

        if (onSuccess) {
          onSuccess()
        }
      } catch (err) {
        console.error('useCreateAccountMutation ' + err)
        setError('Unknown error')
      } finally {
        setIsPending(false)
      }
    },
    [showErrorNotification],
  )

  return { createAccount, isPending, error }
}
