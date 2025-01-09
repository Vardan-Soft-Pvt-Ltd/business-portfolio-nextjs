import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b pb-10  w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 px-4 text-[16px] md:text-lg font-medium text-gray-700 focus:outline-none"
      >
        <span className="text-TextDarkBlue font-semibold">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronRight color="#2b3674" />
        </motion.div>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-4 text-TextDarkBlue"
        >
          {content}
        </motion.div>
      )}
    </div>
  );
};

export default AccordionItem;
