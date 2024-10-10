import { cookies } from 'next/headers'
import api from 'services/fetch'

export const getUserSessionData = async () => {
  const token = cookies().get('auth')?.value
  const uid = cookies().get('uid')?.value

  return await api.get(
    '/api/users/session' +
      (token && uid ? '?' : '') +
      new URLSearchParams({ ...(token && { auth: token }), ...(uid && { uid }) }),
  )
}
