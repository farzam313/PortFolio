import React from "react";
import PlusSvg from "../assets/svg/PlusSvg";

const SectionSeprator = () => {
  return (
    <div className="min-w-[365px]  ">
      <div className="flex items-center w-full ">
        <PlusSvg className="ml-[3px]" />
        <div className="h-[1px] flex-1 bg-gray-400  " />
        <PlusSvg className="mr-[3px]" />
      </div>
    </div>
  );
};

export default SectionSeprator;
