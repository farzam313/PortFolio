import React from "react";
import TechStackIcons from "../../components/TechStack";

const About = () => {
  return (
    <div className="text-center flex  flex-col lg:flex-row gap-10 items-center justify-center  text-gray-100 font-sans">
      <div className="flex flex-col lg:w-[50%] border-2 border-green-400 p-4 rounded-lg items-left  gap-4">
        <p className="flex items-center justify-center   p-4 font-bold text-3xl rounded-lg">
          About me.
        </p>
        <h2 className="flex items-center justify-center   p-4 rounded-lg text-2xl font-bold gap-2 ">
          I am Aliyawar Farzam a full stack web developer.
        </h2>
        <p className="flex items-center justify-center   p-4 rounded-lg lg:text-1xl font-bold">
          I have a passion for creating dynamic and responsive web applications.
          With a strong foundation in both front-end and back-end technologies,
          I strive to deliver seamless user experiences and robust
          functionality. My goal is to continuously learn and adapt to the
          ever-evolving landscape of web development.{" "}
        </p>
        <div className="flex justify-center items-center">
          <TechStackIcons />
        </div>
      </div>

      <div className="flex  border-2 border-green-400 rounded-lg p-1 justify-center items-center">
        <img
          src="../../Farzoo.jpg"
          height={500}
          width={700}
          className="flex justify-center items-center border-1 border-gray-400 rounded-lg  object-cover "
          alt="About Us"
        />
      </div>
    </div>
  );
};

export default About;
