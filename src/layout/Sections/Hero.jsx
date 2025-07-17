import Button from "../../components/Button";
import { useState } from "react";
import { FaRegCopy, FaArrowRight, FaDownload } from "react-icons/fa";
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
    <div className=" flex flex-col justify-center items-center text-sm font-semibold rounded-2xl  md:px-8 lg:px-10 xl:px-15">
      <div>
        <h2 className=" text-2xl md:text-5xl lg:text-5xl font-semibold text-gray-100 mb-4">
          <span>
            I collaborate with founders to shape
            <br />
            ideas into impactful
          </span>
          <span className="font-light "> digital products</span>
        </h2>
        <h1 className="flex flex-wrap items-center justify-center gap-2 py-[10px] object-cover  text-gray-100 text-sm md:text-2xl lg:text-2xl">
          Hello, I am Aliyawar Farzam
          <img
            className=" rounded-3xl object-cover max-h-[55] max-w-[80px] hidden lg:block"
            src="Far.JPG"
            width={70}
            height={55}
          />{" "}
          A front End Web Developer
        </h1>
      </div>
      <div className="flex  flex-col justify-center  items-center my-3 gap-2 md:flex-row">
        <Button
          caption="Lets Connect"
          Icon={FaArrowRight}
          onClick={() => {
            window.location.href = "#contacts";
          }}
        />
        <Button
          caption={copied ? "Email Copied!" : "Copy Email "}
          Icon={copied ? BiCheckDouble : FaRegCopy}
          onClick={EmailCopy}
        />

        <Button
          caption="Download CV"
          Icon={FaDownload}
          link="./AF_NEXP_FNT.pdf"
          download
        />
      </div>
    </div>
  );

  return (
    <div
      id="hero-container"
      className="text-center flex flex-col h-[100vh] w-[100%] justify-center items-center gap-2 md:flex-row md:gap-4  "
    >
      <div className="relative max-w-[100%]  max-h-[45%] flex-1    lg:h-[80%] mt-25">
        <Bio />
      </div>

      <SolarSystem />
    </div>
  );
};

export default Hero;
