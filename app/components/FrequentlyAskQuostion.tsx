import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const FrequentlyAskQuostion: React.FC = () => {
  const questions: { title: string; content: React.ReactNode }[] = [
    {
      title: "What topics are covered in the masterclass?",
      content:
        "Key topics include Product Strategy, Market Research and Analysis, Product Analytics, and Finding Product-Market Fit.",
    },

    {
      title: "WWho is the masterclass for?",
      content: (
        <ul className="list-decimal list-inside">
          <li>
            Professionals transitioning into product management from any field.
          </li>
          <li>
            Individuals planning to build their own products or businesses.
          </li>
        </ul>
      ),
    },
    {
      title: "How are the masterclasses structured?",
      content:
        "Each cohort runs for two months, with weekly 3-hour classes. Cohorts are capped at 10 participants for a focused, personalized experience.",
    },
    {
      title: "What to expect post-masterclass",
      content: (
        <ol className="list-disc list-inside mt-2">
          <li>Deep understanding of product management principles.</li>
          <li>
            Confidence to launch your own product or excel in a product
            management role.
          </li>
          <li>Continued mentorship to guide your journey.</li>
        </ol>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Open clicked question, close if already open
  };

  return (
    <div className="w-full">
      {questions.map((q, index) => (
        <div key={index} className="border-b pb-10">
          <button
            onClick={() => toggleQuestion(index)}
            className="flex items-center justify-between w-full py-4 px-6 md:text-lg font-medium text-gray-700 focus:outline-none"
          >
            <span className="text-TextDarkBlue font-semibold">{q.title}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronRight color="#2b3674" />
            </motion.div>
          </button>
          {openIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-4 text-TextDarkBlue"
            >
              {q.content}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FrequentlyAskQuostion;
