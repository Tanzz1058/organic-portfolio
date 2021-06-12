import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} style={{ margin: "4rem auto" }}>
        <div>
          <img src={slide1} alt="slide1" style={{ display: "inline" }} />
        </div>

        <div>
          <img src={slide2} alt="slide2" style={{ display: "inline" }} />
        </div>
        <div>
          <img src={slide3} alt="slide3" style={{ display: "inline" }} />
        </div>
        <div>
          <img src={slide1} alt="slide1" style={{ display: "inline" }} />
        </div>

        <div>
          <img src={slide2} alt="slide2" style={{ display: "inline" }} />
        </div>
        <div>
          <img src={slide3} alt="slide3" style={{ display: "inline" }} />
        </div>
        <div>
          <img src={slide1} alt="slide1" style={{ display: "inline" }} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
