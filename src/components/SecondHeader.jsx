import React from "react";

function SecondHeader() {
  return (
    <div className="bg-slate-50 h-12 flex justify-center items-center" >
      <p className=" text-sm font-medium" style={{ color: "#242424" }}>
        Innovative augmented reality solutions for eCommerce businesses -
        <span
          className="underline underline-offset-4"
          style={{ color: "#FF4729" }}
        >
          View our visual gallery.{" "}
        </span>{" "}
        For a free demo, write to us: <span className="underline underline-offset-4"
          style={{ color: "#FF4729" }}> hello@tulfa.com</span>
      </p>
    </div>
  );
}

export default SecondHeader;
