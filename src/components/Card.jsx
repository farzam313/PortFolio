import React from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ photo, description }) => {
  return (
    <div
      id="Card"
      className="flex flex-col  w-[300px] h-[350px] mx-auto my-auto items-center border-1 border-green-400 rounded-lg p-4  "
    >
      <img src={photo} className="h-[200px] mx-auto" />
      <p className="mt-4  font-serif ">{description}</p>
      <div className="flex justify-end items-end w-[100%]">
        <Button
          caption={"See More"}
          Icon={FaArrowRight}
          className="flex flex-end mt-4 h-[30px] text-sm"
        />
      </div>
    </div>
  );
};

export default Card;
