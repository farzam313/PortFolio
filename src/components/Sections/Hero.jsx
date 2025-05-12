import React from "react";

const Hero = () => {
  const bio = () => (
    <div>
      <p>Hi, I am Aliyawar Farzam, front End web developer.</p>
    </div>
  );
  return (
    <div
      id="hero-container"
      className="text-center  flex flex-row h-[100vh] w-[100%] justify-center items-center"
    >
      <div className="relative max-w-full overflow-hidden margin-auto flex-1 ">
        {<bio />}
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src="f.png"
          alt="Aliyawar Farzam"
          className="rounded-full w-[200px] h-[200px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
