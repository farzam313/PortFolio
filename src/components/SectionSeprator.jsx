import React from "react";
import PlusSvg from "./svg/PlusSvg";

const SectionSeprator = () => {
  return (
    <>
      <div className="flex items-center w-full ">
        <PlusSvg />
        <div className="h-[2px] flex-1 bg-gray-500 " />
        <PlusSvg />
      </div>
    </>
  );
};

export default SectionSeprator;
