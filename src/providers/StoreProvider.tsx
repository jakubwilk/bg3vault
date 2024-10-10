'use client'

import { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'
import store, { AppStore } from 'services/store'

interface IProps {
  children: ReactNode
}

export default function StoreProvider({ children }: IProps) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = store()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
