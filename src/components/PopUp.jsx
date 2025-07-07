import { useEffect } from "react";

const PopUp = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isOpen]);
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };
  return (
    <>
      {isOpen && (
        <div
          className=" fixed z-100 left-0 top-0 w-[100vw] h-[100vh] overflow-auto backdrop-blur-sm bg-white/20  p-12"
          onClick={handleBackdropClick}
        >
          <div className=" bg-white p-12 rounded-lg shadow-lg w-80% mx-auto my-20">
            <img
              src="../../public/construction.jpg"
              alt="Pop Up"
              className="w-32 h-32 object-cover"
            />
            <p className="text-black">Full detail of the project</p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-red-500 text-white p-2 rounded"
            >
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
