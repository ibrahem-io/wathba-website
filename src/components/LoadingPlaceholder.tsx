import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Brain, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';

const LoadingPlaceholder: React.FC = () => {
  const { language } = useLanguage();

  const aiElements = [
    { icon: Brain, color: 'from-purple-500 to-pink-500', delay: '0s' },
    { icon: Zap, color: 'from-yellow-500 to-orange-500', delay: '0.2s' },
    { icon: Shield, color: 'from-green-500 to-emerald-500', delay: '0.4s' },
    { icon: TrendingUp, color: 'from-blue-500 to-indigo-500', delay: '0.6s' }
  ];

  return (
    <div className="min-h-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        {/* AI Loading Animation */}
        <div className="relative">
          {/* Central Brain */}
          <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <Brain className="h-10 w-10 text-white" />
          </div>
          
          {/* Orbiting Elements */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
            {aiElements.map((element, index) => {
              const Icon = element.icon;
              const angle = (index * 90) * (Math.PI / 180);
              const radius = 60;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={index}
                  className={`absolute w-8 h-8 bg-gradient-to-r ${element.color} rounded-full flex items-center justify-center animate-bounce`}
                  style={{
                    left: `calc(50% + ${x}px - 16px)`,
                    top: `calc(50% + ${y}px - 16px)`,
                    animationDelay: element.delay,
                    animationDuration: '1s'
                  }}
                >
                  <Icon className="h-4 w-4 text-white" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'ar' ? 'تحميل الذكاء الاصطناعي...' : 'Loading AI Systems...'}
          </h3>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          
          <p className="text-gray-600 text-sm">
            {language === 'ar' ? 'جاري تحضير المحتوى المتقدم...' : 'Preparing advanced content...'}
          </p>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingPlaceholder;