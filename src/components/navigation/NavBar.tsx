import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartReducer } from '../../state/cartSlice'
import { openModal, closeModal } from '../../state/modalSlice'
import { productPropsTypes } from '../../state/Types'
import NavLink from './NavLink'
import { useState } from 'react'
import NavHead from './NavHead'
import { CgShoppingCart, CgProfile } from 'react-icons/cg'
import { RootState } from '../../state/store'
import SearchBar from '../elements/SearchBar'
import LoginModal from '../elements/LoginModal'

function NavBar() {
  const [toggleNav, setToggleNav] = useState<boolean>(false)
  const cartItems = useSelector((state: cartReducer) => state.cartReducer.cart)
  const modalState = useSelector(
    (state: RootState) => state.modalReducer.isOpen
  )
  const dispatch = useDispatch()
  const handleModal = () => {
    modalState ? dispatch(closeModal()) : dispatch(openModal())
  }

  const countedTotal = cartItems.reduce(
    (total, item: productPropsTypes['product']) => total + item.quantity,
    0
  )

  return (
    <nav
      aria-label="Main Navigation"
      className="flex w-full flex-row items-center justify-between border-b-2 border-gray-200 p-4 lg:justify-around"
    >
      <LoginModal />
      <div
        className="space-y-2 lg:hidden"
        onClick={() => setToggleNav(!toggleNav)}
      >
        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
      </div>
      {toggleNav && <NavHead setToggleNav={setToggleNav} />}
      <Link className="ml-4 mr-auto text-3xl font-extrabold lg:m-2" to={'/'}>
        SHOP.CO
      </Link>
      <div className="m-2 hidden flex-row lg:flex">
        <ul className="flex">
          <NavLink url={'/shop'} label={'Shop Now'} />
          <NavLink url={'/category/laptops'} label={'Laptops'} />
          <NavLink url={'/category/smartphones'} label={'Phone'} />
          <NavLink url={'/category/mobile-accessories'} label={'Accessories'} />
        </ul>
      </div>
      <SearchBar />
      <div className="flex">
        <Link to={'/cart'} className="ml-2">
          <div
            className={`absolute -mt-4 ms-2 h-6 w-6 rounded-full bg-black text-center font-semibold text-white transition-opacity duration-300 ease-in-out ${countedTotal ? 'opacity-100' : 'opacity-0'}`}
          >
            {countedTotal}
          </div>
          <CgShoppingCart className="block text-3xl" />
        </Link>
        <button onClick={() => handleModal()} className="ml-2">
          <CgProfile className="text-3xl" />
        </button>
      </div>
    </nav>
  )
}

export default NavBar
