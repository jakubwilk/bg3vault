'use client'

import { useCallback, useMemo } from 'react'
import { notifications } from '@mantine/notifications'

export default function useNotification() {
  const notificationStyles = useMemo(() => ({ root: 'rounded-none', icon: 'rounded-none' }), [])

  const showSuccessNotification = useCallback(
    (message: string) => {
      return notifications.show({
        color: 'green',
        message,
        withCloseButton: false,
        classNames: notificationStyles,
      })
    },
    [notificationStyles],
  )

  const showErrorNotification = useCallback(
    (message: string) => {
      return notifications.show({
        color: 'red',
        message,
        withCloseButton: false,
        classNames: notificationStyles,
      })
    },
    [notificationStyles],
  )

  const showWarningNotification = useCallback(
    (message: string) => {
      return notifications.show({
        color: 'yellow',
        message,
        withCloseButton: false,
        classNames: notificationStyles,
      })
    },
    [notificationStyles],
  )

  return { showSuccessNotification, showWarningNotification, showErrorNotification }
}
