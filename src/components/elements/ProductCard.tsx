import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../state/cartSlice'
import { StarRating } from './StarRating'
import { Link } from 'react-router-dom'
import { productPropsTypes } from '../../state/Types'
import { RootState } from '../../state/store'
import { toast } from 'react-toastify'

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

const notifyCart = () => {
  toast.success('Added Successfully'),
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

function ProductCard({ product }: productPropsTypes) {
  const isLogged = useSelector(
    (state: RootState) => state.authReducer.accessToken
  )

  const dispatch = useDispatch()

  const cartAddition = (product: productPropsTypes['product']) => {
    if (!isLogged) {
      promptToLogin()
    } else {
      dispatch(addToCart(product))
      notifyCart()
    }
  }

  const beforePrice = (product.price * 100) / (100 - product.discountPercentage)
  return (
    <div className="m-6 w-80 rounded-2xl p-1">
      <Link to={`/product/${product.category}/${product.id}`} state={product}>
        <div className="mb-2 w-full cursor-pointer">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-2xl bg-gray-200 transition-colors duration-300 hover:bg-gray-300"
          />
        </div>
      </Link>
      <div className="p-3">
        <div className="mb-14 flex h-28 flex-col gap-y-4">
          <h1 className="my-1 text-wrap text-xl font-bold">{product.title}</h1>
          <StarRating rating={product.rating} />
          <div className="flex items-center gap-x-4">
            <h1 className="my-1 text-xl font-bold">${product.price}</h1>
            <h1 className="text-xl font-bold text-gray-400 line-through">
              ${beforePrice.toFixed(2)}
            </h1>
            <h1 className="rounded-3xl bg-red-200 px-3 py-2 text-sm font-medium text-red-600">
              -{product.discountPercentage}%
            </h1>
          </div>
        </div>
        <div className="h-30 flex justify-center">
          <button
            onClick={() => cartAddition(product)}
            title="Add To Cart"
            type="button"
            className={`my-5 rounded-3xl bg-black px-6 py-3 text-white`}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
