import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Award, CheckCircle, MapPin } from 'lucide-react';

const TrustIndicators: React.FC = () => {
  const { t } = useLanguage();

  const indicators = [
    {
      icon: MapPin,
      text: t('trust.residency'),
      color: 'bg-green-100 text-green-700',
      pulse: 'animate-pulse'
    },
    {
      icon: Award,
      text: t('trust.etimad'),
      color: 'bg-blue-100 text-blue-700',
      pulse: ''
    },
    {
      icon: CheckCircle,
      text: t('trust.citc'),
      color: 'bg-purple-100 text-purple-700',
      pulse: ''
    },
    {
      icon: Shield,
      text: t('trust.iso'),
      color: 'bg-orange-100 text-orange-700',
      pulse: ''
    }
  ];

  return (
    <div className="bg-white border-y border-gray-100 py-4">
      <div className="center-content">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 rtl:space-x-reverse px-4 py-2 rounded-lg border border-gray-200 transition-all hover:shadow-sm ${indicator.pulse}`}
            >
              <div className={`w-6 h-6 rounded-full ${indicator.color} flex items-center justify-center`}>
                <indicator.icon className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                {indicator.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;