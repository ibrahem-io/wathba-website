import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Download, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    { icon: TrendingUp, text: t('hero.benefit1') },
    { icon: Clock, text: t('hero.benefit2') },
    { icon: CheckCircle, text: t('hero.benefit3') },
    { icon: Users, text: t('hero.benefit4') }
  ];

  return (
    <section id="hero" className="bg-gray-50 min-h-screen flex items-center relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Side */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            <div className="inline-block bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              🇸🇦 {language === 'ar' ? 'دعماً لرؤية المملكة العربية السعودية ٢٠٣٠' : 'Supporting Saudi Vision 2030'}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
              {t('hero.subtitle')}
            </p>
            
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-colors"
                onClick={() => scrollToSection('solutions')}
              >
                {t('hero.cta.primary')}
                <ArrowRight className={`ml-2 h-5 w-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg font-medium rounded-lg transition-colors"
                onClick={() => scrollToSection('contact')}
              >
                <Download className="mr-2 h-5 w-5" />
                {t('hero.cta.secondary')}
              </Button>
            </div>
          </div>

          {/* Visual Elements Side */}
          <div className="relative order-1 lg:order-2">
            <div className="flex items-center justify-center">
              <img 
                src="/ChatGPT Image Jul 7, 2025, 06_48_51 PM.png" 
                alt="Wathba Platform" 
                className="w-full max-w-md h-auto object-contain bg-gray-100 rounded-2xl p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;