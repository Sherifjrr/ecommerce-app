import { Link } from 'react-router-dom'

interface NavLinkProps {
  url: string
  label: string
  children?: React.ReactNode
  className?: string
}

const NavLink = ({ url, label, children }: NavLinkProps) => {
  return (
    <li className="m-2 flex items-center text-lg font-medium">
      <Link to={url} className="no-underline">
        {label}
      </Link>
      {children}
    </li>
  )
}

export default NavLink
