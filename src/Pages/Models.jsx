import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import CarImg1 from "../images/cars-big/Thar.png";
import CarImg2 from "../images/cars-big/Nexon.png";
import CarImg3 from "../images/cars-big/Breeza.png";

import CarImg5 from "../images/cars-big/Benz.png";
import CarImg6 from "../images/cars-big/Swift.png";
import { Link } from "react-router-dom";
import { IconPhone } from "@tabler/icons-react";

function Models() {
  document.title = "Uberola | Our Fleet of Cars";
  return (
    <>
      <section className="models-section">
        <HeroPages name="Driver Details" />
        <div className="container">
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg1} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Driver - 1</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to="/"
                      style={{ border: "1px", borderRadius: "8px" }}
                    >
                      Book Driver
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg2} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Driver - 2</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to="/"
                      style={{ border: "1px", borderRadius: "8px" }}
                    >
                      Book Driver
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg3} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Driver - 3</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to="/"
                      style={{ border: "1px", borderRadius: "8px" }}
                    >
                      Book Driver
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg1} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Driver - 4</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to="/"
                      style={{ border: "1px", borderRadius: "8px" }}
                    >
                      Book Driver
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg5} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Driver - 5</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to="/"
                      style={{ border: "1px", borderRadius: "8px" }}
                    >
                      Book Driver
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg6} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Driver - 6</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to="/"
                      style={{ border: "1px", borderRadius: "8px" }}
                    >
                      Book Driver
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a Driver  by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>+91 7418666925 </h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Models;
