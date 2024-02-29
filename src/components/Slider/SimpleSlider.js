import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";

function SimpleSlider() {
  const imageUrls = [
    "https://images.pexels.com/photos/6634174/pexels-photo-6634174.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/15559731/pexels-photo-15559731/free-photo-of-a-woman-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/15420967/pexels-photo-15420967/free-photo-of-woman-wearing-red-dress-and-crown-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=300"
  ];

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
    
  };

  return (
    <div className="slider-container" >
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Image ${index + 1}`} style={{display: "flex", justifyContent: "center", height: "800px", width: "900px"}} />
            
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
