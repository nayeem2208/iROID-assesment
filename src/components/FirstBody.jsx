import React, { useRef } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import ImageCardFirst from "./imageCardFirst";
import { FirstBodyData } from "../datas/FirstBodyDatas";
import { AiOutlineSlack } from "react-icons/ai";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FirstBody() {
  const sliderRef = useRef(null);

  const handleSliderNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleSliderPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <IoArrowForward/>,
      prevArrow:<IoArrowBackOutline/>
  };

  return (
    <div
      className="relative h-96 flex flex-col justify-center items-center text-white text-center"
      style={{
        background:
          "linear-gradient(355deg, rgba(0,0,96,1) 25%, rgba(0,0,96,0.6) 100%)",
        height: "160vh",
        fontFamily:
          "-apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu",
      }}
    >
      {/* Slack icons */}
      <AiOutlineSlack
        className="absolute mt-6 w-4 h-4"
        style={{ top: '10vh', left: '12vh', zIndex: 10 }}
      />
      <AiOutlineSlack
        className="absolute mt-6 w-3 h-3"
        style={{ top: 0, right: '15vw', zIndex: 10 }}
      />
      <AiOutlineSlack
        className="absolute mt-6 w-2 h-2"
        style={{ top: '20vw', right: '16vw', zIndex: 10 }}
      />
      <AiOutlineSlack
        className="absolute mt-6 w-6 h-6 text-gray-300"
        style={{ top: '30vw', right: '5vw', zIndex: 10 }}
      />
      <AiOutlineSlack
        className="absolute mt-6 w-3 h-3"
        style={{ top: '17vw', left: '19vw', zIndex: 10 }}
      />
      <AiOutlineSlack
        className="absolute mt-6 w-2 h-2"
        style={{ top: '65vh', left: '12vh', zIndex: 10 }}
      />

      {/* Title */}
      <div className="w-4/6 flex justify-center mt-24">
        <p className="text-5xl font-semibold">
          Check out our portfolio to discover how <br />
          we can make your product listings pop.
        </p>
      </div>

      {/* Subtitle */}
      <div className="w-3/5 mt-12 ">
        <p className="font-light">
          Like the content you see from our portfolio? Click the link below and
          fill out the <br /> contact form to receive a free, personalized demo.
        </p>
      </div>

      {/* Contact Us Button */}
      <button
        className="mt-12 h-10 w-48 text-sm font-semibold rounded-md flex justify-center items-center"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,41,251,1) 20%, rgba(254,0,52,1) 100%)",
          filter: "saturate(70%)",
        }}
      >
        <p style={{ filter: "brightness(1) contrast(200%)" }}>CONTACT US</p>
        <HiOutlineArrowLongRight className="ml-2 w-8 h-6" />
      </button>

      {/* Slider */}
      <div className="mt-24 w-full flex justify-center">
        <Slider ref={sliderRef} {...settings} className="w-5/6">
          {FirstBodyData.map((data, index) => (
            <ImageCardFirst data={data} key={index} />
          ))}
        </Slider>
      </div>

      {/* Navigation Arrows */}
      <div className="w-full flex px-16 text-gray-400 mt-8">
        <div className="w-3/6 flex justify-start" onClick={handleSliderPrev}>
          <IoArrowBackOutline className="w-8 h-8" />
        </div>
        <div className="w-3/6 flex justify-end" onClick={handleSliderNext}>
          <IoArrowForward className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

export default FirstBody;
