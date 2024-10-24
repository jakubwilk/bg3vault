import { createSlice } from '@reduxjs/toolkit'
import { IAuthReducer } from 'auth/models'

const initialState: IAuthReducer = {
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    assignAuth: (state, action) => {
      state.user = action.payload
    },
    removeAuth: (state) => {
      state.user = null
    },
  },
})

export const { assignAuth, removeAuth } = authSlice.actions

export default authSlice
