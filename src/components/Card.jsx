import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import PopUp from "./PopUp";

const Card = ({
  photo,
  description,
  fullDescription,
  className,
  imageStyle,
  link,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        id="Card"
        onClick={() => setIsOpen(!isOpen)}
        cursor="pointer"
        className={`  ${className}`}
      >
        <img src={photo} className={`${imageStyle}`} alt="Card Image" />
        <div className="flex flex-col items-center py-3 justify-between w-[50%] h-[90%] lg:h-[150px] lg:w-[300px] mx-auto  ">
          <p className="lg:mt-4  lg:font-serif font-light p-3 ">
            {description}
          </p>
          <div className="flex justify-center lg:w-full w-[100%]  lg:mt-15 ">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              caption={"View Details"}
              Icon={FaArrowRight}
              className=" flex flex-end h-[30px] text-sm  "
            />
          </div>
        </div>
      </div>

      <PopUp
        isOpen={isOpen}
        togglePopup={setIsOpen}
        description={fullDescription}
        photo={photo}
        link={link}
      />
    </>
  );
};

export default Card;
