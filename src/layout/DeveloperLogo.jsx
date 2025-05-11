import React from "react";

const DeveloperLogo = () => {
  return (
    <div className="flex items-center justify-center  rounded-2xl  ">
      <div className="text-center font-mono">
        <div className="flex items-center justify-center text-[15px] font-bold text-blue-900 tracking-tight ">
          <span className="text-4xl text-gray-50">{"{"}</span>
          <span className="mx-2">
            <span className="text-red-700">&lt;</span>
            <span className="text-green-500"> Farzam</span>
            <span className="text-red-700"> /&gt;</span>
          </span>
          <span className="text-4xl text-gray-50">{"}"}</span>
        </div>
      </div>
    </div>
  );
};

export default DeveloperLogo;
