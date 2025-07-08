import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, ChevronDown, Zap, Brain, Menu, X, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  // Scroll-triggered header background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`transition-all duration-300 sticky top-0 z-50 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
        : 'bg-white/90 backdrop-blur-lg border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo Section */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <img 
                  src="/ChatGPT Image Jul 7, 2025, 06_48_51 PM.png" 
                  alt="Wathba Consulting" 
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  {language === 'ar' ? 'وثبة' : 'Wathba'}
                </h1>
                <div className="flex items-center space-x-1">
                  <Sparkles className="h-4 w-4 text-indigo-600 animate-pulse" />
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                    {language === 'ar' ? 'استشارات' : 'Consulting'}
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium">
                {language === 'ar' ? 'ريادة المستقبل الرقمي' : 'Pioneering Digital Future'}
              </p>
            </div>
          </div>

          {/* Center - Innovation Status Indicator */}
          <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full border border-green-200 hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Brain className="h-4 w-4 text-green-600 group-hover:animate-pulse" />
              <span className="text-sm font-medium text-green-700">
                {language === 'ar' ? 'الابتكار نشط' : 'Innovation Active'}
              </span>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Enhanced Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="group flex items-center space-x-2 rtl:space-x-reverse hover:bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 hover:border-indigo-300 transition-all duration-300"
            >
              <Globe className="h-4 w-4 text-gray-600 group-hover:text-indigo-600 group-hover:animate-pulse" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-700">
                {language === 'ar' ? 'English' : 'العربية'}
              </span>
              <ChevronDown className="h-3 w-3 text-gray-500 group-hover:text-indigo-500 group-hover:rotate-180 transition-transform duration-300" />
            </Button>

            {/* Enhanced CTA Button */}
            <Button
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2 rtl:space-x-reverse relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Zap className="h-4 w-4 group-hover:animate-pulse relative z-10" />
              <span className="relative z-10">{language === 'ar' ? 'اكتشف الابتكار' : 'Experience Innovation'}</span>
            </Button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-lg animate-fade-in">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <div className="text-center py-4">
                <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2 rounded-full">
                  <Brain className="h-4 w-4 text-indigo-600" />
                  <span className="text-sm font-medium text-indigo-700">
                    {language === 'ar' ? 'قائمة الخدمات' : 'Services Menu'}
                  </span>
                </div>
              </div>
              
              <Button
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 rtl:space-x-reverse transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                <span>{language === 'ar' ? 'ابدأ رحلة التحول' : 'Start Your Journey'}</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;