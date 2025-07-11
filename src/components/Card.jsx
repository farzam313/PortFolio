import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import PopUp from "./PopUp";

const Card = ({ photo, description, fullDescription, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        id="Card"
        className={`flex flex-row w-[100%] lg:flex-col h-[22%] lg:w-[320px] lg:h-[350px]  items-center border-1 border-gray-400 rounded-lg my-1 min-w-[320px]  ${className}`}
      >
        <img src={photo} className="h-[70%] lg:h-[200px] mx-auto py-3" />
        <div className="flex flex-col items-center justify-between w-[50%] h-[90%] lg:h-[150px] lg:w-[300px] mx-auto">
          <p className="lg:mt-4  lg:font-serif font-light p-3 ">
            {description}
          </p>
          <div className="flex items-end justify-center lg:w-full w-[100%] pb-2 ">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              caption={"View Details"}
              Icon={FaArrowRight}
              className="flex flex-end h-[30px] text-sm  "
            />
          </div>
        </div>
      </div>

      <PopUp
        isOpen={isOpen}
        togglePopup={setIsOpen}
        description={fullDescription}
        photo={photo}
      />
    </>
  );
};

export default Card;
