import { ApiDbScopeEnum } from 'features/common/models'

import dataLoader from './dataLoader'

type TApiDbScope = keyof ApiDbScopeEnum
type TApiDbData<T> = T & { id: number }

// Params: page, size, name, id, props {}
export default class BaseDriver<T extends []> {
  private _scope: TApiDbScope
  private _data: TApiDbData<T>[]
  private _isInitialized: boolean

  constructor(scope: TApiDbScope) {
    this._scope = scope
    this._isInitialized = false
    this._data = []
  }

  async init() {
    this._data = await dataLoader(this._scope)
    this._isInitialized = true
    return this
  }

  findById(id: number) {
    if (!id) {
      throw new Error('')
    }

    if (!this._isInitialized) {
      throw new Error('')
    }

    this._data = this._data.find((item) => item.id === id) as T

    return this
  }
}
