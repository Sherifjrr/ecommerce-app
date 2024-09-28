import { RootState, setProducts } from '../../state/filterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo, useState } from 'react'

import BreadcrumbNav from '../elements/BreadcrumbNav'
import FilterBar from '../elements/FilterBar'
import Footer from './Footer'
import NavBar from '../navigation/NavBar'
import ProductCard from '../elements/ProductCard'
import ProductSkeleton from '../elements/ProductSkeleton'
import { productPropsTypes } from '../../state/Types'
import { useQuery } from '@tanstack/react-query'

const getAllCategories = async (): Promise<productPropsTypes['product'][]> => {
  const [phone, tablets, laptops, accessories] = await Promise.all([
    fetch('https://dummyjson.com/products/category/smartphones').then((res) =>
      res.json()
    ),
    fetch('https://dummyjson.com/products/category/tablets').then((res) =>
      res.json()
    ),
    fetch('https://dummyjson.com/products/category/laptops').then((res) =>
      res.json()
    ),
    fetch('https://dummyjson.com/products/category/mobile-accessories').then(
      (res) => res.json()
    ),
  ])
  return [
    phone.products,
    tablets.products,
    laptops.products,
    accessories.products,
  ]
}

function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['allCategories'],
    queryFn: getAllCategories,
  })

  const allData = useMemo<productPropsTypes['product'][]>(
    () => (data ? data.flat() : []),
    [data]
  )

  const priceFilter = useSelector<RootState, [number, number]>(
    (state) => state.filterReducer.filters.price
  )
  const filteredProducts = allData.filter(
    (product) =>
      product.price >= priceFilter[0] && product.price <= priceFilter[1]
  )

  useEffect(() => {
    if (allData) {
      dispatch(setProducts(allData))
    }
  }, [allData, dispatch])

  const itemPerPage = 6
  const totalPages = Math.ceil(filteredProducts?.length / itemPerPage)
  const startIndex = (currentPage - 1) * itemPerPage
  const endIndex = startIndex + itemPerPage
  const currentProduct = filteredProducts?.slice(startIndex, endIndex)

  if (isError)
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
        <section className="flex w-10/12 flex-wrap items-center justify-center">
          {isLoading
            ? Array(6)
                .fill(0)
                .map((_, index) => <ProductSkeleton key={index} />)
            : currentProduct?.map((product: productPropsTypes['product']) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </section>
      </div>
      <div className="flex flex-wrap justify-center gap-x-2 py-4">
        {filteredProducts.length > 0 &&
          Array(totalPages)
            .fill(0)
            .map((_, index) => (
              <button
                className="my-2 rounded-xl bg-black px-5 py-2 text-white"
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

export default ShopPage
