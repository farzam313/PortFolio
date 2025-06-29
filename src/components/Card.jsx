import React from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ photo, description }) => {
  return (
    <div
      id="Card"
      className="flex flex-row w-[100%] lg:flex-col h-[22%] lg:w-[300px] lg:h-[350px]  items-center border-1 border-gray-400 rounded-lg my-1  "
    >
      <img src={photo} className="w-[30%] lg:h-[200px] mx-auto " />
      <div className="flex flex-col items-center justify-between w-[50%] h-[90%] lg:h-[150px] lg:w-[300px] mx-auto">
        <p className="lg:mt-4  lg:font-serif font-light ">{description}</p>
        <div className="flex items-end justify-center lg:w-full w-[100%]  ">
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
