import { configureStore } from '@reduxjs/toolkit'

import { cartReducer } from './cartSlice'
import { filterReducer } from './filterSlice'
import { authReducer } from './authSlice'
import { modalReducer } from './modalSlice'

export const store = configureStore({
  reducer: {
    cartReducer,
    filterReducer,
    authReducer,
    modalReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
