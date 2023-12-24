import React, { useRef, useState } from "react";
import { customerData } from "../datas/customersData";
import CustomerCard from "./CustomerCard";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Customer() {
  const sliderRef1 = useRef(null);
  const [right,SetRight]=useState(false)

  const handleSliderNext = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickNext();
      SetRight(true)
    }
  };

  const handleSliderPrev = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickPrev();
      SetRight(false)
    }
  };
  console.log(right)

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <TfiArrowRight />,
    prevArrow: <TfiArrowLeft />,
    appendDots: dots => (
    <div
          className="rounded-full mt-3 w-3 h-3 mx-1"
          style={{ backgroundColor: "#FF4729", filter: "opacity(0.5)" }}
        ></div>
    )
  };
  return (
    <div className="mt-24 flex flex-col justify-center items-center mb-12 ">
      <p className="font-semibold text-4xl ">Whats Our Coustomer Saying</p>
      <div className="mt-24 w-full flex justify-center">
        <Slider ref={sliderRef1} {...settings} className="w-5/6">
          {customerData.map((data, index) => (
           <div
           key={index}
           className={`customer-card${index !== customerData.length - 1 ? ' with-border' : ''}`}
         >
           <CustomerCard data={data} />
         </div>
            
          ))}
        </Slider>
      </div>
      <div className="flex mt-8 mb-12">
        <TfiArrowLeft className="w-8 h-8 mx-6" style={{ color: "#FF4729" }} onClick={handleSliderPrev}/>
        {right?<div
          className="rounded-full mt-3 w-3 h-3 mx-1"
          style={{ backgroundColor: "#FF4729", filter: "opacity(0.5)" }}
        ></div>:<div
        className="rounded-full mt-[0.7vw] w-4 h-4 mx-1"
        style={{ backgroundColor: "#FF4729" }}
      ></div>}
        {right?<div
          className="rounded-full mt-[0.7vw] w-4 h-4 mx-1"
          style={{ backgroundColor: "#FF4729" }}
        ></div>:
        <div
          className="rounded-full mt-3 w-3 h-3 mx-1"
          style={{ backgroundColor: "#FF4729", filter: "opacity(0.5)" }}
        ></div>}
        <TfiArrowRight className="w-8 h-8 mx-6" style={{ color: "#FF4729" }} onClick={handleSliderNext} />
      </div>
    </div>
  );
}

export default Customer;
