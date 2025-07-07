import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Download, CheckCircle, TrendingUp, Users, Clock, Sparkles, Shield, Zap } from 'lucide-react';

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-green-100 rounded-full opacity-20 animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-indigo-50 text-indigo-700 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-indigo-200">
            <span className="text-lg">🇸🇦</span>
            <span>{language === 'ar' ? 'دعماً لرؤية المملكة العربية السعودية ٢٠٣٠' : 'Supporting Saudi Vision 2030'}</span>
            <Sparkles className="h-4 w-4" />
          </div>

          {/* Main Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-20 scale-110"></div>
              <img 
                src="/ChatGPT Image Jul 7, 2025, 06_48_51 PM.png" 
                alt="Wathba Platform" 
                className="relative w-32 h-32 md:w-40 md:h-40 object-contain bg-white rounded-3xl p-6 shadow-2xl border border-gray-100"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight max-w-5xl mx-auto">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-500 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center space-x-2 rtl:space-x-reverse"
              onClick={() => scrollToSection('solutions')}
            >
              <span>{t('hero.cta.primary')}</span>
              <ArrowRight className={`h-5 w-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-200 hover:shadow-lg flex items-center space-x-2 rtl:space-x-reverse"
              onClick={() => scrollToSection('contact')}
            >
              <Download className="h-5 w-5" />
              <span>{t('hero.cta.secondary')}</span>
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 hover:scale-105 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-gray-600">
                {language === 'ar' ? 'آمن ومعتمد' : 'Secure & Certified'}
              </span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Zap className="h-5 w-5 text-yellow-600" />
              <span className="text-sm font-medium text-gray-600">
                {language === 'ar' ? 'سريع وموثوق' : 'Fast & Reliable'}
              </span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">
                {language === 'ar' ? 'موثوق من ٥٠+ وكالة' : 'Trusted by 50+ Agencies'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 hidden lg:block">
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 animate-bounce">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium text-gray-700">
              {language === 'ar' ? '١٠٠٪ آمن' : '100% Secure'}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-8 hidden lg:block">
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 animate-bounce delay-1000">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <TrendingUp className="h-5 w-5 text-indigo-500" />
            <span className="text-sm font-medium text-gray-700">
              {language === 'ar' ? 'مدعوم بالذكاء الاصطناعي' : 'AI Powered'}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-1/4 hidden lg:block">
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 animate-bounce delay-500">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Clock className="h-5 w-5 text-purple-500" />
            <span className="text-sm font-medium text-gray-700">
              {language === 'ar' ? '٢٤/٧ متاح' : '24/7 Available'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;