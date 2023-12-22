import React from "react";
import SolutionCards from "./SolutionCards";
import { SolutionsData } from "../datas/solutionsData";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";

function Solutions() {
  return (
    <div className=" text-gray-800 mb-12">
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
      <div className="flex justify-center mt-14 " style={{color:'#FF4729'}}>
      <TfiArrowLeft className="w-11 h-11 mx-3 " style={{filter:'opacity(0.8)' }}/>
      <div className="flex">
        <button className=" px-2 my-1 mx-3 text-xs " style={{borderColor:'#FF4729',borderWidth:1.2}}>01</button>
        <button className=" px-2 my-1 mx-3 text-xs" style={{borderColor:'#FF4729',borderWidth:1.2}}>02</button>
        <button className=" px-2 my-1 mx-3 text-xs" style={{borderColor:'#FF4729',borderWidth:1.2}}>03</button>
        <button className=" px-2 my-1 mx-3 text-xs" style={{borderColor:'#FF4729',borderWidth:1.2}}>04</button>
        <button className=" px-2 my-1 mx-3 text-xs" style={{borderColor:'#FF4729',borderWidth:1.2}}>05</button>
        <button className=" px-2 my-1 mx-3 text-xs" style={{borderColor:'#FF4729',borderWidth:1.2}}>06</button>
        <button className=" px-2 my-1 mx-3 text-xs" style={{borderColor:'#FF4729',borderWidth:1.2}}>07</button>
        <button className=" px-2 my-1 mx-3 text-xs" style={{borderColor:'#FF4729',borderWidth:1.2}}>08</button>
        <button className=" px-2 my-1 mx-3 text-xs" style={{borderColor:'#FF4729',borderWidth:1.2}}>09</button>
        <button className=" px-2 my-1 mx-3 text-xs" style={{borderColor:'#FF4729',borderWidth:1.2}}>10</button>
        <button className=" px-2 my-1 mx-3 text-xs" style={{borderColor:'#FF4729',borderWidth:1.2}}>...</button>
      </div>
      <TfiArrowRight className="w-11 h-11 mx-3 " style={{filter:'opacity(0.8)' }}/>
      </div>
    </div>
  );
}

export default Solutions;
