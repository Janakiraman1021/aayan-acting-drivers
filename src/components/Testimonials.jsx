import { IconQuote } from "@tabler/icons-react";
import Img2 from "../images/testimonials/user1.png";
import Img3 from "../images/testimonials/user2.png";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Reviewed by People</h4>
              <h2>Client's Testimonials</h2>
              <p>
              Experience the transformative impact we've had on our clients by reading their testimonials. 
              Our clients have benefited from our service and outcomes, 
              and they're excited to share their positive experiences with you.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box" style={{border: "1px", borderRadius: "8px"}}>
                <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span>
                <p>
                  "We hired a driver from this company and had an incredible experience! 
                  The booking process was seamless, and the rates were exceptionally affordable. "
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>JanakiRaman</h4>
                      <p>Tiruvallur</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2" style={{border: "1px", borderRadius: "8px"}}>
                <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span>
                <p>
                  "The driver was professional and the vehicle was in excellent condition, 
                  enhancing our trip significantly. I highly recommend this driver company!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Narasimman</h4>
                      <p>Amjikarai</p>
                    </span>
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

export default Testimonials;
