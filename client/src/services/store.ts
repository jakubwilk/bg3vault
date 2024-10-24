import { configureStore } from '@reduxjs/toolkit'
import { auth } from 'auth/store'

export const store = () => {
  return configureStore({
    reducer: {
      auth: auth.reducer,
    },
  })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default store
