import React from "react";
import { SolutionsData } from "../../datas/solutionsData";
import SolutionCards from "../SolutionCards";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";

function All() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8 mt-20">
        {" "}
        {SolutionsData.map((data, index) => (
          <SolutionCards data={data} key={index} />
        ))}
      </div>
      <div
        className="flex flex-wrap items-center mt-8 justify-center md:mt-14 "
        style={{ color: "#FF4729" }}
      >
        <TfiArrowLeft
          className="w-6 h-6 sm:w-11 sm:h-11 mx-3 mb-3 md:mb-0"
          style={{ filter: "opacity(0.8)" }}
        />
        <div className="flex flex-wrap justify-center">
          {Array.from({ length: 10 }, (_, index) => (
            <button
              key={index}
              className="px-2 sm:py-1 md:py-2 my-1 mx-3 text-xs border border-solid border-[#FF4729]"
              style={{ borderWidth: 1.2 }}
            >
             {index<9?'0':null} {index + 1}
            </button>
          ))}
          <button
            className="px-2 my-1 mx-3 text-xs border border-solid border-[#FF4729]"
            style={{ borderWidth: 1.2 }}
          >
            ...
          </button>
        </div>
        <TfiArrowRight
          className="w-6 h-6 sm:w-11 sm:h-11 mx-3 mb-3 md:mb-0"
          style={{ filter: "opacity(0.8)" }}
        />
      </div>
    </div>
  );
}

export default All;
