import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { productPropsTypes } from './Types'

export interface RootState {
  filterReducer: {
    filters: {
      price: [number, number]
    }
    items: productPropsTypes['product'][]
  }
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    items: [] as productPropsTypes['product'][],
    filters: {
      price: [0, 2000],
    },
  },
  reducers: {
    setProducts: (
      state,
      action: PayloadAction<productPropsTypes['product'][]>
    ) => {
      state.items = action.payload
    },
    setPriceFilter: (
      state,
      action: PayloadAction<{ price: [number, number] }>
    ) => {
      state.filters = { ...state.filters, ...action.payload }
    },
  },
})

export const { setProducts, setPriceFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer
