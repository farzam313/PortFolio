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
    <div className=" flex flex-col items-center justify-items-center w-full  h-full gap-y-15 ">
      <h2 className="flex justify-center text-center font-bold text-2xl  text-gray-50 my-3 align-center p-4 rounded-lg ">
        {" "}
        My services
      </h2>
      <div className="flex flex-row flex-wrap gap-x-10 gap-y-3 items-center w-[100wh] justify-center p-4 rounded-lg">
        {services.map((service) => (
          <Card
            photo={service.photo}
            description={service.description}
            fullDescription={service.fullDescription}
            key={service.id}
            className={
              " flex flex-row w-[100%] lg:flex-col h-[22%] lg:w-[320px] lg:h-[400px] text-gray-50  items-center border-1 border-gray-400 rounded-lg my-auto min-w-[320px] hover:cursor-pointer "
            }
            imageStyle={"w-[25%] lg:w-[200px] mx-auto  py-2 h-45 object-fit"}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
