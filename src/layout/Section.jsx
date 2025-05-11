import PlusSvg from "../assets/svg/PlusSvg";

const Section = ({ id, children, className = " " }) => {
  return (
    <section
      id={id}
      className={` flex flex-col  min-h-screen   px-4 m-[8px] border-l-2 border-r-2 border-gray-500 pt-20 my-0 ${className}`}
    >
      <div className="flex-1 max-w-5xl my-4 mx-auto">{children}</div>
    </section>
  );
};

export default Section;
