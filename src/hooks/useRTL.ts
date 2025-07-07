import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Custom hook for RTL layout management
 */
export const useRTL = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (language === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
      body.classList.add('rtl');
      body.classList.remove('ltr');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
      body.classList.add('ltr');
      body.classList.remove('rtl');
    }

    // Update CSS custom properties for RTL
    if (language === 'ar') {
      html.style.setProperty('--text-align', 'right');
      html.style.setProperty('--flex-direction', 'row-reverse');
    } else {
      html.style.setProperty('--text-align', 'left');
      html.style.setProperty('--flex-direction', 'row');
    }
  }, [language]);

  return {
    isRTL: language === 'ar',
    textAlign: language === 'ar' ? 'right' : 'left',
    flexDirection: language === 'ar' ? 'row-reverse' : 'row'
  };
};