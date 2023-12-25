import React, { useRef, useState } from "react";
import { customerData } from "../datas/customersData";
import CustomerCard from "./CustomerCard";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Customer() {
  const sliderRef1 = useRef(null);

  const handleSliderNext = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickNext();
    }
  };

  const handleSliderPrev = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickPrev();
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TfiArrowLeft
          className="w-8 h-8 sm:mx-6"
          style={{ color: "#FF4729" }}
          onClick={handleSliderPrev}
        />
        <ul style={{ margin: "10px", color: "black" }}>{dots}</ul>
        <TfiArrowRight
          className="w-8 h-8 sm:mx-6"
          style={{ color: "#FF4729" }}
          onClick={handleSliderNext}
        />
      </div>
      // </div>
    ),
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 832,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i) => (
      <div
        style={{
          height: "10px",
          width: "10px",
          backgroundColor: "#FF4729",
          borderRadius: "30px",
        }}
      ></div>
    ),
  };
  return (
    <div className="mt-24 flex flex-col justify-center items-center mb-12 overflow-hidden">
      <p className="font-semibold text-4xl text-center ">
        Whats Our Coustomer Saying
      </p>
      <div className="mt-24 w-full flex justify-center items-center">
        <Slider
          ref={sliderRef1}
          {...settings}
          className=" w-full md:w-5/6 pb-24"
        >
          {customerData.map((data, index) => (
            <div
              key={index}
              className={`customer-card ${
                index !== customerData.length - 1 ? " md:with-border" : ""
              }`}
            >
              <CustomerCard data={data} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex mt-8 mb-12 relative bg-red-500"></div>
    </div>
  );
}

export default Customer;
