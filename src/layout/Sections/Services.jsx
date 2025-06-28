import Button from "../../components/Button";
import { FaArrowRight } from "react-icons/fa";
import Card from "../../components/Card";

const Services = () => {
  const services = [
    {
      photo: "../../../Dashboard.jpg",
      description:
        "I will design, develop and deploy any types of dashboard for you.",
    },
    {
      photo: "../../../mobileDesign.jpg",
      description:
        "I will create a responsive mobile design for your application.",
    },
    {
      photo: "../../../page.jpg",
      description:
        "I will build a landing page that converts visitors into customers.",
    },
    {
      photo: "../../../GC.jpg",
      description: "I will provide graphic design services for your brand.",
    },
  ];
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-2 mt-45">
        {services.map((service) => (
          <Card photo={service.photo} description={service.description} />
        ))}
      </div>
    </>
  );
};

export default Services;
