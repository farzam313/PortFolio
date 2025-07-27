import React from "react";

const Button = ({ Icon, className, caption, onClick, link, download }) => {
  if (link) {
    return (
      <a
        href={link}
        download={download}
        className="bg-green-500 hover:bg-green-300 text-white 
      font-bold py-2 px-4 rounded-3xl flex items-center gap-2"
      >
        {caption && <span>{caption}</span>}
        {Icon && <Icon className="inline-block" />}
      </a>
    );
  }
  return (
    <div>
      <button
        onClick={onClick}
        className={`bg-green-500 hover:bg-green-300 text-white 
        font-bold py-2 px-4 rounded-3xl ${className}`}
      >
        <div className="flex items-center gap-2 justify-center">
          {caption && <span>{caption}</span>}
          {Icon && <Icon className="inline-block" />}
          {link && <a href={link}></a>}
        </div>
      </button>
    </div>
  );
};

export default Button;
