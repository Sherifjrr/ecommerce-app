import { useState } from 'react'
import { productPropsTypes } from '../../state/Types'
import ProductDetails from '../pages/ProductDetails'
import Rating from './Rating'

function Tabs({ product }: productPropsTypes) {
  const [active, setActive] = useState('rating')
  return (
    <>
      <div className="flex w-full px-12">
        <button
          className={`w-1/2 border-b-2 border-gray-100 transition-colors duration-500 ease-in-out ${active === 'details' ? 'border-gray-400 font-semibold' : ''}`}
          onClick={() => setActive('details')}
        >
          Product Details
        </button>
        <button
          className={`w-1/2 border-b-2 border-gray-100 py-4 transition-colors duration-500 ease-in-out ${active === 'rating' ? 'border-gray-400 font-semibold' : ''}`}
          onClick={() => setActive('rating')}
        >
          Rating & Reviews
        </button>
      </div>
      {active === 'rating' ? (
        <Rating product={product} />
      ) : (
        <ProductDetails product={product} />
      )}
    </>
  )
}

export default Tabs
