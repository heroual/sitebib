import React from 'react';

interface HeaderProps {
    onNavigate: (page: 'chat' | 'learn' | 'map') => void;
    currentPage: 'chat' | 'learn' | 'map';
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  return (
    <header className="w-full bg-white shadow-md p-4 flex items-center justify-between border-b-4 border-[#c0392b]">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Si Tebib Logo" className="h-20 w-20 object-contain" />
        <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Si Tebib</h1>
            <p className="text-sm md:text-base text-gray-600 italic">“The Moroccan doctor who heals with science, humor, and heart.”</p>
            <p className="text-sm md:text-base text-gray-600" dir="rtl">"الطبيب المغربي الذي يشفي بالعلم والفكاهة والقلب."</p>
        </div>
      </div>
      {currentPage === 'chat' && (
         <div className="flex items-center space-x-2">
            <button
                onClick={() => onNavigate('learn')}
                className="px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
            >
                تعلم على جسمك
            </button>
            <button
                onClick={() => onNavigate('map')}
                className="px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
            >
                خريطة الصحة
            </button>
         </div>
      )}
    </header>
  );
};

export default Header;