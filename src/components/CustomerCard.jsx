import React from "react";

function CustomerCard(props) {
  return (
    <div className="h-96 w-96 mx-2 flex flex-col justify-center items-center   ">
      <div className="rounded-full overflow-hidden w-40 h-40  drop-shadow-md">
        <img src={props.data.image} alt="" className=" w-full h-full" />
      </div>
      <p className="text-lg my-6">{props.data.name}</p>
      <p className="text-center leading-8">
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
        eiusmod tempor <br /> incididunt ut labore et dolore{" "}
      </p>
    </div>
  );
}

export default CustomerCard;
