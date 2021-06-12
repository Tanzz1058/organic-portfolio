import React from "react";
import { BsStar } from "react-icons/bs";

import "./newsletter.css";
import commas from "../../assets/images/commas.png";
import avatar from "../../assets/images/avatar.png";
import leaves from "../../assets/images/Leaves.png";
import leaf from "../../assets/images/leaf.png";

const Newsletter = () => {
  return (
    <section>
      <div className="comment-section">
        <img src={leaves} alt="leaves" className="side-leaves" />
        <img src={commas} alt="commas" />
        <div className="avatar">
          <img src={avatar} alt="avatar" />
          <div className="comment">
            <span>Jane Doe</span>
            <BsStar style={{ color: "#00dbd0" }} />{" "}
            <BsStar style={{ color: "#00dbd0" }} />{" "}
            <BsStar style={{ color: "#00dbd0" }} />{" "}
            <BsStar style={{ color: "#00dbd0" }} />{" "}
            <BsStar style={{ color: "#00dbd0" }} />
            <p>
              Thank you for all the amazing produce and products you deliver
              each week…
              <br />
              you make my life so easy an bring goodness into our family eating.{" "}
              <br />
              I’ve been roasting a lot of brussel sprouts and
            </p>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <span>Subscribe to Our Newsletter</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="email-submit">
          <input placeholder="Enter Your email address" />
          <button className="submit-button">Subscribe</button>
        </div>
        <img src={leaf} alt="leaf" />
      </div>
    </section>
  );
};

export default Newsletter;
