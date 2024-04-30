import { useState } from 'react';
import { Link } from 'react-router-dom';
import scrollTop from '../../ui/scrollToTop';
import NavLinksList from './NavLinksList';
import Sidebar from './Sidebar';
import logo from '../../../public/images/logo/logo.svg';

function Nav() {
  const [isSticky, setIsSticky] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  window.addEventListener('scroll', handleScroll);

  function handleScroll() {
    if (window.scrollY > 10) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }

  function toggleSpin() {
    setIsSpinning((prevState) => !prevState);
  }

  function toggleHamburger() {
    setHamburger((prevState) => !prevState);
  }

  function toggleSidebar() {
    setSidebar((prevState) => !prevState);
  }

  return (
    <nav
      className={`fixed z-[9999] flex w-full flex-row items-center justify-between px-7 py-5 text-white ${isSticky ? '!bg-black shadow-xl' : ''}`}
    >
      <Link to={'/'} onClick={() => scrollTop()}>
        <img src={logo} alt="logo" />
      </Link>
      <ul className="flex flex-row gap-4 text-lg font-thin tracking-wider md1200:hidden">
        <NavLinksList />
      </ul>

      <div
        onClick={toggleHamburger}
        className={`fixed ${hamburger ? 'left-0' : 'left-[-100%]'} top-0 flex h-screen w-full flex-col bg-white px-10 py-14 text-black duration-500 ease-in-out`}
      >
        <i className="fa-solid fa-xmark cursor-pointer self-end text-4xl text-red-500"></i>
        <ul className="absolute left-[50%] top-[50%] flex -translate-x-[50%] -translate-y-[50%] flex-col gap-6 text-center text-2xl font-thin">
          <NavLinksList />
        </ul>
      </div>

      <div className="flex flex-row items-center gap-5 text-2xl">
        <i
          onClick={toggleHamburger}
          className="fa-solid fa-bars hidden cursor-pointer hover:text-red-500 md1200:flex"
        ></i>
        <Link to="/signup">
          <i
            style={{ transition: 'all 0.3s' }}
            className="fa-regular fa-user  cursor-pointer hover:text-red-500"
          ></i>
        </Link>

        <i
          onClick={toggleSidebar}
          style={{ transition: 'all 0.3s' }}
          className="fa-regular fa-chart-bar cursor-pointer hover:text-red-500"
        ></i>

        <div
          onMouseEnter={toggleSpin}
          onMouseLeave={toggleSpin}
          className="cursor-pointer rounded-sm border-2 border-gray-600 p-2 text-base min620:hidden"
        >
          <Link
            to={'/contact'}
            className="flex flex-row items-center gap-2 pr-6 "
          >
            <i
              className={`fa-solid fa-plus rounded bg-red-500 p-2 ${isSpinning ? 'nav-btn-spin' : ''}`}
            ></i>
            <h3 className="font-bold tracking-wider">JOIN CLASS NOW</h3>
          </Link>
        </div>
      </div>
      <Sidebar sidebar={sidebar} handleSidebar={toggleSidebar} />
    </nav>
  );
}

export default Nav;
