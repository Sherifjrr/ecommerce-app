import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import {
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaGooglePay,
} from 'react-icons/fa6'

import { FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { format } from 'date-fns'

function Footer() {
  const currentYear = format(new Date(), 'yyyy')
  return (
    <footer className="mt-32 bg-gray-100 px-10 pb-16 pt-20 lg:px-16 xl:px-28">
      <div className="relative z-10 -mt-52 flex flex-wrap items-center justify-center rounded-2xl bg-black px-5 py-6 text-white md:-mt-44 md:px-16 md:py-10 xl:justify-between">
        <h1 className="mb-5 w-full text-center text-4xl font-extrabold md:mb-0 xl:w-fit">
          STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
        </h1>
        <form className="mt-4 flex flex-col xl:mt-0">
          <div className="relative">
            <MdEmail className="pointer-events-none absolute inset-y-0 start-0 ms-6 mt-2 text-3xl text-gray-300" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="mb-3 block rounded-3xl px-16 py-3 text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="rounded-3xl bg-white px-6 py-3 font-semibold text-black"
            onClick={(e) => e.preventDefault()}
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
      <div className="mt-5 flex flex-wrap justify-between border-b-2 border-gray-300 pb-14">
        <div className="mb-6 mt-5 flex w-full flex-col md:mb-0 lg:w-fit">
          <h1 className="text-4xl font-extrabold lg:text-3xl">SHOP.CO</h1>
          <p className="my-5 text-lg text-gray-500 lg:text-base">
            We have clothes that suits your style <br /> and which you’re proud
            to wear. <br />
            From women to men.
          </p>
          <div className="mt-4 flex justify-around text-3xl md:justify-evenly">
            <Link onClick={(e) => e.preventDefault()} to={''}>
              <AiFillTwitterCircle />
            </Link>
            <Link onClick={(e) => e.preventDefault()} to={''}>
              <FaFacebook />
            </Link>
            <Link onClick={(e) => e.preventDefault()} to={''}>
              <AiFillInstagram />
            </Link>
          </div>
        </div>
        <div className="mt-5 flex w-1/2 flex-col md:w-fit">
          <h1 className="mb-5 text-lg font-bold">COMPANY</h1>
          <Link
            onClick={(e) => e.preventDefault()}
            to={''}
            className="my-2 text-gray-500"
          >
            About
          </Link>
          <Link
            onClick={(e) => e.preventDefault()}
            to={''}
            className="my-2 text-gray-500"
          >
            Features
          </Link>
          <Link
            onClick={(e) => e.preventDefault()}
            to={''}
            className="my-2 text-gray-500"
          >
            Works
          </Link>
          <Link
            onClick={(e) => e.preventDefault()}
            to={''}
            className="my-2 text-gray-500"
          >
            Career
          </Link>
        </div>
        <div className="mt-5 flex w-1/2 flex-col md:w-fit">
          <h1 className="mb-5 text-lg font-bold">HELP</h1>
          <Link
            onClick={(e) => e.preventDefault()}
            to={''}
            className="my-2 text-gray-500"
          >
            Customer Support
          </Link>
          <Link
            onClick={(e) => e.preventDefault()}
            to={''}
            className="my-2 text-gray-500"
          >
            Delivery Details
          </Link>
          <Link
            onClick={(e) => e.preventDefault()}
            to={''}
            className="my-2 text-gray-500"
          >
            Terms & Conditions
          </Link>
          <Link
            onClick={(e) => e.preventDefault()}
            to={''}
            className="my-2 text-gray-500"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="mt-5 flex w-1/2 flex-col md:w-fit">
          <h1 className="mb-5 text-lg font-bold">FAQ</h1>
          <Link
            onClick={(e) => e.preventDefault()}
            to={''}
            className="my-2 text-gray-500"
          >
            Account
          </Link>
          <Link
            onClick={(e) => e.preventDefault()}
            to={''}
            className="my-2 text-gray-500"
          >
            Manage Deliveries
          </Link>
          <Link
            onClick={(e) => e.preventDefault()}
            to={''}
            className="my-2 text-gray-500"
          >
            Orders
          </Link>
          <Link
            onClick={(e) => e.preventDefault()}
            to={''}
            className="my-2 text-gray-500"
          >
            Payments
          </Link>
        </div>
        <div className="mt-5 flex w-1/2 flex-col md:w-fit">
          <h1 className="mb-5 text-lg font-bold">RESOURCES</h1>
          <Link
            onClick={(e) => e.preventDefault()}
            to={''}
            className="my-2 text-gray-500"
          >
            Free eBoooks
          </Link>
          <Link
            onClick={(e) => e.preventDefault()}
            to={''}
            className="my-2 text-gray-500"
          >
            Development Tutorial
          </Link>
          <Link
            onClick={(e) => e.preventDefault()}
            to={''}
            className="my-2 text-gray-500"
          >
            How to - Blog
          </Link>
          <Link
            onClick={(e) => e.preventDefault()}
            to={''}
            className="my-2 text-gray-500"
          >
            Youtube Playlist
          </Link>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap justify-center md:justify-between">
        <p className="text-gray-500">
          {' '}
          Shop.co &copy; 2000 - {currentYear}, All Rights Reserved.
        </p>
        <div className="mt-4 flex text-3xl md:mt-0">
          <FaCcVisa className="mx-2" />
          <FaCcMastercard className="mx-2" />
          <FaCcPaypal className="mx-2" />
          <FaCcApplePay className="mx-2" />
          <FaGooglePay className="mx-2" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
