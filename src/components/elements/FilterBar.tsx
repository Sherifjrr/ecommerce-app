import 'rc-slider/assets/index.css'

import { RootState, setPriceFilter } from '../../state/filterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { CiSquareChevUp } from 'react-icons/ci'
import Slider from 'rc-slider'

function FilterBar() {
  const [value, setValue] = useState<[number, number]>([0, 2000])
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
  const allProducts = useSelector(
    (state: RootState) => state.filterReducer.items
  )
  const dispatch = useDispatch()

  useEffect(() => {
    const resetValue: [number, number] = [0, 2000]
    setValue(resetValue)
    dispatch(setPriceFilter({ price: resetValue }))
  }, [allProducts, dispatch])

  const handleApply = () => {
    dispatch(setPriceFilter({ price: value }))
    setIsFilterOpen(false)
  }

  return (
    <div
      className={`fixed -bottom-60 left-0 z-20 mx-14 my-6 w-3/4 rounded-3xl border-2 border-gray-200 bg-white p-5 md:ml-24 lg:z-0 lg:mx-4 ${isFilterOpen ? `bottom-0` : `-bottom-60`} h-fit lg:static lg:w-1/4 xl:mx-12 xl:w-1/6`}
    >
      <div className="flex justify-between border-b-2 border-gray-200 pb-4 text-xl font-bold">
        <h3>Filters</h3>
        <CiSquareChevUp
          className="text-3xl lg:hidden"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Price</h3>
        <Slider
          className="mt-4"
          range
          min={0}
          max={2000}
          handleStyle={{ borderColor: 'black', backgroundColor: 'black' }}
          railStyle={{ backgroundColor: 'rgb(229 231 235)' }}
          trackStyle={{ backgroundColor: 'black' }}
          defaultValue={value}
          onChange={(newValue) => setValue(newValue as [number, number])}
        />
        <div className="mt-1 flex justify-between">
          <h3 className="text-xl font-bold">${value[0]}</h3>

          <h3 className="text-xl font-bold">${value[1]}</h3>
        </div>
        <button
          type="submit"
          className="mx-6 my-5 rounded-3xl bg-black px-16 py-3 text-white"
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </div>
  )
}

export default FilterBar
