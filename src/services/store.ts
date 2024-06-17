import { configureStore } from '@reduxjs/toolkit'

const rootReducer = {
  root: {} as any,
}

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default store
