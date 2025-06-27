import React from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

const Card = () => {
  return (
    <div
      id="Card"
      className="flex flex-col  w-[300px] h-[350px] mx-auto my-auto items-center border-1 border-green-400 rounded-lg p-4 "
    >
      <img src="../../construction.jpg" className="h-[200px] mx-auto" />
      <p className="mt-4">
        any explanation or details will be placed here.....
      </p>
      <Button
        caption={"See More"}
        Icon={FaArrowRight}
        className="flex flex-end mt-4"
      />
    </div>
  );
};

export default Card;
