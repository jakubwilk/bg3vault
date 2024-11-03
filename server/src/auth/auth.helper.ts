import { v4 as uuidv4, v6 as uuidv6 } from 'uuid'

export function generateUUID(version: number = 4) {
  if (version === 4) {
    return uuidv4()
  }

  return uuidv6()
}

export function createExpireTimeForCookie(days: number): Date {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)

  return date
}
