import { Link } from 'react-router-dom'
import { CgSearch } from 'react-icons/cg'
import { useMemo, useState, useEffect, useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { productPropsTypes } from '../../state/Types'
import { BiLoader } from 'react-icons/bi'
import { MdCancel } from 'react-icons/md'

function SearchBar() {
  const [search, setSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { data, isLoading, error } = useQuery({
    queryKey: ['search', search],
    queryFn: async () => {
      if (search.trim() === '') return null
      if (error) throw new Error('something went wrong')
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      )
      const data = await res.json()
      return data
    },
    enabled: search.trim().length > 0,
  })

  const filteredData = useMemo(() => {
    if (!data || !data.products) return []
    return data.products.filter(
      (product: productPropsTypes['product']) =>
        product.category === 'laptops' ||
        product.category === 'tablets' ||
        product.category === 'smartphones' ||
        product.category === 'mobile-accessories'
    )
  }, [data])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [searchRef])

  useEffect(() => {
    if (isModalOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isModalOpen])

  const renderResults = () => (
    <div className="absolute z-10 mt-2 w-full rounded-lg bg-white drop-shadow-lg">
      {filteredData.slice(0, 4).map((product: productPropsTypes['product']) => (
        <Link
          to={`/product/${product.category}/${product.id}`}
          key={product.id}
          state={product}
          className="flex items-center justify-between border-b p-4 transition-colors duration-300 hover:bg-slate-100"
        >
          {isLoading ? (
            <BiLoader className="text-2xl" />
          ) : (
            <>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-16 w-16 object-cover"
              />
              <h2 className="mx-2 flex-grow truncate text-sm font-medium md:text-base">
                {product.title}
              </h2>
              <h2 className="text-sm font-medium md:text-base">
                ${product.price}
              </h2>
            </>
          )}
        </Link>
      ))}
    </div>
  )

  return (
    <div className="relative" ref={searchRef}>
      <div className="hidden w-96 lg:block xl:w-custom-1">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-between ps-3 xl:w-full">
          <CgSearch className="text-xl text-gray-500" />
        </div>
        <input
          type="search"
          placeholder="Search for Products"
          id="search"
          className="block w-full rounded-3xl border border-gray-300 bg-gray-200 p-2.5 ps-10 text-sm text-gray-900"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          onFocus={() => setIsOpen(true)}
        />
      </div>
      <div className="relative lg:hidden">
        <CgSearch className="text-3xl" onClick={() => setIsModalOpen(true)} />
      </div>
      {isOpen && filteredData.length > 0 && renderResults()}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 sm:hidden">
          <div className="flex h-full flex-col bg-transparent">
            <div className="flex items-center border-b border-gray-200 bg-white p-4">
              <input
                ref={inputRef}
                type="search"
                placeholder="Search for Products"
                className="flex-grow rounded-full border border-gray-300 bg-white py-2 pl-4 pr-3 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearch(e.target.value)
                }
                autoFocus
              />
              <button
                className="ml-2 text-gray-500 hover:text-gray-700"
                onClick={() => setIsModalOpen(false)}
              >
                <MdCancel className="text-3xl" />
              </button>
            </div>
            <div className="flex-grow overflow-auto">
              {filteredData.length > 0 && renderResults()}
            </div>
          </div>
        </div>
      )}
      {error && <div className="mt-2 text-red-500">Error: {error.message}</div>}
    </div>
  )
}

export default SearchBar
