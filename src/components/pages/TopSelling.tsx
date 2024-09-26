import { LuLoader2 } from 'react-icons/lu'
import ProductCard from '../elements/ProductCard'
import ProductSkeleton from '../elements/ProductSkeleton'
import { productPropsTypes } from '../../state/Types'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

function TopSelling() {
  const [productNum, setProductNum] = useState(4)
  const getLaptops = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/category/laptops?limit=${productNum}`
    )
    return response.json()
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ['laptops', productNum],
    queryFn: getLaptops,
  })
  const allProducts = data

  if (error)
    return (
      <div className="text-center font-bold text-red-600">
        Error loading products
      </div>
    )
  return (
    <section className="flex flex-col items-center">
      <h1 className="mb-5 mt-16 text-center text-4xl font-extrabold">
        TOP SELLING
      </h1>
      <div className="my-5 flex flex-wrap justify-center">
        {isLoading
          ? Array(4)
              .fill(0)
              .map((_, index) => <ProductSkeleton key={index} />)
          : allProducts?.products.map(
              (product: productPropsTypes['product']) => (
                <ProductCard product={product} key={product.id} />
              )
            )}
      </div>
      <button
        onClick={() => setProductNum(productNum + 4)}
        type="button"
        className="center my-5 flex w-56 justify-center rounded-3xl border-2 border-gray-200 px-14 py-3 text-black"
      >
        {isLoading ? <LuLoader2 /> : `View More`}
      </button>
    </section>
  )
}

export default TopSelling
