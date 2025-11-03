import React, { useState, useEffect, useRef } from 'react';
import { Chat } from '@google/genai';
import { Language, Message, Role } from './types';
import { createChatSession } from './services/geminiService';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import InputBar from './components/InputBar';
import Disclaimer from './components/Disclaimer';
import LanguageSelector from './components/LanguageSelector';
import DailyTip from './components/DailyTip';
import LearnPage from './components/LearnPage';
import HealthMapPage from './components/HealthMapPage';
import { DAILY_HEALTH_TIPS } from './constants';

type Page = 'chat' | 'learn' | 'map';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: Role.Model,
      content: "Salam! Ana Si Tebib. Fash neqder n3awnek lyoum? (Bonjour! Je suis Si Tebib. Comment puis-je vous aider aujourd'hui?)",
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>(Language.Darija);
  const [error, setError] = useState<string | null>(null);
  const [dailyTip, setDailyTip] = useState<string | null>(null);
  const [page, setPage] = useState<Page>('chat');
  const chatSessionRef = useRef<Chat | null>(null);

  useEffect(() => {
    chatSessionRef.current = createChatSession();
  }, []);

  useEffect(() => {
    // Show daily tip only on the chat page
    if (page === 'chat') {
      const lastTipDate = localStorage.getItem('lastTipDate');
      const today = new Date().toDateString();

      if (lastTipDate !== today) {
        const tips = DAILY_HEALTH_TIPS;
        const randomIndex = Math.floor(Math.random() * tips.length);
        setDailyTip(tips[randomIndex]);
        localStorage.setItem('lastTipDate', today);
      }
    } else {
      setDailyTip(null); // Hide tip if navigating away
    }
  }, [page]);

  const handleSendMessage = async (userInput: string) => {
    if (!userInput.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    const userMessage: Message = { role: Role.User, content: userInput };
    setMessages(prev => [...prev, userMessage]);

    try {
      if (!chatSessionRef.current) {
        throw new Error("Chat session not initialized.");
      }
      
      const stream = await chatSessionRef.current.sendMessageStream({
        message: `IMPORTANT: User's preferred language is ${language}. Please respond in ${language}.\n\nUser message: "${userInput}"`
      });

      let modelResponse = '';
      let functionCallDetected = false;
      setMessages(prev => [...prev, { role: Role.Model, content: '' }]);

      for await (const chunk of stream) {
        modelResponse += chunk.text;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = modelResponse;
          return newMessages;
        });
        
        if (chunk.functionCalls) {
            if (chunk.functionCalls.some(fc => fc.name === 'findNearbyHealthFacilities')) {
                functionCallDetected = true;
            }
        }
      }
      
      if (functionCallDetected) {
        // Let the user read the text response for a moment before switching pages
        setTimeout(() => {
            setPage('map');
        }, 1500);
      }

    } catch (err) {
      const errorMessage = 'A sidi/lalla, sem7ouli, kayn chi mochkil technique. 3awd chwia men be3d.';
      setError(errorMessage);
      setMessages(prev => [...prev, { role: Role.Model, content: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#F8F3ED] font-sans">
      <Header onNavigate={setPage} currentPage={page} />
      {page === 'chat' ? (
        <>
          <div className="flex-grow overflow-hidden flex flex-col items-center w-full pt-4">
            <LanguageSelector selectedLanguage={language} onSelectLanguage={setLanguage} />
            <div className="w-full max-w-4xl flex-grow flex flex-col p-4 min-h-0">
                <ChatWindow messages={messages} isLoading={isLoading} />
            </div>
          </div>
           <div className="sticky bottom-0 left-0 right-0 bg-[#F8F3ED] pt-2 pb-4 px-4">
             <div className="w-full max-w-4xl mx-auto">
                <InputBar onSendMessage={handleSendMessage} isLoading={isLoading} />
                {error && <p className="text-center text-red-500 mt-2">{error}</p>}
                <Disclaimer />
             </div>
          </div>
          {dailyTip && <DailyTip tip={dailyTip} onClose={() => setDailyTip(null)} />}
        </>
      ) : page === 'learn' ? (
        <LearnPage onBack={() => setPage('chat')} />
      ) : (
        <HealthMapPage onBack={() => setPage('chat')} />
      )}
    </div>
  );
};

export default App;