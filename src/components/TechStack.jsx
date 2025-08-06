import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const TechStackIcons = () => {
  return (
    <div className="flex flex-wrap gap-4 text-4xl">
      <FaReact title="React.JS" style={{ color: "#61DAFB" }} />{" "}
      {/* React Blue */}
      <SiTailwindcss title="TailwindCSS" style={{ color: "#06B6D4" }} />{" "}
      {/* Tailwind Cyan */}
      <FaNodeJs title="Node.js" style={{ color: "#339933" }} />{" "}
      {/* Node Green */}
      <SiExpress title="Express.JS" style={{ color: "white" }} />{" "}
      {/* Express Black */}
      <SiMongodb title="MongoDB" style={{ color: "#47A248" }} />{" "}
      {/* MongoDB Green */}
      <SiMysql title="MySQL" style={{ color: "#4479A1" }} /> {/* MySQL Blue */}
      <FaGitAlt title="Git" style={{ color: "#F05032" }} /> {/* Git Orange */}
      <SiNextdotjs title="Next.js" style={{ color: "#000000" }} />{" "}
      {/* Next.js Black */}
    </div>
  );
};

export default TechStackIcons;
