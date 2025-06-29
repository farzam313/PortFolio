import React from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ photo, description }) => {
  return (
    <div
      id="Card"
      className="flex flex-row w-[100%] lg:flex-col h-[220px] lg:w-[300px] lg:h-[350px]  items-center border-1 border-green-400 rounded-lg p-4   "
    >
      <img src={photo} className="h-[100px] lg:h-[200px] " />
      <div className="flex flex-col items-center justify-between w-[100%] h-[100%] lg:h-[150px] lg:w-[300px] border-2 border-blue-600 ">
        <p className="lg:mt-4  lg:font-serif font-light ">{description}</p>
        <div className="flex items-end justify-end lg:w-full w-[100%] border-amber-500 border-1 ">
          <Button
            caption={"See More"}
            Icon={FaArrowRight}
            className="flex flex-end h-[30px] text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
