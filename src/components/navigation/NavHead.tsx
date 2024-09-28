import { MdOutlineCancel } from 'react-icons/md'
import NavLink from './NavLink'

interface NavHeadProps {
  setToggleNav: React.Dispatch<React.SetStateAction<boolean>>
}

function NavHead({ setToggleNav }: NavHeadProps) {
  return (
    <div className="fixed right-0 top-0 z-50 flex h-screen w-full flex-col bg-white p-10">
      <button type="button" className="text-4xl" onClick={() => handleMenu()}>
        <MdOutlineCancel />
      </button>
      <div className="mt-20 space-y-2">
        <ul className="flex flex-col items-center gap-y-8">
          <NavLink
            onClick={() => handleMenu()}
            url={'/shop'}
            label={'Shop Now'}
          />
          <NavLink
            url={'/category/laptops'}
            label={'Laptops'}
            onClick={() => handleMenu()}
          />
          <NavLink
            url={'/category/smartphones'}
            label={'Phone'}
            onClick={() => handleMenu()}
          />
          <NavLink
            url={'/category/tablets'}
            label={'Tablets'}
            onClick={() => handleMenu()}
          />
          <NavLink
            url={'/category/mobile-accessories'}
            label={'Accessories'}
            onClick={() => handleMenu()}
          />
        </ul>
      </div>
    </div>
  )
}

export default NavHead
