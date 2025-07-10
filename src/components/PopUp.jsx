import { useEffect } from "react";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const PopUp = ({ isOpen, togglePopup, description, photo }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = "hidden";
      setTimeout(() => setIsAnimating(true), 100);
    } else {
      setIsAnimating(false);
      document.body.style.overflow = "auto";
      setTimeout(() => setShouldRender(false), 300); // Match the duration of the exit animation
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Cleanup function

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      togglePopup(false);
    }
  };

  const handleCloseClick = () => {
    togglePopup(false);
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed z-50 left-0 top-0 w-full h-full flex items-center justify-center backdrop-blur-[1px] bg-white/10 p-12 transition-all duration-50 ease-in-out ${
        isAnimating ? "opacity-100" : "opacity-95"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-white p-3 rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-all duration-800 ease-in-out transform z-100 ${
          isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="mb-6">
          <div className="flex justify-end mb-4   p-2">
            <button
              onClick={handleCloseClick}
              className=" px-4 py-2 text-red-500 hover:cursor-pointer  transition-colors"
            >
              <IoCloseSharp size={24} />
            </button>
          </div>
          {photo && (
            <img
              src={photo}
              alt="Service"
              className="w-full h-90 object-cover rounded-lg mb-4"
            />
          )}
          {description && (
            <p className="text-lg text-black leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
