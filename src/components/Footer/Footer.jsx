import LogoFooter from '../../../public/images/logo/logo-footer.svg';
import CircleLink from '../../ui/CircleLink';
import FooterClass from './FooterClass';

function Footer() {
  return (
    <footer className="flex justify-center bg-white">
      <div className="page-padding container py-[7rem]">
        <div className="flex flex-row items-center justify-between md1200:gap-20 md1000:gap-10 min620:flex-col">
          <div className="flex w-1/3 flex-col gap-6">
            <img src={LogoFooter} alt="Footer Logo" className="w-[12rem]" />
            <p className="text-gray-500">
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            <div className="flex flex-row gap-4">
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
            <p className="text-gray-500">
              Privacy Policy | © 2024 Gymate <br /> Design by RadiusTheme
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Our Classes</h3>
            <FooterClass title="Fitness Classes" />
            <FooterClass title="Aeorbic Classes" />
            <FooterClass title="Power Yoga" />
            <FooterClass title="Learn Machines" />
            <FooterClass title="Full-body Strength" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Working Hours</h3>
            <p className="text-lg ">Monday - Friday:</p>
            <p className="text-lg text-gray-500">7:00am - 9:00pm</p>
            <p className="text-lg ">Saturday:</p>
            <p className="text-lg text-gray-500">7:00am - 7:00pm</p>
            <p className="text-lg ">Sunday - Closed</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
