import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe, Play } from 'lucide-react';
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
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <img 
                  src="/ChatGPT Image Jul 7, 2025, 06_48_51 PM.png" 
                  alt="Wathba Logo" 
                  className="w-10 h-10 object-contain bg-gray-50 rounded-lg p-1"
                />
                <div>
                  <div className="text-xl font-semibold text-gray-900">
                    {language === 'ar' ? 'وثبة' : 'Wathba'}
                  </div>
                  <div className="text-xs text-gray-500">
                    {language === 'ar' ? 'منصة الابتكار الحكومي' : 'Government Innovation Platform'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 rtl:space-x-reverse">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              {t('nav.solutions')}
            </button>
            <button
              onClick={() => scrollToSection('agencies')}
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              {t('nav.agencies')}
            </button>
            <button
              onClick={() => scrollToSection('security')}
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              {t('nav.security')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse hover:bg-gray-50"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">
                {language === 'ar' ? 'English' : 'العربية'}
              </span>
            </Button>

            {/* Demo CTA - Desktop */}
            <div className="hidden md:block">
              <Button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 rtl:space-x-reverse"
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
                className="hover:bg-gray-50"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-2 pt-4 pb-3 space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-right text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="block w-full text-right text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {t('nav.solutions')}
              </button>
              <button
                onClick={() => scrollToSection('agencies')}
                className="block w-full text-right text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {t('nav.agencies')}
              </button>
              <button
                onClick={() => scrollToSection('security')}
                className="block w-full text-right text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {t('nav.security')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-right text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {t('nav.contact')}
              </button>
              <div className="pt-2">
                <Button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium flex items-center justify-center space-x-2 rtl:space-x-reverse"
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