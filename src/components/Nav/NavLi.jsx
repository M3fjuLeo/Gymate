import { Link } from 'react-router-dom';
import scrollTop from './../../ui/scrollToTop';

function NavLi({ title, to, onClick }) {
  return (
    <Link to={to} onClick={() => scrollTop()}>
      <li
        onClick={onClick}
        style={{ transition: 'all 0.3s' }}
        className="cursor-pointer font-normal hover:text-red-500"
      >
        {title}
      </li>
    </Link>
  );
}

export default NavLi;
