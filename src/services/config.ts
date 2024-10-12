import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  useStore as useReduxStore,
} from 'react-redux'

import { AppDispatch, AppStore, RootState } from './store'

export const useDispatch = useReduxDispatch.withTypes<AppDispatch>()
export const useSelector = useReduxSelector.withTypes<RootState>()
export const useStore = useReduxStore.withTypes<AppStore>()
