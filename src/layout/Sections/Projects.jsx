import Card from "../../components/Card";

const Projects = () => {
  const projects = [
    {
      photo: "../../brnwave.JPG",
      description: "AI Chatbot landing page.",
      fullDescription:
        "This project is a landing page for an AI chatbot that provides users with an interactive experience.",
      link: "https://farzamchat.netlify.app/",
    },
    {
      photo: "../../calc.JPG",
      description: "A simple calculator application.",
      fullDescription:
        "A basic calculator that performs arithmetic operations.",
      link: "https://calculat1t.netlify.app/",
    },
    {
      photo: "../../Ptflo.JPG",
      description: "Portfolio website showcasing projects.",
      fullDescription: "Personal portfolio website with projects and skills.",
      link: "https://alifarzam.netlify.app/",
    },
    {
      photo: "../../Book.jpg",
      description: "Book Sharing Platform.",
      fullDescription:
        "Enables users to share book, Magazines Journals and any e-reading materials, and access others.",
      link: "https://ebookswiki.netlify.app/",
    },
    // Add more projects as needed
  ];
  return (
    <>
      <h2 className="flex justify-center text-center font-bold text-2xl text-gray-50 align-center  p-4 rounded-lg mb-10">
        {" "}
        The Projects I have done.
      </h2>
      <div>
        <div className="flex flex-row flex-wrap gap-x-10 gap-y-3 my-auto items-center w-[100wh] justify-center  p-4 rounded-lg">
          {" "}
          {projects.map((project, index) => (
            <Card
              key={index}
              photo={project.photo}
              description={project.description}
              fullDescription={project.fullDescription}
              className={
                "flex flex-row w-[100%] lg:flex-col h-[22%] lg:w-[320px] lg:h-[400px] text-gray-50  items-center border-1 border-gray-400 rounded-lg min-w-[320px] cursor-pointer"
              }
              imageStyle={"w-[25%] lg:w-[200px] mx-auto  py-2 h-45 object-fit"}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
