import PlusSvg from "../assets/svg/PlusSvg";

const Section = ({ id, children, className = " " }) => {
  return (
    <section
      id={id}
      className={` flex flex-col  min-h-screen   px-4 m-[8px] border-l-2 border-r-2 border-gray-500 pt-20 my-0 ${className}`}
    >
      {/* <div className="flex flex-col h-full align-center justify-content-center ">
        <PlusSvg className="" />
        <div className="flex-1 w-[1px] top-0 m-auto min-h-screen   z-10 bg-zinc-700" />
      </div> */}

      <div className="flex-1 max-w-5xl my-4 mx-auto">{children}</div>
      {/* <div>
        <PlusSvg className="" />
        <div className=" flex-1 w-[1px] top-0 m-auto min-h-screen right-8 bg-zinc-700  " />
      </div> */}

      {/* <div className="flex flex-row align-items-center justify-center w-full ">
        <PlusSvg className="" />
        <div class="h-[2px] w-full bg-gray-500"></div>

        <PlusSvg className="" />
      </div> */}
    </section>
  );
};

export default Section;
