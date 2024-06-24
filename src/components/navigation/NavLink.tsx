import { Link } from 'react-router-dom';

interface NavLinkProps {
  url: string;
  label: string;
  children?: React.ReactNode;
  className?: string;
}

const NavLink = ({ url, label, children }: NavLinkProps) => {
  return (
    <li className="flex items-center m-2">
      <Link to={url} className="no-underline">
        {label}
      </Link>
      {children}
    </li>
  );
};

export default NavLink;
