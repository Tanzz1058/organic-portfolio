import React from "react";

import plant from "../../assets/images/plant.png";
import logoBig from "../../assets/images/logoBig.png";
import leaf from "../../assets/images/leaf.png";
import whiteBox from "../../assets/images/whiteBox.png";
import BlueBox from "../../assets/images/blueBox.png";
import Carousel from "../carousel/carousel-one";
import Newsletter from "../Newsletter/newsletter";
import Blog from "../blogs/blogs";
import "./home.css";
import Footer from "../footer/footer";

const Home = () => {
  return (
    <div>
      <div className="home">
        <section className="section-first">
          <div className="description">
            <span className="title1">Healthy life with</span>
            <span className="title2">Natural organic</span>
            <span className="title3">
              Vegetables are the edible parts of the plant
              <br /> that is used in cooking or can be eaten raw
            </span>
            <button className="button-section-first">Explore Now</button>
          </div>
          <div className="plant-logo-image">
            <div className="plant-image">
              <img src={plant} alt="plant" />
            </div>
            <div className="logo-image-big">
              <img src={logoBig} alt="logo" />
            </div>
          </div>
        </section>
        <div className="welcome-section" style={{ display: "block" }}>
          <img src={leaf} alt="leaf" />
          <span>Welcome to Nature</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
            <br /> incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <section className="box-section">
          <img src={whiteBox} alt="box" />
          <img src={BlueBox} alt="box" />
          <img src={whiteBox} alt="box" />
          <img src={whiteBox} alt="box" />
        </section>
        <section className="present-section">
          <span>Proudly presented by</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
            <br /> incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
        <Carousel />
        <Newsletter />
        <Blog />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
