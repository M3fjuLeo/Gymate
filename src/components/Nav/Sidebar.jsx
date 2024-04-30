import CircleLink from './../../ui/CircleLink';

import logo from '../../../public/images/logo/logo-footer.svg';
import SideImg1 from '../../../public/images/sidebar/1.jpg';
import SideImg2 from '../../../public/images/sidebar/2.jpg';
import SideImg3 from '../../../public/images/sidebar/3.jpg';
import SideImg4 from '../../../public/images/sidebar/4.jpg';
import SideImg5 from '../../../public/images/sidebar/5.jpg';
import SideImg6 from '../../../public/images/sidebar/6.jpg';
import SidebarSectionBox from './SidebarSectionBox';

function Sidebar({ sidebar, handleSidebar }) {
  return (
    <div
      className={`fixed duration-500 ease-in-out ${sidebar ? 'left-0' : '-left-[25rem]'} top-0 flex h-screen w-[25rem] flex-col gap-16 overflow-scroll bg-white px-12 py-12`}
    >
      <div className="flex items-center justify-between">
        <img src={logo} alt="logo" className="color-black w-[8rem]" />
        <i
          onClick={handleSidebar}
          className="fa-solid fa-xmark  cursor-pointer self-end text-4xl text-red-500"
        ></i>
      </div>

      <SidebarSectionBox title="About Us">
        <p className="text-md leading-6 text-gray-500">
          Find out who we are and what makes us unique. We are a
          community-driven gym committed to providing personalized fitness
          experiences for all levels of fitness enthusiasts in a welcoming and
          supportive environment.
        </p>
      </SidebarSectionBox>

      <SidebarSectionBox title="Gallery">
        <div className="grid grid-cols-3 grid-rows-2 gap-3">
          <img src={SideImg1} alt="sidebar image" className="rounded-md" />
          <img src={SideImg2} alt="sidebar image" className="rounded-md" />
          <img src={SideImg3} alt="sidebar image" className="rounded-md" />
          <img src={SideImg4} alt="sidebar image" className="rounded-md" />
          <img src={SideImg5} alt="sidebar image" className="rounded-md" />
          <img src={SideImg6} alt="sidebar image" className="rounded-md" />
        </div>
      </SidebarSectionBox>

      <SidebarSectionBox title="Contact Info">
        <p className="cursor-pointer text-lg text-gray-500 hover:text-red-500">
          <i className="fa-solid fa-location-dot text-red-500"></i>&nbsp; 59
          Street, House Newyork City
        </p>
        <p className="cursor-pointer text-lg text-gray-500 hover:text-red-500">
          <i className="fa-solid fa-phone text-red-500"></i>&nbsp;
          +123-678800090
        </p>
        <p className="cursor-pointer text-lg text-gray-500 hover:text-red-500">
          <i className="fa-solid fa-envelope text-red-500"></i>&nbsp;
          gymate@gymail.com
        </p>
      </SidebarSectionBox>

      <SidebarSectionBox title="Follow Us">
        <div className="flex flex-row gap-3">
          <CircleLink icon="fa-brands fa-facebook-f" />
          <CircleLink
            to="https://github.com/M3fjuLeo?tab=repositories"
            icon="fa-brands fa-github"
          />
          <CircleLink
            to="https://www.linkedin.com/in/mateusz-ropek-45b782258/"
            icon="fa-brands fa-linkedin-in"
          />
        </div>
      </SidebarSectionBox>
    </div>
  );
}

export default Sidebar;
