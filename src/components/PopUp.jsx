import { useEffect } from "react";

const PopUp = ({ isOpen, togglePopup, description, photo }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      togglePopup(false);
    }
  };

  const handleCloseClick = () => {
    togglePopup(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed z-50 left-0 top-0 w-full h-full bg-opacity-50 flex items-center justify-center  backdrop-blur-sm bg-white/20 p-12"
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="mb-6">
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
        <div className="flex justify-end">
          <button
            onClick={handleCloseClick}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Close ❌
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
