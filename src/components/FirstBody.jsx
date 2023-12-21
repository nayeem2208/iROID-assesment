import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import ImageCardFirst from "./imageCardFirst";
import { FirstBodyData } from "../datas/FirstBodyDatas";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";

function FirstBody() {
  return (
    <div
      className="h-96 flex flex-col justify-center items-center text-white text-center"
      style={{
        background:
          "linear-gradient(355deg, rgba(0,0,96,1) 25%, rgba(0,0,96,0.6) 100%)",
        height: "180vh",
        fontFamily:
          "-apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu",
      }}
    >
      <div className="w-4/6 flex justify-center">
        <p className="text-5xl font-semibold ">
          Check out our portfolio to discover how <br />
          we can make your product listings pop.
        </p>
      </div>
      <div className="w-3/5 mt-12 ">
        <p className="font-light">
          Like the content you see from our portfolio? Click the link below and
          fill out the <br /> contact form to receive a free, personalized demo.
        </p>
      </div>
      <button
        className="mt-12 h-10 w-48 text-sm font-semibold rounded-md flex justify-center items-center"
        style={{
          background:
            // "linear-gradient(90deg, rgba(63,94,251,1) 20%, rgba(252,70,107,1) 100%)"
            "linear-gradient(90deg, rgba(0,41,251,1) 20%, rgba(254,0,52,1) 100%)",
          filter: " saturate(70%)", // Adjust the percentage as needed
        }}
      >
        <p style={{ filter: "brightness(1) contrast(200%)" }}> CONTACT US</p>
        <HiOutlineArrowLongRight className="ml-2 w-8 h-6" />
      </button>
      <div className="flex mt-24">
        {FirstBodyData.map((data, index) => (
          <ImageCardFirst data={data} key={index} />
        ))}
      </div>
      <div className=" w-full flex px-16 text-gray-400 mt-8">
        <div className="w-3/6 flex justify-start">
          <IoArrowBackOutline className=" w-8 h-8" />
        </div>
        <div className="w-3/6 flex justify-end">
          <IoArrowForward className=" w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

export default FirstBody;
