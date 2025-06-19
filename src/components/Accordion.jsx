import React, { useState } from 'react';

const Accordion = () => {
  const [accordion, setAccordion] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      question: "What is a component?",
      answer: "A component is a reusable piece of UI in React."
    },
    {
      question: "What is useState?",
      answer: "useState is a Hook that allows you to manage state in a functional component."
    },
    {
      question: "What is JSX?",
      answer: "JSX stands for JavaScript XML. It lets you write HTML in React."
    },
    {
      question: "What is a prop in React?",
      answer: "Props are inputs to components. They are passed down from parent to child."
    }
  ];

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-2xl space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Frequently Asked Questions</h2>

        {faqs.map((item, index) => (
          <div
            key={index}
            className=" bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => setAccordion(accordion === index ? null : index)}
              className="cursor-pointer w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 focus:outline-none"
            >
              <span>{item.question}</span>
              <span className="text-2xl transition-transform duration-300">
                {accordion === index ? '−' : '+'}
              </span>
            </button>

            <div
              className={`px-6 pt-0 pb-4 text-gray-600 text-base transition-all duration-300 ease-in-out ${
                accordion === index ? 'block animate-fade-in' : 'hidden'
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
