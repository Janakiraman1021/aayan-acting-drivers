import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { IconMail, IconPhoneCall } from "@tabler/icons-react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const values = {
      email: email,
    };
    if (!values.email.trim()) {
      toast.warning("Empty Fields!");
      return false;
    }

    await fetch("https://uber-ola-server.vercel.app/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((user) => {
        setEmail("");
        toast.success("Subscribed To Newsletter ✌️✌️");
      })
      .catch((err) => {
        setEmail("");
        toast.error(err.remarks);
        toast.error("Seems, there is an issue with the Server.");
      });
  };
  return (
    <>
      <div style={{ fontSize: "15px", fontWeight: "normal" }}>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
      <footer style={{ backgroundColor: "#f8f8f8" }}>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <img src={Logo} alt="Company Logo" style={{ width: "28rem" }}></img>
              </li>
              <li>
                We provide a diverse range of vehicles tailored to meet your driving requirements. Whatever your needs may be, we have the perfect car for you.
              </li>
              <li>
                <p>
                  <IconPhoneCall /> &nbsp; +91 7418666925
                </p>
              </li>

              <li>
                <p>
                  <IconMail />
                  &nbsp; ayyancalldrivers@gmail.com
                </p>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <Link
                  className="home-link"
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className="about-link"
                  to="/about"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className="testi-link"
                  to="/testimonials"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className="contact-link"
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact
                </Link>
              </li>
            </ul>


            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <form action="POST" onSubmit={handleSubmit}>
                <li>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    type="email"
                    placeholder="Enter Email Address"
                    style={{ border: "1px", borderRadius: "8px" }}
                  ></input>
                </li>
                <li>
                  <button
                    type="submit"
                    className="submit-email"
                    style={{ border: "1px", borderRadius: "8px" }}
                  >
                    Submit
                  </button>
                </li>
              </form>
            </ul>

            <ul className="footer-content__2">
              <li> </li>
              <li>
                <p>Design & Developed By Tech Cube </p>
              </li> 
            </ul>

            
          </div>
         
        </div>
      </footer >
    </>
  );
}

export default Footer;
