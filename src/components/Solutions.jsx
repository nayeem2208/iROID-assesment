import React from "react";
import SolutionCards from "./SolutionCards";
import { SolutionsData } from "../datas/solutionsData";

function Solutions() {
  return (
    <div className=" text-gray-800 mb-48">
      <div className="mt-24  flex justify-center">
        <p className="font-semibold text-4xl ">Our Solutions</p>
      </div>
      <div className="flex justify-center mt-8 ">
        <button
          className="mx-4 border-2 px-6 py-1"
          style={{
            borderRadius: "9999px",
            // borderImage: 'linear-gradient(96deg, rgba(255,71,41,1) 0%, rgba(240,240,240,1) 100%)',
            borderImageSlice: "1",
          }}
        >
          All
        </button>

        <button className="mx-4 ">CGI</button>
        <button className="mx-4 ">Enhanced Brand Content</button>
        <button className="mx-4 ">Product Photography</button>
        <button className="mx-4 ">Creative Services</button>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-20">
        {SolutionsData.map((data,index)=>(
            <SolutionCards  data={data} key={index}/>
        ))}
        
      </div>
    </div>
  );
}

export default Solutions;
