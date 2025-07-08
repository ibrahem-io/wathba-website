import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="center-content py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <img 
                src="/ChatGPT Image Jul 7, 2025, 06_48_51 PM.png" 
                alt="Wathbah Consulting Logo" 
                className="w-8 h-8 object-contain bg-gray-800 rounded-lg p-1"
              />
              <div className="text-xl font-semibold text-white">
                {language === 'ar' ? 'وثبة للاستشارات' : 'Wathbah Consulting'}
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center">
                <Globe className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
                <Mail className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('solutions')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('nav.solutions')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('security')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('nav.security')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('nav.about')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">info@wathbaconsulting.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">+966 11 456 7890</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">Riyadh, Saudi Arabia</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Security Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Wathbah Consulting. {t('footer.rights')}.
          </p>
          <div className="flex items-center space-x-4 rtl:space-x-reverse mt-4 md:mt-0">
            <span className="text-gray-300 text-sm">
              {language === 'ar' ? 'شركة سعودية للاستشارات' : 'Saudi Consulting Company'}
            </span>
            <div className="w-6 h-6 bg-green-700 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">SA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;