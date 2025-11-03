import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div className="text-center text-xs text-gray-500 mt-3 p-2 rounded-lg bg-yellow-100 border border-yellow-300">
      <p>
        <strong>Disclaimer:</strong> Si Tebib provides information for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
      </p>
      <p className="mt-2" dir="rtl">
        <strong>إخلاء مسؤولية:</strong> يقدم سي طبيب المعلومات لأغراض تعليمية فقط وهي ليست بديلاً عن المشورة الطبية المتخصصة أو التشخيص أو العلاج. اطلب دائمًا مشورة طبيبك أو مقدم رعاية صحية مؤهل آخر بشأن أي أسئلة قد تكون لديك بخصوص حالة طبية.
      </p>
    </div>
  );
};

export default Disclaimer;
