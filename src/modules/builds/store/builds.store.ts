import { createSlice } from '@reduxjs/toolkit'
import { IBuildsReducer } from 'builds/models'

const initialState: IBuildsReducer = {
  hasTopRatedBuilds: false,
}

const buildsSlice = createSlice({
  name: 'builds',
  initialState,
  reducers: {
    setHasTopRatedBuilds: (state, action) => {
      state.hasTopRatedBuilds = action.payload
    },
  },
})

export const { setHasTopRatedBuilds } = buildsSlice.actions

export default buildsSlice
