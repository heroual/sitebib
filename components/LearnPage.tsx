import React from 'react';
import AccordionItem from './AccordionItem';
import { BODY_SYSTEMS_CATEGORIES } from '../constants';

interface LearnPageProps {
  onBack: () => void;
}

const LearnPage: React.FC<LearnPageProps> = ({ onBack }) => {
  return (
    <div className="flex-grow overflow-y-auto p-4 md:p-8 w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          الرجوع إلى المحادثة
        </button>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">تعلم على صحتك مع السي طبيب</h2>
        <p className="text-gray-600">هنا غادي نكتشفو الأسرار ديال الجسم ديالنا بطريقة بسيطة</p>
      </div>

      <div className="space-y-8">
        {BODY_SYSTEMS_CATEGORIES.map((category, index) => (
          <div key={index}>
            <h3 className="text-2xl font-bold text-[#2c7a7b] mb-4 border-b-2 border-[#c0392b] pb-2">
              {category.systemDarijaName}
              <span className="text-lg text-gray-500 font-normal ml-2">({category.systemName})</span>
            </h3>
            <div className="space-y-4">
              {category.members.map((item, itemIndex) => (
                <AccordionItem
                  key={itemIndex}
                  title={item.title}
                  darijaTitle={item.darijaTitle}
                  icon={item.icon}
                >
                  {item.content}
                </AccordionItem>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;
