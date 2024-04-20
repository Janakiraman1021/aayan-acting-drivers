import { Link } from "react-router-dom";
import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";
import { IconChevronRight } from "@tabler/icons-react";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us</h4>
                <h2>Best valued deals you will ever find</h2>
                <p>
                  Explore unparalleled savings with our unmatched offers. 
                  We are committed to delivering exceptional value, 
                  ensuring you enjoy top-notch services and products affordably. 
                  Our deals are crafted to enhance your driving experience, 
                  so seize the opportunity to save significantly.
                </p>
                <Link className="home-link" to="/about" onClick={() => window.scrollTo(0, 0)} style={{ border: "1px", borderRadius: "8px" }}>
                  Find Details &nbsp;
                  <IconChevronRight />
                </Link>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                  <h4>Long-Haul Journey</h4>
                    <p>
                      Elevate your driving experience with our Drivers
                      for your long-distance journeys.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                  <h4>Transparent Pricing</h4>
                    <p>
                      Enjoy the convenience of one straightforward price that covers everything you need with our transparent pricing policy.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>No Hidden Charges</h4>
                    <p>
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
