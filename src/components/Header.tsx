import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe, Play, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/90 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex items-center justify-center lg:justify-start flex-1 lg:flex-none">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="relative">
                <img 
                  src="/ChatGPT Image Jul 7, 2025, 06_48_51 PM.png" 
                  alt="Wathba Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-bold text-gray-900">
                  {language === 'ar' ? 'وثبة' : 'Wathba'}
                </div>
                <div className="text-xs text-gray-500 -mt-1">
                  {language === 'ar' ? 'منصة الابتكار الحكومي' : 'Government Innovation Platform'}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 rtl:space-x-reverse flex-1">
            <button
              onClick={() => scrollToSection('hero')}
              className="relative text-gray-700 hover:text-indigo-600 px-4 py-2 text-sm font-medium transition-all duration-200 group"
            >
              {t('nav.home')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="relative text-gray-700 hover:text-indigo-600 px-4 py-2 text-sm font-medium transition-all duration-200 group"
            >
              {t('nav.solutions')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('agencies')}
              className="relative text-gray-700 hover:text-indigo-600 px-4 py-2 text-sm font-medium transition-all duration-200 group"
            >
              {t('nav.agencies')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('security')}
              className="relative text-gray-700 hover:text-indigo-600 px-4 py-2 text-sm font-medium transition-all duration-200 group"
            >
              {t('nav.security')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative text-gray-700 hover:text-indigo-600 px-4 py-2 text-sm font-medium transition-all duration-200 group"
            >
              {t('nav.contact')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Actions - Right aligned */}
          <div className="flex items-center justify-end space-x-4 rtl:space-x-reverse flex-1 lg:flex-none">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse hover:bg-gray-50 rounded-lg px-3 py-2"
            >
              <Globe className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                {language === 'ar' ? 'English' : 'العربية'}
              </span>
              <ChevronDown className="h-3 w-3 text-gray-500" />
            </Button>

            {/* Demo CTA - Desktop */}
            <div className="hidden md:block">
              <Button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center space-x-2 rtl:space-x-reverse"
                onClick={() => scrollToSection('contact')}
              >
                <Play className="h-4 w-4" />
                <span>{t('nav.demo')}</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:bg-gray-50 p-2 rounded-lg"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-lg">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-center text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="block w-full text-center text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors"
              >
                {t('nav.solutions')}
              </button>
              <button
                onClick={() => scrollToSection('agencies')}
                className="block w-full text-center text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors"
              >
                {t('nav.agencies')}
              </button>
              <button
                onClick={() => scrollToSection('security')}
                className="block w-full text-center text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors"
              >
                {t('nav.security')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-center text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors"
              >
                {t('nav.contact')}
              </button>
              <div className="pt-4 border-t border-gray-100">
                <Button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 rtl:space-x-reverse"
                  onClick={() => scrollToSection('contact')}
                >
                  <Play className="h-4 w-4" />
                  <span>{t('nav.demo')}</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;