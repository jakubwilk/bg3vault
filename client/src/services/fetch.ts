import { RequestInit } from 'next/dist/server/web/spec-extension/request'
import { omit } from 'lodash'
// import { notifications } from '@mantine/notifications'

export interface IRequestInit extends RequestInit {
  isSelf?: boolean
}

export class FetchAPI {
  private readonly _baseAPIUrl: string
  private readonly _baseSelfAPIUrl: string
  private readonly _requestOptions: RequestInit

  constructor() {
    const controller = new AbortController()

    this._baseAPIUrl = process.env['NEXT_PUBLIC_BASE_API_URL'] || ''
    this._baseSelfAPIUrl = process.env['NEXT_PUBLIC_BASE_SELF_API_URL'] || ''
    this._requestOptions = {
      cache: 'no-store',
      signal: controller.signal,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  }

  get baseAPIUrl(): string {
    return this._baseAPIUrl
  }

  get baseSelfAPIUrl(): string {
    return this._baseSelfAPIUrl
  }

  get requestOptions(): RequestInit {
    return this._requestOptions
  }

  async handleError(response: Response) {
    if (!response.ok || [400, 402, 403].includes(response.status)) {
      const message = await response.text()
      throw new Error(message)
    }
  }

  catchError(err: unknown) {
    const error = err as Error
    // notifications.show({
    //   color: 'red',
    //   message: error.message.replaceAll('"', ''),
    //   classNames: { root: 'rounded-none', icon: 'rounded-none' },
    // })
    return Promise.reject(error)
  }

  async get(url: string, init?: IRequestInit) {
    const isSelf = init?.isSelf
    const base = isSelf ? this.baseSelfAPIUrl : this.baseAPIUrl
    const options = omit(init, 'isSelf')

    const response = await fetch(base + url, {
      ...options,
      ...this.requestOptions,
    })

    const data = await response.json()

    return data
  }

  async post<T extends object>(url: string, body: T, init?: IRequestInit) {
    try {
      const isSelf = init?.isSelf
      const base = isSelf ? this.baseSelfAPIUrl : this.baseAPIUrl
      const options = omit(init, 'isSelf')

      const response = await fetch(base + url, {
        ...options,
        method: 'POST',
        body: JSON.stringify(body),
        ...this.requestOptions,
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
