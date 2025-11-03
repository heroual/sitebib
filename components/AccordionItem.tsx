import React, { useState } from 'react';

interface AccordionItemProps {
  icon: string;
  title: string;
  darijaTitle: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ icon, title, darijaTitle, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800 focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
            <span className="text-2xl mr-4">{icon}</span>
            <div>
                <span className="text-lg">{darijaTitle}</span>
                <span className="text-sm text-gray-500 block">{title}</span>
            </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-4 pt-0 text-gray-700 text-base leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;