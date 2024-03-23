// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./SimpleSlider.css";
// import blog8 from "../Images/blog8.jpg";
// import blog2 from "../Images/blog2.jpg";
// import blog3 from "../Images/blog3.jpg";



// function SimpleSlider() {

//   const imageUrls = [blog8, blog2, blog3];



//   const settings = {
//     dots: true,
//     fade: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     arrow: true,
    
//   };

//   return (
//     <div className="container">
//       <Slider {...settings} >
//         <div className="container mx-auto px-4 md:px-12 my-8 ">
//           <img
//             src={blog8}
//             alt="Pic 1"
//             className="w-7/12 h-5/6 flex justify-center items-center"
//             />
//         </div>
//         <div className="container mx-auto px-4 md:px-12 my-8 ">
//           <img
//             src={blog2}
//             alt="Pic 2"
//             className="w-7/12 h-5/6 flex justify-center items-center"

//           />
//         </div>
//         <div className="container mx-auto  md:px-12 my-8 items-center  ">
//           <img
//             src={blog3}
//             alt="Pic 3"
//             className="w-full h-full rounded-md  "

//           />
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default SimpleSlider;


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
    arrow: true,
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Adjust the height and width of the container based on your design */}
      <div className="container mx-auto px-4 md:px-12 my-8">
        <Slider {...settings}>
          <div className="container mx-auto px-4 md:px-12 my-8">
            <img src={blog8} alt="Pic 1" className="w-full h-full rounded-md" />
          </div>
          <div className="container mx-auto px-4 md:px-12 my-8">
            <img src={blog2} alt="Pic 2" className="w-full h-full rounded-md" />
          </div>
          <div className="container mx-auto md:px-12 my-8">
            <img src={blog3} alt="Pic 3" className="w-full h-full rounded-md" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;
