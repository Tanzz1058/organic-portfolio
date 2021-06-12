import React from "react";

import "./footer.css";
import footer from "../../assets/images/footer.png";
import whiteLogo from "../../assets/images/whiteLogo.png";
import fb from "../../assets/images/fb.png";
import linkedin from "../../assets/images/linkedin.png";
import insta from "../../assets/images/insta.png";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer-text">
        <div className="footer-text-one">
          <img
            src={whiteLogo}
            alt="white-logo"
            className="footer-container-img"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
            elit, sed do eiusmod tempor{" "}
          </p>
          <span>© Copyright 2020 Nature</span>
        </div>
        <div className="footer-text-two">
          <span>Information</span>
          <p>About Us</p>
          <p>Products</p>
          <p>Contact Us</p>
          <p>Terms of Service</p>
        </div>

        <div></div>
        <div className="footer-text-three">
          <span>Follow Us</span>
          <br />
          <div className="socials">
            <img src={fb} alt="fb" /> <img src={insta} alt="insta" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>

        {/* <img src={footer} alt="footer" /> */}
      </div>
    </section>
  );
};

export default Footer;
