import Button from "../../components/Button";
import { useState } from "react";
import { FaRegCopy, FaArrowRight } from "react-icons/fa";
import { BiCheckDouble } from "react-icons/bi";
import SolarSystem from "../../components/Solar";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const EmailCopy = () => {
    const email = "info@farzam.com";

    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  };

  const Bio = () => (
    <div className=" flex flex-col justify-center items-center text-sm font-semibold py-8 rounded-2xl mt-[100px] md:px-16 lg:px-20 xl:px-24 2xl:px-28">
      <div>
        <h2 className=" text-2xl md:text-5xl lg:text-6xl font-semibold text-gray-100 mb-4">
          <span>
            I collaborate with founders to shape
            <br />
            ideas into impactful
          </span>
          <span className="font-light"> digital products</span>
        </h2>
        <h1 className="flex flex-wrap items-center justify-center gap-2 py-[6px] object-cover  overflow-hidden text-gray-100 text-sm md:text-2xl lg:text-2xl">
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
      <div className="flex  justify-center items-center mt-4 gap-4">
        <Button caption="Lets Connect" Icon={FaArrowRight} />
        <Button
          caption={copied ? "Copied!" : "info@farzam.com"}
          Icon={copied ? BiCheckDouble : FaRegCopy}
          onClick={EmailCopy}
        />
      </div>
    </div>
  );

  return (
    <div
      id="hero-container"
      className="text-center flex flex-col h-[100vh] w-[100%] justify-center items-center gap-2 md:flex-row md:gap-4  "
    >
      <div className="relative max-w-full overflow-hidden mx-auto flex-1">
        <Bio />
      </div>
      <div className="flex justify-center items-center rounded-2xl my-5 max-h-[20%] gap-2 lg:mt-[50px]">
        <SolarSystem />
      </div>
    </div>
  );
};

export default Hero;
