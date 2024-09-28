import { Link, useLocation } from 'react-router-dom'

import { IoIosArrowForward } from 'react-icons/io'

function BreadcrumbNav() {
  const location = useLocation()
  const pathLocation = location.pathname.split('/').filter((x) => x)
  return (
    <nav aria-label="BreadCrumb Navigation">
      <ol className="mt-6 flex items-center pl-6 text-lg font-semibold md:pl-12 xl:pl-20">
        <li>
          <Link to={'/'} className="mr-2 text-gray-500">
            Home
          </Link>
        </li>
        <IoIosArrowForward className="mr-2" />
        {pathLocation.length > 1
          ? pathLocation.slice(1, 2).map((path, index) => {
              return (
                <li key={index}>
                  <Link to={`/category/${path}`} state={{ category: path }}>
                    {path.charAt(0).toUpperCase() + path.slice(1)}
                  </Link>
                </li>
              )
            })
          : pathLocation.map((path, index) => {
              return (
                <li key={index}>
                  <Link to={`/${path}`} state={{ category: path }}>
                    {path.charAt(0).toUpperCase() + path.slice(1)}
                  </Link>
                </li>
              )
            })}
      </ol>
    </nav>
  )
}

export default BreadcrumbNav
