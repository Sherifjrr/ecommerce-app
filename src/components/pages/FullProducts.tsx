import { Navigate, useParams } from 'react-router-dom'
import { RootState, setProducts } from '../../state/filterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import BreadcrumbNav from '../elements/BreadcrumbNav'
import FilterBar from '../elements/FilterBar'
import Footer from './Footer'
import NavBar from '../navigation/NavBar'
import ProductCard from '../elements/ProductCard'
import ProductSkeleton from '../elements/ProductSkeleton'
import { productPropsTypes } from '../../state/Types'
import { useQuery } from '@tanstack/react-query'

interface ProductsResponse {
  products: productPropsTypes['product'][]
}

const categories = ['smartphones', 'laptops', 'tablets', 'mobile-accessories']

function FullProducts() {
  const [currentPage, setCurrentPage] = useState(1)

  const { category } = useParams<{ category: string }>()

  const { data, error, isLoading } = useQuery<ProductsResponse>({
    queryKey: [category],
    queryFn: async () => {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
      )
      return response.json()
    },
  })

  const allProducts = useSelector<RootState, productPropsTypes['product'][]>(
    (state) => state.filterReducer.items
  )
  const priceFilter = useSelector<RootState, [number, number]>(
    (state) => state.filterReducer.filters.price
  )

  const filteredProducts = allProducts.filter(
    (product) =>
      product.price >= priceFilter[0] && product.price <= priceFilter[1]
  )
  const dispatch = useDispatch()
  useEffect(() => {
    if (data?.products) {
      dispatch(setProducts(data.products))
    }
  }, [data, dispatch])
  if (!category || !categories.includes(category)) {
    return <Navigate to="*" />
  }

  const itemPerPage = 6
  const totalPages = Math.ceil(filteredProducts?.length / itemPerPage)
  const startIndex = (currentPage - 1) * itemPerPage
  const endIndex = startIndex + itemPerPage
  const currentProduct = filteredProducts?.slice(startIndex, endIndex)

  if (error)
    return (
      <div className="text-center font-bold text-red-600">
        Error loading products
      </div>
    )

  return (
    <>
      <NavBar />
      <BreadcrumbNav />
      <div className="flex justify-center lg:justify-between">
        <FilterBar />
        <section className="flex h-fit w-10/12 flex-wrap items-center justify-center">
          {isLoading ? (
            Array(6)
              .fill(0)
              .map((_, index) => <ProductSkeleton key={index} />)
          ) : currentProduct.length > 0 ? (
            currentProduct
              .slice(0, 6)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          ) : (
            <h1 className="mt-16 h-screen justify-center text-4xl font-bold">
              No Products were founded
            </h1>
          )}
        </section>
      </div>
      <div className="flex justify-center gap-x-2">
        {filteredProducts.length > 0 &&
          Array(totalPages)
            .fill(0)
            .map((_, index) => (
              <button
                className="my-5 rounded-xl bg-black px-5 py-2 text-white"
                key={index}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
      </div>
      <Footer />
    </>
  )
}

export default FullProducts
