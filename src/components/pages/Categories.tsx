import { Link } from 'react-router-dom'
import accessoriesImg from '../../assets/Frame 104.png'
import laptopsImg from '../../assets/Frame 108.png'
import phonesImg from '../../assets/Frame 106.png'
import tabletsImg from '../../assets/Frame 107.png'

function Categories() {
  return (
    <section className="flex justify-center">
<<<<<<< HEAD
      <div className="mx-5 my-10 mb-36 h-full w-96 rounded-3xl bg-gray-100 p-5 md:mb-28 md:w-fit lg:mx-10 lg:w-5/6 lg:px-10">
        <h1 className="mb-10 mt-5 text-center text-4xl font-extrabold lg:mt-16">
=======
      <div className="mx-10 my-10 mb-36 h-full w-96 rounded-3xl bg-gray-100 px-10 py-5 md:mb-28 md:w-fit lg:w-5/6">
        <h1 className="mb-10 mt-16 text-center text-4xl font-extrabold">
>>>>>>> 0e700c8ba1712764d71409b6432f2a4b760f1ed1
          BROWSE BY CATEGORIES
        </h1>
        <div className="flex w-full flex-wrap justify-around">
          <div className="mt-5 flex w-full justify-center rounded-3xl xl:w-5/12">
            <Link to="/category/laptops">
              <img src={laptopsImg} alt="" className="" />
            </Link>
          </div>
          <div className="mt-5 flex w-full justify-center rounded-3xl xl:w-5/12">
            <Link to="/category/smartphones">
              <img src={phonesImg} alt="" className="" />
            </Link>
          </div>
          <div className="mt-5 flex w-full justify-center rounded-3xl xl:w-5/12">
            <Link to="/category/tablets">
              <img src={tabletsImg} alt="" className="" />
            </Link>
          </div>
          <div className="lg: mt-5 flex w-full justify-center rounded-3xl xl:w-5/12">
            <Link to="/category/mobile-accessories">
              <img src={accessoriesImg} alt="" className="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
