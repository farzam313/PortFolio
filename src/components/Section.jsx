import PlusSvg from "./svg/PlusSvg";

const Section = ({ id, children, className = " " }) => {
  return (
    <section id={id} className={` flex gap-4 min-h-screen px-4 ${className}`}>
      <div className="flex flex-col h-full align-center justify-content-center ">
        <PlusSvg className="" />
        <div className=" w-[1px] top-0 m-auto min-h-screen   z-10 bg-zinc-700" />
      </div>

      <div className="max-w-5xl mx-auto">{children}</div>
      <div>
        <PlusSvg className="" />
        <div className=" w-[1px] top-0 m-auto min-h-screen right-8 bg-zinc-700  " />
      </div>
    </section>
  );
};

export default Section;
