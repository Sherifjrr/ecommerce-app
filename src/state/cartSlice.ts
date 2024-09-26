import { createSlice } from '@reduxjs/toolkit'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity?: number
}

export interface CartState {
  cart: CartItem[]
}

export interface cartReducer {
  cartReducer: { cart: [] }
}
const initialState: CartState = { cart: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemsInCart = state.cart.find(
        (item) => item.id === action.payload.id
      )
      if (itemsInCart) {
        if (itemsInCart.quantity) {
          itemsInCart.quantity++
        }
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        })
      }
    },
    removeFromCart: (state, action) => {
      const findItem = state.cart.find((item) => item.id === action.payload.id)
      if (findItem) {
        if (findItem.quantity && findItem.quantity > 1) {
          findItem.quantity--
        } else {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
          )
        }
      }
    },
    removeAllProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    },
  },
})
export const { addToCart, removeFromCart, removeAllProduct } = cartSlice.actions
export const cartReducer = cartSlice.reducer
