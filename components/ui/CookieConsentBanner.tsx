import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

const LOCAL_STORAGE_KEY = 'cookieConsentStatus';
type ConsentStatus = 'accepted' | 'rejected';

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentStatus = localStorage.getItem(LOCAL_STORAGE_KEY) as ConsentStatus | null;
    if (consentStatus !== 'accepted' && consentStatus !== 'rejected') {
      setIsVisible(true);
    }
  }, []);

  const handleSetConsent = (status: ConsentStatus) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, status);
    setIsVisible(false);
    console.log(`Cookie consent status: ${status}.`);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50">
      <button
        onClick={() => handleSetConsent('rejected')}
        className="absolute top-2 right-2 text-gray-400 hover:text-white p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
        aria-label="Cerrar aviso de cookies"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </button>
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-center sm:text-left flex-grow pr-8 sm:pr-6">
          <p>
            Usamos cookies para mejorar su experiencia de navegación en nuestra web, para mostrarle contenidos personalizados y para analizar el tráfico en nuestra web.
          </p>
          <Link to="/legal/politica-cookies" className="font-semibold underline hover:text-gray-300 transition-colors mt-1 inline-block">
            Ver política de cookies
          </Link>
        </div>
        <div className="flex gap-x-2 sm:gap-x-3 items-center shrink-0 mt-3 sm:mt-0">
          <Button
            onClick={() => handleSetConsent('accepted')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 sm:px-4 h-8 sm:h-9 !min-w-[80px] sm:!min-w-[100px]"
          >
            Aceptar
          </Button>
          <Button
            onClick={() => handleSetConsent('rejected')}
            className="bg-gray-500 hover:bg-gray-600 text-white text-xs px-3 sm:px-4 h-8 sm:h-9 !min-w-[80px] sm:!min-w-[100px]"
          >
            Rechazar
          </Button>
        </div>
      </div>
    </div>
  );
};