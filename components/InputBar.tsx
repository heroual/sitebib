
import React, { useState } from 'react';

interface InputBarProps {
  onSendMessage: (input: string) => void;
  isLoading: boolean;
}

const InputBar: React.FC<InputBarProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask Si Tebib..."
        disabled={isLoading}
        className="flex-grow p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2c7a7b] transition duration-200"
      />
      <button
        type="submit"
        disabled={isLoading || !input.trim()}
        className="bg-[#c0392b] text-white p-3 rounded-full hover:bg-[#a53125] focus:outline-none focus:ring-2 focus:ring-[#c0392b] focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200"
      >
        {isLoading ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        )}
      </button>
    </form>
  );
};

export default InputBar;
