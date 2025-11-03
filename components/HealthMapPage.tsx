import React, { useState, useEffect } from 'react';

interface HealthMapPageProps {
  onBack: () => void;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center p-8">
        <div className="w-16 h-16 border-4 border-[#2c7a7b] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const HealthMapPage: React.FC<HealthMapPageProps> = ({ onBack }) => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus('error');
      setError('خاصية تحديد الموقع غير مدعومة في المتصفح ديالك.');
      return;
    }

    // Give a bit of time for the page transition to finish before asking for permission
    const timer = setTimeout(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCoords({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                });
                setStatus('success');
            },
            (err) => {
                setStatus('error');
                if (err.code === err.PERMISSION_DENIED) {
                setError('رفضتي تعطينا الموقع ديالك. باش نخدمو هاد الخاصية، خاصك تسمح لينا نعرفو فين نتا.');
                } else {
                setError('ماقدرناش نحددو الموقع ديالك. عاود حاول من بعد.');
                }
            },
            { timeout: 10000 } // Add a timeout for the request
        );
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
            <div className="text-center">
                <LoadingSpinner />
                <p className="text-lg text-gray-600">كنقلبو على الموقع ديالك...</p>
            </div>
        );
      case 'error':
        return (
          <div className="text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            <h3 className="font-bold text-xl mb-2">أُوпс! وقع شي مشكل</h3>
            <p>{error}</p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=hospitals+or+pharmacies+in+Morocco"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-[#c0392b] text-white font-bold py-2 px-4 rounded-full hover:bg-[#a53125] transition-colors"
            >
              بحث على المستشفيات فالخريطة
            </a>
          </div>
        );
      case 'success':
        if (coords) {
          const mapUrl = `https://www.google.com/maps/search/?api=1&query=hospitals+or+pharmacies&ll=${coords.latitude},${coords.longitude}`;
          return (
             <div className="text-center bg-green-100 border border-green-400 text-green-800 px-4 py-6 rounded-lg">
                <h3 className="font-bold text-2xl mb-2">لقينا الموقع ديالك!</h3>
                <p className="mb-4">ورك على البوطونة لتحت باش تشوف المستشفيات و الصيدليات اللي قراب ليك.</p>
                <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#2c7a7b] text-white font-bold py-3 px-6 text-lg rounded-full hover:bg-[#225e5e] transition-colors shadow-lg"
                >
                    فتح الخريطة 
                </a>
             </div>
          );
        }
        return null;
    }
  };

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
        <h2 className="text-3xl font-bold text-gray-800 mb-2">خريطة الصحة المغربية</h2>
        <p className="text-gray-600">هنا تقدر تلقى أقرب مركز صحي ليك.</p>
      </div>
      
      <div className="flex justify-center items-center">
          {renderContent()}
      </div>

    </div>
  );
};

export default HealthMapPage;