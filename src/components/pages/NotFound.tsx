import Footer from './Footer'
import { Link } from 'react-router-dom'
import NavBar from '../navigation/NavBar'
import img from '../../assets/404.png'

function NotFound() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center gap-y-10">
        <img src={img} alt="404 not found" className="w-3/4 xl:w-1/3" />
        <p className="text-wrap text-2xl font-semibold xl:text-4xl">
          {' '}
          Oops, This Page Could Not Be Found{' '}
        </p>
        <Link to={'/'}>
          <button className="mb-10 rounded-3xl bg-black px-14 py-4 text-xl text-white xl:px-20">
            Go Back Home
          </button>
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default NotFound
