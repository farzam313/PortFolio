import PlusSvg from "../assets/svg/PlusSvg";

const Section = ({ id, children, className = " " }) => {
  return (
    <section
      id={id}
      className={` flex flex-col  min-h-screen   px-4 m-[8px] border-l-2 border-r-2 min-w-[350px] border-gray-500  text-gray-100 my-0 ${className}`}
    >
      <div id="children" className=" flex-1 mx-0  max-w-full  my-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
