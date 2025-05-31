import React from "react";

const Hero = () => {
  const Bio = () => (
    <div className="h-full flex flex-col justify-center items-center border-2 border-gray-600 p-8">
      <div>
        <h2 className=" text-4xl md:text-5xl lg:text-6xl font-bold text-gray-600 mb-4">
          <span>
            I Help founders turn Ideas
            <br /> into seamless
          </span>
          <span className="font-light"> digital experience</span>
        </h2>
        <h1 className="flex flex-wrap items-center gap-2 object-cover">
          Hello, I'm Aliyawar Farzam{" "}
          <img className="h-[20px] w-[30px] rounded-2xl" src="farzoo.png" />A
          front End Web Developer
        </h1>
      </div>
    </div>
  );

  return (
    <div
      id="hero-container"
      className="text-center flex flex-row h-[100vh] w-full justify-center items-center"
    >
      <div className="relative max-w-full overflow-hidden mx-auto flex-1">
        <Bio />
      </div>
      {/* <div className="flex-1 flex justify-center items-center">
        <img
          src="/farzoo.png" // ✅ Corrected image path if you're using Vite or Create React App
          alt="Aliyawar Farzam"
          className="rounded-full w-[400px] h-[400px] object-cover"
        />
      </div> */}
    </div>
  );
};

export default Hero;
