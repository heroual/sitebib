
import React from 'react';
import { Language } from '../types';

interface LanguageSelectorProps {
  selectedLanguage: Language;
  onSelectLanguage: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selectedLanguage, onSelectLanguage }) => {
  const languages = [
    { key: Language.Darija, label: 'الدارجة' },
    { key: Language.Arabic, label: 'العربية' },
    { key: Language.French, label: 'Français' },
  ];

  return (
    <div className="flex justify-center space-x-2 mb-4">
      {languages.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onSelectLanguage(key)}
          className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
            selectedLanguage === key
              ? 'bg-[#c0392b] text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
