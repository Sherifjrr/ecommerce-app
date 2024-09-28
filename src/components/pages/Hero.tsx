import { Link } from 'react-router-dom'
import Slider from '../elements/Slider'
import ipadImg from '../../assets/Ipad.png'
import iphoneImg from '../../assets/iphoneImg.png'
import iwatchImg from '../../assets/Iwatch.png'
import macImg from '../../assets/Mac.png'

const slides = [
  {
    id: 1,
    image: iphoneImg,
    title: 'Slide 1',
    description: 'This is the first slide',
  },
  {
    id: 2,
    image: macImg,
    title: 'Slide 2',
    description: 'This is the second slide',
  },
  {
    id: 3,
    image: ipadImg,
    title: 'Slide 3',
    description: 'This is the third slide',
  },
  {
    id: 4,
    image: iwatchImg,
    title: 'Slide 3',
    description: 'This is the third slide',
  },
]

function Hero() {
  return (
    <section className="flex w-full flex-wrap">
      <div className="flex w-full flex-col gap-y-10 p-5 lg:w-1/2 lg:p-20 xl:w-1/2">
        <h1 className="my-5 text-4xl font-extrabold lg:text-5xl">
          FIND ELECTRONICS <br />
          THAT MATCHES <br />
          YOUR NEEDS
        </h1>
        <p className="text-lg lg:text-xl">
          <strong>Discover Your Perfect Tech Match</strong> <br />
          From powerful laptops to smart home gadgets, find devices that fit
          your life. Browse our curated collection and upgrade your digital
          world today.
        </p>
        <Link to="/shop" className="w-fit">
          <button
            type="button"
            className="rounded-3xl bg-black px-14 py-3 text-white"
          >
            Shop Now
          </button>
        </Link>
        <div className="my-5 flex flex-wrap justify-center lg:flex-nowrap lg:justify-normal">
          <div className="mt-2">
            <h1 className="text-3xl font-medium">200+</h1>
            <h3>International Brands</h3>
          </div>
          <div className="ml-5 mt-2 border-l-2 pl-2">
            <h1 className="text-3xl font-medium">2,000+</h1>
            <h3>High-Quality Products</h3>
          </div>
          <div className="ml-5 mt-2 border-l-2 pl-2">
            <h1 className="text-3xl font-medium">30,000+</h1>
            <h3>Happy Customers</h3>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-normal overflow-hidden lg:w-1/2">
        <Slider slides={slides} />
      </div>
    </section>
  )
}

export default Hero
