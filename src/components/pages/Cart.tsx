import { IoIosRemove, IoMdAdd } from 'react-icons/io'
import { RiCoupon4Line, RiDeleteBinFill } from 'react-icons/ri'
import {
  addToCart,
  cartReducer,
  removeAllProduct,
  removeFromCart,
} from '../../state/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

import BreadcrumbNav from '../elements/BreadcrumbNav'
import { FaArrowRight } from 'react-icons/fa'
import Footer from './Footer'
import NavBar from '../navigation/NavBar'
import { productPropsTypes } from '../../state/Types'

function Cart() {
  const cartProducts = useSelector(
    (state: cartReducer) => state.cartReducer.cart
  )
  const dispatch = useDispatch()

  const cartAddition = (product: productPropsTypes['product']) => {
    dispatch(addToCart(product))
  }
  const cartRemoval = (product: productPropsTypes['product']) => {
    dispatch(removeFromCart(product))
  }
  const cartRemovalAll = (product: productPropsTypes['product']) => {
    dispatch(removeAllProduct(product))
  }
  const countedTotal =
    cartProducts.reduce(
      (total, item: productPropsTypes['product']) =>
        total + item.price * item.quantity,
      0
    ) + 20
  const discountTotal = cartProducts.reduce(
    (total, item: productPropsTypes['product']) =>
      total +
      (item.price / (1 - item.discountPercentage / 100) - item.price) *
        item.quantity,
    0
  )

  return (
    <>
      <NavBar />
      <BreadcrumbNav />
      <section className="mb-28 flex">
        <div className="w-full px-2 py-10 md:p-10 lg:px-8 xl:p-20">
          <h1 className="mb-5 text-4xl font-extrabold"> YOUR CART : </h1>
          {cartProducts.length ? (
            <div className="md: flex flex-wrap justify-between md:justify-center lg:justify-between">
              <div className="flex h-fit w-full flex-col flex-wrap justify-between rounded-2xl border border-gray-200 p-2 md:p-6 lg:w-custom-2 xl:w-3/5">
                {cartProducts.map((product: productPropsTypes['product']) => (
                  <div
                    key={product.id}
                    className="mt-2 flex border-b-2 border-gray-100 last:border-b-0"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="m-2 h-36 w-36 cursor-pointer rounded-2xl bg-gray-100 md:h-40 md:w-40"
                    />
                    <div className="flex w-full justify-between">
                      <div className="p-2 md:p-4">
                        <h2 className="font-bold md:text-lg">
                          {product.title}
                        </h2>
                        <h3 className="font-light">Brand : {product.brand}</h3>
                        <h2 className="mt-6 text-xl font-bold md:mt-12">
                          ${product.price}
                        </h2>
                      </div>
                      <div className="flex flex-col items-end justify-between p-2">
                        <button
                          onClick={() => cartRemovalAll(product)}
                          title="Remove"
                          type="button"
                        >
                          <RiDeleteBinFill className="text-2xl text-red-500" />
                        </button>
                        <div className="my-5 flex items-center rounded-3xl bg-gray-200">
                          <button
                            onClick={() => cartRemoval(product)}
                            title="Remove"
                            type="button"
                            className="rounded-3xl bg-gray-200 px-2 md:px-4 md:py-3"
                          >
                            <IoIosRemove />
                          </button>
                          <h1 className="mx-2 text-lg">
                            {product.quantity || 0}
                          </h1>
                          <button
                            onClick={() => cartAddition(product)}
                            title="Remove"
                            type="button"
                            className="rounded-3xl bg-gray-200 px-2 py-3 md:px-4"
                          >
                            <IoMdAdd />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex h-fit w-full flex-col rounded-2xl border border-gray-200 px-3 py-8 text-lg md:w-3/4 md:px-6 lg:mt-0 lg:w-custom-5 lg:px-4 xl:w-1/3 xl:px-5">
                <h2 className="mb-2 font-bold">Order Summary</h2>
                <div className="my-2 flex justify-between">
                  <h3 className="text-gray-400">Subtotal</h3>
                  <h3 className="font-bold">${countedTotal.toFixed(2)}</h3>
                </div>
                <div className="my-2 flex justify-between">
                  <h3 className="text-gray-400">Discount </h3>
                  <h3 className="font-bold text-red-500">
                    {' '}
                    -${discountTotal.toFixed(2)}
                  </h3>
                </div>
                <div className="my-2 flex justify-between border-b-2 border-gray-200 pb-2">
                  <h3 className="text-gray-400">Delivery Fee</h3>
                  <h3 className="font-bold">$20</h3>
                </div>
                <div className="my-4 flex justify-between">
                  <h3 className="">Total</h3>
                  <h3 className="font-bold">${countedTotal.toFixed(2)}</h3>
                </div>
                <div className="flex h-fit flex-col items-center md:px-3 lg:px-0">
                  <form
                    action=""
                    className="flex w-full justify-between xl:justify-evenly"
                  >
                    <div>
                      <RiCoupon4Line className="absolute ms-4 mt-3.5 text-2xl text-gray-400" />
                      <input
                        type="text"
                        placeholder="Add Promo Code"
                        className="block rounded-3xl bg-gray-200 p-2.5 px-6 py-3 ps-10 lg:ms-1.5 lg:px-9"
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={(e) => e.preventDefault()}
                      className="rounded-3xl bg-black px-8 py-3 text-white lg:px-6"
                    >
                      {' '}
                      Apply
                    </button>
                  </form>
                  <button className="mt-4 flex items-center rounded-3xl bg-black px-28 py-3.5 text-white md:px-36 lg:px-28">
                    Go to Checkout <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <h1 className="h-screen justify-center text-4xl font-bold">
              Your Cart is Empty
            </h1>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Cart
