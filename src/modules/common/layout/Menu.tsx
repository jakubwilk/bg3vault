'use client'

import { useAppSelector } from 'services/config'
import { GuestMenu, UserMenu } from 'users/components'

export default function Menu() {
  const { user } = useAppSelector((state) => state.auth)

  return user ? <UserMenu /> : <GuestMenu />
}
