import NavLink from './NavLink'
import { MdOutlineCancel } from 'react-icons/md'

interface NavHeadProps {
  setToggleNav: React.Dispatch<React.SetStateAction<boolean>>
}

function NavHead({ setToggleNav }: NavHeadProps) {
  return (
    <div className="absolute right-0 top-0 z-20 flex h-screen w-full flex-col bg-white p-10">
      <button
        type="button"
        className="text-4xl"
        onClick={() => setToggleNav(false)}
      >
        <MdOutlineCancel />
      </button>
      <div className="mt-20 space-y-2">
        <ul className="space-y-4 font-bold">
          <NavLink url={'/shop'} label={'Shop Now'} />
          <NavLink url={'/category/laptops'} label={'Laptops'} />
          <NavLink url={'/category/smartphones'} label={'Phone'} />
          <NavLink url={'/category/tablets'} label={'Tablets'} />
          <NavLink url={'/category/mobile-accessories'} label={'Accessories'} />
        </ul>
      </div>
    </div>
  )
}

export default NavHead
