import { RequestInit } from 'next/dist/server/web/spec-extension/request'
import { notifications } from '@mantine/notifications'

export class FetchAPI {
  private readonly _baseAPIUrl: string

  constructor() {
    this._baseAPIUrl = process.env['BASE_API_URL'] || ''
  }

  get baseAPIUrl(): string {
    return this._baseAPIUrl
  }

  async handleError(response: Response) {
    if (!response.ok || [400, 402, 403].includes(response.status)) {
      const message = await response.text()
      throw new Error(message)
    }
  }

  catchError(err: unknown) {
    const error = err as Error
    notifications.show({
      color: 'red',
      message: error.message.replaceAll('"', ''),
      classNames: { root: 'rounded-none', icon: 'rounded-none' },
    })
    return Promise.reject(error)
  }

  async get(url: string, init?: RequestInit) {
    const controller = new AbortController()
    const response = await fetch(`${this.baseAPIUrl}/${url}`, {
      ...init,
      cache: 'no-store',
      signal: controller.signal,
    })
    const data = await response.json()

    return data
  }

  async post<T extends object>(url: string, body: T, init?: RequestInit) {
    try {
      const controller = new AbortController()
      const response = await fetch(`${this.baseAPIUrl}/${url}`, {
        ...init,
        method: 'POST',
        body: JSON.stringify(body),
        cache: 'no-store',
        signal: controller.signal,
      })

      await this.handleError(response)

      const data = await response.json()

      return data
    } catch (err: unknown) {
      return this.catchError(err)
    }
  }
}

const api = new FetchAPI()

export default api
