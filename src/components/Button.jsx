import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = () => {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <div className="flex items-center gap-2">
          Lets Connect
          <FaArrowRight className="inline-block mr-2" />
        </div>
      </button>
    </div>
  );
};

export default Button;
