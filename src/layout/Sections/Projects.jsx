import Card from "../../components/Card";

const Projects = () => {
  const projects = [
    {
      photo: "../../Brainwave.jpg",
      description: "AI Chatbot landing page.",
      fullDescription:
        "This project is a landing page for an AI chatbot that provides users with an interactive experience.",
    },
    {
      photo: "../../Calculator.jpg",
      description: "A simple calculator application.",
      fullDescription:
        "A basic calculator that performs arithmetic operations.",
    },
    {
      photo: "../../Portfilio.jpg",
      description: "Portfolio website showcasing projects.",
      fullDescription: "Personal portfolio website with projects and skills.",
    },
    {
      photo: "../../Book.jpg",
      description: "Book Sharing Platform.",
      fullDescription:
        "Enables users to share book, Magazines Journals and any e-reading materials, and access others.",
    },
    // Add more projects as needed
  ];
  return (
    <>
      <h2 className="flex justify-center text-center "></h2>
      <div>
        <div className="flex flex-row flex-wrap gap-x-8 h-[100vh] items-center w-[100wh] justify-center ">
          {projects.map((project, index) => (
            <Card
              key={index}
              photo={project.photo}
              description={project.description}
              fullDescription={project.fullDescription}
              className={
                " flex flex-row w-[100%] lg:flex-col h-[22%] lg:w-[320px] lg:h-[400px]  items-center border-1 border-gray-400 rounded-lg my-1 min-w-[320px]"
              }
              imageStyle={"h-[70%] lg:h-[200px] mx-auto py-2"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
