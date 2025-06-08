import Button from "../../components/Button";
import { useState } from "react";
import React from "react";
import { FaRegCopy, FaArrowRight } from "react-icons/fa";
import { BiCheckDouble } from "react-icons/bi";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const EmailCopy = () => {
    const email = "info@farzam.com";

    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  const Bio = () => (
    <div className="h-full flex flex-col justify-center items-center border-2 border-gray-600 p-8">
      <div>
        <h2 className=" text-4xl md:text-5xl lg:text-4xl font-bold text-gray-100 mb-4">
          <span>
            I collaborate with founders to shape
            <br />
            ideas into impactful
          </span>
          <span className="font-light"> digital products</span>
        </h2>
        <h1 className="flex flex-wrap items-center justify-center gap-2 py-[6px] object-cover  overflow-hidden text-gray-100 ">
          Hello, I'm Aliyawar Farzam
          <img
            className=" rounded-3xl object-cover max-h-[55] max-w-[80px]"
            src="Far.JPG"
            width={70}
            height={55}
          />
          A front End Web Developer
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
        <div className="flex  justify-center items-center mt-4 gap-4">
          <Button caption="Lets Connect" Icon={FaArrowRight} />
          <Button
            caption={copied ? "Copied!" : "info@farzam.com"}
            Icon={copied ? BiCheckDouble : FaRegCopy}
            onClick={EmailCopy}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
