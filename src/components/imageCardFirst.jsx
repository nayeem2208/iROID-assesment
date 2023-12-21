import React from "react";


function ImageCardFirst(props) {
  console.log(props.data.image);
  return (
    <div
      className="h-96 w-64 mx-3 rounded overflow-hidden relative flex flex-col justify-end"
      style={{
        backgroundImage: `url(${props.data.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full absolute " style={{ zIndex: "2" }}>
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(356deg, rgba(4,4,160,0.5) 0%, rgba(0,0,65,0) 100%)",
          }}
        ></div>
      </div>
      <div className="bottom-0.5 mb-4" style={{ zIndex: "3" }}>
        <p className="mb-2 font-semibold">AR/VR/XR Solution</p>
        <button
          type="button font-medium"
          class="text-white bg-indigo-400 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
        >
          Play Now
        </button>
      </div>
    </div>
  );
}

export default ImageCardFirst;
