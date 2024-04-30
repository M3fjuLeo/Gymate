import PageHeading from '../../ui/PageHeading';
import CircleLink from '../../ui/CircleLink';
import ContactTile from './ContactTile';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

function Contact() {
  return (
    <section id="contact">
      <PageHeading title="Contact Us" />
      <div className="page-padding container py-20">
        <div className="flex flex-row gap-14 md1000:flex-col md1000:px-40 min800:px-20 min620:px-0">
          <div className="flex flex-1 flex-col gap-8 py-8 ">
            <h1 className="text-4xl font-bold">
              We are here for help you! To Shape Your Body.
            </h1>
            <p className="text-lg text-neutral-500">
              At Gymate, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
            <div className="grid grid-cols-2 gap-12 min540:grid-cols-1 min540:px-20">
              <ContactTile title="New York City, USA">
                <p className="text-neutral-500">
                  85 Briston Mint Street, London, E1 8LG, USA
                </p>
              </ContactTile>

              <ContactTile title="Opening Hours">
                <p className="text-neutral-500">
                  Mon to Fri: 7:30 am — 1:00 am <br /> Mon to Fri: 7:30 am —
                  1:00 am
                </p>
              </ContactTile>

              <ContactTile title="Information">
                <p className="text-neutral-500">
                  +800-123-4567 gymat@gymail.com
                </p>
              </ContactTile>

              <ContactTile title="Follow Us On">
                <CircleLink icon="fa-brands fa-facebook-f" />
                <CircleLink
                  to="https://github.com/M3fjuLeo?tab=repositories"
                  icon="fa-brands fa-github"
                />
                <CircleLink
                  to="https://www.linkedin.com/in/mateusz-ropek-45b782258/"
                  icon="fa-brands fa-linkedin-in"
                />
              </ContactTile>
            </div>
          </div>

          <div className="flex-1 bg-neutral-50">
            <div className="flex flex-col gap-4 p-8">
              <div>
                <h1 className="mb-2 text-3xl font-bold">Leave Us Your Info</h1>
                <div className="h-[4px] w-[4rem] bg-red-500"></div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <ContactMap />
    </section>
  );
}

export default Contact;
