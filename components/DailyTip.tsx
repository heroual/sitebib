import React, { useState, useEffect } from 'react';
import logo from '../src/assets/logo.png';

const CloseIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);


interface DailyTipProps {
  tip: string;
  onClose: () => void;
}

const DailyTip: React.FC<DailyTipProps> = ({ tip, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate in after a short delay
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Wait for animation to finish before calling parent's onClose
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-md p-4 bg-white rounded-xl shadow-2xl border-l-4 border-[#c0392b] transition-all duration-300 ease-in-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
      }
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <img src={logo} alt="Si Tebib Logo" className="h-12 w-12 object-contain rounded-full" />
        </div>
        <div className="ml-3 w-0 flex-1 pt-0.5">
          <p className="text-lg font-bold text-gray-900">نصيحة اليوم</p>
          <p className="mt-1 text-base text-gray-700">{tip}</p>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            onClick={handleClose}
            className="inline-flex text-gray-400 rounded-md hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2c7a7b]"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyTip;