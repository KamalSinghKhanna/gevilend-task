// Dropdown.js
import React from "react";

const Dropdown = ({ show, content, shop }) => {
  return show ? (
    <>
      {shop ? (
        <div
          className="bg-[#323233] pl-8 pr-16 py-5 absolute z-10 list-none text-white font-bold flex flex-col items-start gap-2"
          style={{
            boxShadow: "0 2px 10px #00000026",
            transition: "opacity 0.7s ease, transform 0.3s ease",
          }}
        >
          {content.map((item, i) => (
            <li key={i} className="dropdown-item">
              {item}
            </li>
          ))}
        </div>
      ) : (
        <div className="bg-transparent py-8 absolute w-screen left-[-12.2rem] z-10 list-none text-white font-bold ">
          <div className=" bg-[#323233] w-full px-10 flex gap-96 pb-10">
            {/* <div className="flex w-full"> */}
            <ul className="flex flex-col gap-1">
              <li className="dropdown-item text-2xl mb-3">appreal</li>
              <li className="dropdown-item">heritage women`s tanks</li>
              <li className="dropdown-item">Premium tees</li>
              <li className="dropdown-item">Premium zip hoodies</li>
              <li className="dropdown-item">heritage hoodies</li>
              <li className="dropdown-item">heritage tees</li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="dropdown-item text-2xl mb-3">home</li>
              <li className="dropdown-item">phone cases</li>
              <li className="dropdown-item">framed posters</li>
              <li className="dropdown-item">posters</li>
            </ul>
            {/* </div> */}
          </div>
        </div>
      )}
    </>
  ) : null;
};

export default Dropdown;
