import { Link } from 'react-router-dom';
import scrollTop from './scrollToTop';

function Button({
  to,
  bgColor,
  textColor,
  arrowColor,
  description,
  hoverBg,
  cN,
}) {
  return (
    <Link to={to} className="z-50" onClick={() => scrollTop()}>
      <button
        className={`${cN} relative h-[3.5rem] w-[13rem] duration-300 ${bgColor} text-center font-bold uppercase ${textColor} ${hoverBg}`}
      >
        {description} &nbsp;{' '}
        <i className={`fa-solid fa-arrow-right ${arrowColor}`}></i>
      </button>
    </Link>
  );
}

export default Button;
