import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, ChevronDown, Zap, Brain } from 'lucide-react';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <header className="bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-2xl">
                <img 
                  src="/ChatGPT Image Jul 7, 2025, 06_48_51 PM.png" 
                  alt="Wathba AI" 
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {language === 'ar' ? 'وثبة' : 'Wathba'}
                </h1>
                <div className="flex items-center space-x-1">
                  <Brain className="h-4 w-4 text-indigo-600" />
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                    AI
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium">
                {language === 'ar' ? 'منصة الذكاء الاصطناعي الحكومي' : 'Government AI Platform'}
              </p>
            </div>
          </div>

          {/* Center - AI Status Indicator */}
          <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full border border-green-200">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Zap className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">
                {language === 'ar' ? 'الذكاء الاصطناعي نشط' : 'AI Systems Online'}
              </span>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse hover:bg-gray-50 rounded-lg px-3 py-2 border border-gray-200"
            >
              <Globe className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                {language === 'ar' ? 'English' : 'العربية'}
              </span>
              <ChevronDown className="h-3 w-3 text-gray-500" />
            </Button>

            {/* AI Demo Button */}
            <Button
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center space-x-2 rtl:space-x-reverse"
            >
              <Brain className="h-4 w-4" />
              <span>{language === 'ar' ? 'جرب الذكاء الاصطناعي' : 'Try AI Demo'}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;