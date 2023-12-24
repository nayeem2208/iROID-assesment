import React from "react";

function Subscribe() {
  return (
    <div
      className="w-full h-80 mb-24 flex flex-col justify-center items-center text-white relative overflow-hidden"
      style={{ backgroundColor: "#000060" }}
    >
      <p className="text-4xl text-center">Subscribe to Solution Newsletters</p>
      <p className="font-light mt-6 text-center">
        Get the latest insights and research delivered straight to your inbox.
      </p>
      <button
        className="mt-8 h-10 w-48  rounded-md flex justify-center items-center"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,41,251,0.8) 20%, rgba(254,0,52,0.8) 100%)",
          filter: "saturate(70%)",
        }}
      >
        SUBSCRIBE
      </button>
      <div
        className="bg-gray-300   absolute w-48 h-48"
        style={{
          top: "-3.5vw",
          left: "0.2vw",
          transform: "rotate(24deg)",
          borderRadius: "55px",
          filter: "opacity(0.3)",
        }}
      ></div>
      <div
        className="bg-gray-300 rounded-full   absolute sm:w-8 sm:h-8"
        style={{
          top: "6vw",
          left: "20vw",
          transform: "rotate(20deg)",
          filter: "opacity(0.3)",
        }}
      ></div>
      <div
        className="bg-gray-300 rounded-full   absolute sm:w-24 sm:h-24"
        style={{
          top: "13vw",
          left: "12vw",
          transform: "rotate(20deg)",
          filter: "opacity(0.3)",
        }}
      ></div>

      <div
        className="bg-gray-300   absolute sm:w-48 sm:h-48"
        style={{
          top: "4vw",
          right: "12vw",
          transform: "rotate(24deg)",
          borderRadius: "55px",
          filter: "opacity(0.3)",
        }}
      ></div>
      <div
        className="bg-gray-300 rounded-full   absolute w-8 h-8"
        style={{
          top: "12vw",
          right: "3vw",
          transform: "rotate(20deg)",
          filter: "opacity(0.3)",
        }}
      ></div>
      <div
        className="bg-gray-300 rounded-full   absolute w-24 h-24"
        style={{
          bottom: "-4vw",
          right: "3vw",
          transform: "rotate(20deg)",
          filter: "opacity(0.3)",
        }}
      ></div>
    </div>
  );
}

export default Subscribe;
