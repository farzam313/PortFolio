import Section from "../../layout/Section";
import PopUp from "../../components/PopUp";
import Card from "../../components/Card";

const Projects = () => {
  return (
    <>
      <h2 className="flex justify-center text-center "></h2>
      <Card
        photo="../../construction.jpg"
        description="Project Description"
        fullDescription="This is a detailed description of the project."
        className="bg-gray-100 shadow-lg text-black"
      />
    </>
  );
};

export default Projects;
