import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";
import blog8 from "../Images/blog8.jpg";
import blog2 from "../Images/blog2.jpg";
import blog3 from "../Images/blog3.jpg";



function SimpleSlider() {

  const imageUrls = [blog8, blog2, blog3];



  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrow: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div >
          <img
            src={blog8}
            alt="Pic 1"
            
            className="w-full h-full flex justify-center items-center"
          />
        </div>
        <div>
          <img
            src={blog2}
            alt="Pic 2"
            className="w-full h-full flex justify-center items-center"

          />
        </div>
        <div >
          <img
            src={blog3}
            alt="Pic 3"
            className="w-full h-full flex justify-center items-center"

          />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
