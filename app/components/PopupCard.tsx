import React from "react";
import { HiX } from "react-icons/hi";

interface PopupCardProps {
  paragra?: string;
  heading?: string;
  subheading?: string;
  fontSize?: string;
  isOpen: boolean;
  onClose: () => void;
}

const PopupCard: React.FC<PopupCardProps> = ({
  isOpen,
  onClose,
  paragra,
  heading,
  subheading,
  fontSize,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black shadow-md bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-md py-20 px-12 relative">
        <button
          onClick={onClose}
          className="absolute top-8 right-6 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <HiX size={30} color="darkblue" />
        </button>
        <h1
          className={`text-center text-TextDarkBlue font-bold mb-4 ${
            fontSize === "large" ? "text-5xl" : "text-2xl"
          }`}
        >
          {heading}
        </h1>
        <p className="text-TextDarkBlue text-center pt-6">{paragra}</p>
        <h1 className="text-xl text-TextDarkBlue font-bold pt-8 text-center">
          {subheading}
        </h1>
      </div>
    </div>
  );
};

export default PopupCard;
