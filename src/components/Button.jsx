import React from "react";

const Button = ({ Icon, className, caption, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`bg-green-500 hover:bg-green-300 text-white 
        font-bold py-2 px-4 rounded-3xl ${className}`}
      >
        <div className="flex items-center gap-2">
          {caption && <span>{caption}</span>}
          {Icon && <Icon className="inline-block" />}
        </div>
      </button>
    </div>
  );
};

export default Button;
