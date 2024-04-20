import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Frequently Asked Questions About the Driver Rental Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`} style={{ border: "1px", borderRadius: "8px 8px 0px 0px" }}
                >
                  <p>1. What sets us apart when comparing driver deals?</p>
                  <IconChevronDown />
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Comparing driver deals is crucial as it enables you to discover 
                  the most suitable offer that meets your budget and needs,
                  ensuring you receive the best value for your money. 
                  Through comparison, you can uncover deals with lower prices, 
                  extra services, or superior vehicle models. 
                  These deals can be found by conducting online research 
                  and comparing prices from various driver companies.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. Where can I find driver deals?</p>
                  <IconChevronDown />{" "}
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  You can discover driver deals by conducting online research 
                  and comparing prices from various driver companies. 
                  Websites like Expedia, Kayak, and Travelocity enable 
                  you to compare prices and explore rental options. 
                  Additionally, subscribing to email newsletters and 
                  following driver companies on social media can keep 
                  you updated on special deals and promotions.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. How can I secure such affordable driver rates?</p>
                  <IconChevronDown />
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Book in advance: Booking your driver ahead of time can often lead to lower rates. 
                  Compare prices from various companies: Utilize websites like Kayak, Expedia, or 
                  Travelocity to compare prices from multiple driver companies.  
                  Search for discount codes and coupons: Look for discount codes and coupons 
                  that can help reduce the rental cost. Renting from an off-airport location 
                  can sometimes result in lower rates.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
