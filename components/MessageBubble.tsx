
import React from 'react';
import { Message, Role } from '../types';
import logo from '../src/assets/logo.png';

interface MessageBubbleProps {
  message: Message;
  showTypingIndicator?: boolean;
}

const FezIconSmall: React.FC = () => (
    <div className="w-8 h-8 rounded-full bg-[#c0392b] flex items-center justify-center flex-shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12V14C20 16.7614 17.7614 19 15 19H9C6.23858 19 4 16.7614 4 14V12Z" fill="white"/>
            <line x1="12" y1="5" x2="12" y2="11" stroke="black" strokeWidth="1.5"/>
            <circle cx="12" cy="4" r="2" fill="black"/>
        </svg>
    </div>
);


const TypingIndicator: React.FC = () => (
    <div className="flex items-center space-x-1 p-3">
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
    </div>
);


const MessageBubble: React.FC<MessageBubbleProps> = ({ message, showTypingIndicator = false }) => {
  const isModel = message.role === Role.Model;

  return (
    <div className={`flex items-end gap-2 ${isModel ? 'justify-start' : 'justify-end'}`}>
      {isModel && <img src={logo} alt="Si Tebib Logo" className="h-12 w-12 object-contain rounded-full" />}
      <div
        className={`max-w-[85%] px-4 py-3 rounded-2xl whitespace-pre-wrap ${
          isModel
            ? 'bg-white text-gray-800 rounded-bl-none shadow-sm'
            : 'bg-[#2c7a7b] text-white rounded-br-none shadow'
        }`}
      >
        {showTypingIndicator ? <TypingIndicator /> : message.content}
      </div>
    </div>
  );
};

export default MessageBubble;