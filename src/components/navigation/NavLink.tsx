import { Link } from 'react-router-dom'

interface NavLinkProps {
  url: string
  label: string
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

const NavLink = ({ url, label, children, onClick }: NavLinkProps) => {
  return (
    <li className="m-2 flex items-center text-lg font-medium">
      <Link to={url} className="h-full w-full no-underline" onClick={onClick}>
        {label}
        {children}
      </Link>
    </li>
  )
}

export default NavLink
