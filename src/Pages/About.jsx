import { IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";


function About() {
  document.title = "Uberola | About Us";
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>You ignite the engine, signaling the start of your journey with Us</h2>
              <p>
                Certainly, but why the hesitation? Our drivers are here to serve you.
                 Their professionalism and courtesy will make your journey a pleasant one.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>10+</h4>
                    <p>Drivers</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ border: "1px", borderRadius: "8px", }}>
            <PlanTrip />
          </div>
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a Driver & Enjoy Your Ride with us</h2>
            <span>
              <IconPhone width={40} height={40} />
              <h3>+91 7418666925</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
