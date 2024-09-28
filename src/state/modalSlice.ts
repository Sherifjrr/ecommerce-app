import { ModalState } from './Types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ModalState = {
  isOpen: false,
  isMenuOpen: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true
    },
    closeModal: (state) => {
      state.isOpen = false
    },
    openMenu: (state) => {
      state.isMenuOpen = true
    },
    closeMenu: (state) => {
      state.isMenuOpen = false
    },
  },
})

export const { openModal, closeModal, openMenu, closeMenu } = modalSlice.actions
export const modalReducer = modalSlice.reducer
