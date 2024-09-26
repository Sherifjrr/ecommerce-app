import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from './Types'

const initialState: AuthState = {
  accessToken: localStorage.getItem('token'),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<{ accessToken: string }>) => {
      const { accessToken } = action.payload

      state.accessToken = accessToken
    },
    logOut: (state) => {
      state.accessToken = null
      localStorage.removeItem('token')
    },
  },
})

export const { logIn, logOut } = authSlice.actions
export const authReducer = authSlice.reducer
