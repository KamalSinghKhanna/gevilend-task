import React from "react";
import Image from "next/image";

const HalfCircle = ({ img, text, bgColor }) => {
     const containerStyle = {
       backgroundColor: bgColor,
     };
  return (
    <div
      className={`rounded-l-full flex py-5 px-5 justify-between mr-5`}
      style={containerStyle}
    >
      <div className="w-32 h-32 rounded-full">
        <Image
          src={img}
          alt="half-img"
          width={500}
          height={500}
          className="w-40 h-40 rounded-full"
        />
      </div>
      <div className="text-white flex flex-col justify-around items-end">
        <span className="text-2xl font-extrabold sm:text-4xl">{text}</span>
        <span className="underline text-lg sm:text-xl">shop now</span>
      </div>
    </div>
  );
};

export default HalfCircle;
