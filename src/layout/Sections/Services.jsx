import Button from "../../components/Button";
import { FaArrowRight } from "react-icons/fa";
import Card from "../../components/Card";

const Services = () => {
  const services = [
    {
      id: 1,
      photo: "../../../Dashboard.jpg",
      description:
        "I will design, develop and deploy any types of dashboard for you.",
      fullDescription:
        "I will design, develop and deploy any types of dashboard for you. I have experience in creating user-friendly and visually appealing dashboards that provide valuable insights and analytics.",
    },
    {
      id: 2,
      photo: "../../../mobileDesign.jpg",
      description:
        "I will create a responsive mobile design for your application.",
      fullDescription:
        "I will create a responsive mobile design for your application. I specialize in designing mobile interfaces that are intuitive and engaging, ensuring a seamless user experience across all devices.",
    },
    {
      id: 3,
      photo: "../../../page.jpg",
      description:
        "I will build a landing page that converts visitors into customers.",
      fullDescription:
        "I will build a landing page that converts visitors into customers. I focus on creating landing pages that are optimized for conversions, with clear calls to action and compelling content.",
    },
    {
      id: 4,
      photo: "../../../GC.jpg",
      description: "I will provide graphic design services for your brand.",
      fullDescription:
        "I will provide graphic design services for your brand, including logo design, branding materials, and marketing collateral. My designs are tailored to reflect your brand's identity.",
    },
  ];

  return (
    <div className="flex flex-row flex-wrap gap-x-15 h-[100vh] items-center w-[100wh] justify-center ">
      {services.map((service) => (
        <Card
          photo={service.photo}
          description={service.description}
          fullDescription={service.fullDescription}
          key={service.id}
        />
      ))}
    </div>
  );
};

export default Services;
