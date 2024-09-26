import { CartItem, addToCart, removeFromCart } from '../../state/cartSlice'
import { IoIosRemove, IoMdAdd } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'

import BreadcrumbNav from '../elements/BreadcrumbNav'
import Footer from './Footer'
import NavBar from '../navigation/NavBar'
import { RootState } from '../../state/store'
import { StarRating } from '../elements/StarRating'
import Tabs from '../elements/Tabs'
import { productPropsTypes } from '../../state/Types'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const promptToLogin = () => {
  toast.info(' Please log in to add items to your cart! 🛒', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}

const notifyCart = (type: string) => {
  toast.success(`${type} Successfully`),
    {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
}

function ProductPage() {
  const dispatch = useDispatch()
  const location = useLocation()
  const product = location.state as productPropsTypes['product']
  const isLogged = useSelector(
    (state: RootState) => state.authReducer.accessToken
  )
  const productState = useSelector<RootState, CartItem[]>(
    (state) => state.cartReducer.cart
  )
  const filterProduct = productState.filter((pro) => pro.id === product.id)

  const cartAddition = (product: productPropsTypes['product']) => {
    if (!isLogged) {
      promptToLogin()
    } else {
      dispatch(addToCart(product))
      notifyCart('Added')
    }
  }

  const cartRemoval = (product: productPropsTypes['product']) => {
    if (!isLogged) {
      promptToLogin()
    } else {
      dispatch(removeFromCart(product))
      notifyCart('Removed')
    }
  }
  const beforePrice = (product.price * 100) / (100 - product.discountPercentage)

  const [image, setImage] = useState(0)

  return (
    <>
      <NavBar />
      <BreadcrumbNav />
      <section className="flex flex-wrap p-5 lg:p-8">
        <div className="flex w-full flex-wrap-reverse justify-center p-1 md:p-5 lg:w-1/2 lg:flex-nowrap lg:justify-around">
          <div className="flex w-full justify-center lg:w-1/4 lg:flex-col">
            {product.images.map((img, index) => (
              <img
                src={img}
                alt=""
                key={index}
                className="m-2 w-28 cursor-pointer rounded-2xl bg-gray-100 focus:bg-gray-300 active:bg-gray-300 md:w-44 lg:w-full"
                onClick={() => setImage(index)}
              />
            ))}
          </div>
          <div className="flex w-full items-center md:w-custom-3">
            <img
              src={product.images[image]}
              alt=""
              className="rounded-2xl bg-gray-200"
            />
          </div>
        </div>
        <div className="flex w-full flex-col justify-around p-1 lg:w-1/2">
          <h1 className="mb-4 text-3xl font-extrabold">{product.title}</h1>
          <StarRating rating={product.rating} />
          <div className="flex items-center gap-x-5">
            <h1 className="my-4 text-2xl font-bold text-gray-500">
              {product.price}$
            </h1>
            <h1 className="text-xl font-bold text-gray-400 line-through">
              ${beforePrice.toFixed(2)}
            </h1>
            <h1 className="rounded-3xl bg-red-200 px-3 py-2 text-sm font-medium text-red-600">
              -{product.discountPercentage}%
            </h1>
          </div>
          <h2 className="my-4 text-xl font-semibold">
            Brand : {product.brand}
          </h2>
          <p className="text-lg">{product.description}</p>
          <div className="mt-20 w-full p-0 md:p-3 lg:mt-10">
            <div className="flex flex-wrap justify-between md:justify-around">
              <button
                onClick={() => cartAddition(product)}
                title="Add To Cart"
                type="button"
                className="my-5 rounded-3xl bg-black px-16 py-3 text-white md:px-36 md:py-4 lg:px-28 xl:px-32"
              >
                Add To Cart
              </button>
              <div className="my-5 flex items-center rounded-3xl bg-gray-200">
                <button
                  onClick={() => cartRemoval(product)}
                  title="Remove"
                  type="button"
                  className="rounded-3xl bg-gray-200 px-5 py-3 md:px-10"
                >
                  <IoIosRemove />
                </button>
                <h1 className="mx-2 text-xl">
                  {filterProduct.length > 0 ? filterProduct[0].quantity : 0}
                </h1>
                <button
                  onClick={() => cartAddition(product)}
                  title="Remove"
                  type="button"
                  className="lg-px-6 rounded-3xl bg-gray-200 px-5 py-3 md:px-10"
                >
                  <IoMdAdd />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Tabs product={product} />
      <Footer />
    </>
  )
}

export default ProductPage
