import { createSlice } from '@reduxjs/toolkit'

interface ILanguageState {
  locale: string
}

const initialState: ILanguageState = {
  locale: 'en',
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLocale: (state, action) => {
      document.cookie = `locale=${action.payload}; path=/`
      state.locale = action.payload
    },
  },
})

export const { setLocale } = languageSlice.actions

export default languageSlice
