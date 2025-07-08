import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CalendlyWidgetProps {
  url?: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
  onEventScheduled?: (event: any) => void;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({
  url = import.meta.env.VITE_CALENDLY_LINK || 'https://calendly.com/wathbah-consultation',
  prefill,
  onEventScheduled
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for Calendly events
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        if (e.data.event === 'calendly.event_scheduled' && onEventScheduled) {
          onEventScheduled(e.data.payload);
        }
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, [onEventScheduled]);

  const calendlyUrl = new URL(url);
  
  // Add prefill parameters
  if (prefill) {
    if (prefill.name) calendlyUrl.searchParams.set('name', prefill.name);
    if (prefill.email) calendlyUrl.searchParams.set('email', prefill.email);
    
    // Add custom answers
    if (prefill.customAnswers) {
      Object.entries(prefill.customAnswers).forEach(([key, value]) => {
        calendlyUrl.searchParams.set(`a${key}`, value);
      });
    }
  }

  // Set language preference
  calendlyUrl.searchParams.set('locale', language === 'ar' ? 'ar' : 'en');

  return (
    <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '630px' }}>
      <iframe
        src={calendlyUrl.toString()}
        width="100%"
        height="100%"
        frameBorder="0"
        title={language === 'ar' ? 'حجز موعد استشارة' : 'Schedule Consultation'}
      />
    </div>
  );
};

export default CalendlyWidget;