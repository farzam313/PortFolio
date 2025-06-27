import Button from "../../components/Button";
import { FaArrowRight } from "react-icons/fa";
import Card from "../../components/Card";

const Services = () => {
  return (
    <>
      <h1 className="flex justify-center text-center  my-10">
        Services-Under Construction...
      </h1>
      {/* <img
        src="../../construction.jpg"
        alt="Under Construction"
        className="w-[50%] h-[65%] mx-auto object-cover"
      /> */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-30">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Services;
