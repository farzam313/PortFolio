import PlusSvg from "../assets/svg/PlusSvg";

const Section = ({ id, children, className = " " }) => {
  return (
    <section
      id={id}
      className={` flex flex-col  min-h-screen   px-4 m-[8px] border-l-1 border-r-1 min-w-[350px] border-gray-500    text-green-100 my-0 ${className}`}
    >
      <div
        id="children"
        className=" flex-1 flex items-center flex-col justify-center mx-0  max-w-full   my-auto"
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
