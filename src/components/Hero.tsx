import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Sparkles, Brain, Zap, Shield, TrendingUp, Users, Clock, CheckCircle, Play, Download, Globe, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const heroWords = language === 'ar' 
    ? ['الذكاء الاصطناعي', 'الابتكار', 'المستقبل', 'التطوير']
    : ['Innovation', 'AI Solutions', 'Digital Future', 'Excellence'];

  const fullTitle = language === 'ar' 
    ? 'ريادة المستقبل الرقمي'
    : 'Pioneering The Digital Future';

  // Typewriter effect
  useEffect(() => {
    const currentWord = heroWords[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (typedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setTypedText(currentWord.slice(0, typedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % heroWords.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isTyping, currentWordIndex, heroWords]);

  const innovations = [
    { 
      icon: Brain, 
      text: language === 'ar' ? 'ذكاء اصطناعي متقدم' : 'Advanced AI',
      color: 'from-purple-500 to-pink-500',
      description: language === 'ar' ? 'حلول ذكية مبتكرة' : 'Smart innovative solutions'
    },
    { 
      icon: Globe, 
      text: language === 'ar' ? 'رؤية عالمية' : 'Global Vision',
      color: 'from-blue-500 to-indigo-500',
      description: language === 'ar' ? 'خبرة محلية وعالمية' : 'Local & global expertise'
    },
    { 
      icon: Zap, 
      text: language === 'ar' ? 'تحول رقمي' : 'Digital Transformation',
      color: 'from-yellow-500 to-orange-500',
      description: language === 'ar' ? 'تقنيات المستقبل' : 'Future technologies'
    },
    { 
      icon: Star, 
      text: language === 'ar' ? 'التميز والجودة' : 'Excellence & Quality',
      color: 'from-green-500 to-emerald-500',
      description: language === 'ar' ? 'معايير عالمية' : 'World-class standards'
    }
  ];

  const clientSectors = [
    { name: language === 'ar' ? 'الشركات الكبرى' : 'Corporate Enterprises', count: '500+' },
    { name: language === 'ar' ? 'الوكالات الحكومية' : 'Government Agencies', count: '50+' },
    { name: language === 'ar' ? 'المؤسسات التعليمية' : 'Educational Institutions', count: '200+' },
    { name: language === 'ar' ? 'المنظمات غير الربحية' : 'Non-Profit Organizations', count: '100+' }
  ];

  return (
    <section className="relative min-h-full flex items-center justify-center overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-transparent to-blue-100/20 animate-pulse"></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full animate-float delay-500"></div>

        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-indigo-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Neural Network Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="neural" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="currentColor" className="text-indigo-600">
                  <animate attributeName="r" values="1;3;1" dur="3s" repeatCount="indefinite" />
                </circle>
                <line x1="50" y1="50" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-indigo-400" opacity="0.3" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-indigo-400" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Innovation Badge */}
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-indigo-200 hover:shadow-lg transition-all duration-300">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>{language === 'ar' ? 'نمزج بين الابتكار المحلي والعالمي' : 'Blending Local & Global Innovation'}</span>
            <Brain className="h-4 w-4" />
          </div>

          {/* Main Heading with Typewriter Effect */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {fullTitle}
              </span>
            </h1>
            
            {/* Dynamic Typewriter Text */}
            <div className="h-16 flex items-center justify-center">
              <p className="text-2xl md:text-3xl font-semibold text-gray-700">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {typedText}
                </span>
                <span className="animate-pulse text-indigo-600">|</span>
              </p>
            </div>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'ar' 
                ? 'نمزج بين الابتكار المحلي والعالمي لتقديم حلول تقنية متطورة تدعم رؤية المملكة 2030 وتحقق التحول الرقمي المنشود'
                : 'We blend local and global innovation to deliver cutting-edge technology solutions that support Saudi Vision 2030 and achieve digital transformation'
              }
            </p>
          </div>

          {/* Innovation Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
            {innovations.map((innovation, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${innovation.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <innovation.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  {innovation.text}
                </h3>
                <p className="text-xs text-gray-600">
                  {innovation.description}
                </p>
              </div>
            ))}
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3 rtl:space-x-reverse relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Zap className="h-5 w-5 group-hover:animate-pulse" />
              <span>{language === 'ar' ? 'ابدأ رحلة التحول' : 'Start Your Transformation'}</span>
              <ArrowRight className={`h-5 w-5 group-hover:translate-x-1 transition-transform ${language === 'ar' ? 'rotate-180' : ''}`} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-10 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>{language === 'ar' ? 'استكشف خدماتنا' : 'Explore Our Services'}</span>
            </Button>
          </div>

          {/* Client Sectors Showcase */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 max-w-5xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {language === 'ar' ? 'من نخدم' : 'Who We Serve'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clientSectors.map((sector, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    {sector.count}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {sector.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Indicators with Animation */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 opacity-70">
            <div className="flex items-center space-x-2 rtl:space-x-reverse group">
              <CheckCircle className="h-4 w-4 text-green-600 group-hover:animate-pulse" />
              <span className="text-sm font-medium text-gray-600">
                {language === 'ar' ? 'معتمد حكومياً' : 'Government Certified'}
              </span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse group">
              <Shield className="h-4 w-4 text-blue-600 group-hover:animate-pulse" />
              <span className="text-sm font-medium text-gray-600">
                {language === 'ar' ? 'آمن ومشفر' : 'Secure & Encrypted'}
              </span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse group">
              <Star className="h-4 w-4 text-yellow-600 group-hover:animate-pulse" />
              <span className="text-sm font-medium text-gray-600">
                {language === 'ar' ? 'جودة عالمية' : 'World-Class Quality'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Status Cards */}
      <div className="absolute top-1/4 left-8 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 animate-bounce hover:scale-110 transition-transform cursor-pointer">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              {language === 'ar' ? 'نشط الآن' : 'Active Now'}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-8 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 animate-bounce delay-1000 hover:scale-110 transition-transform cursor-pointer">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Brain className="h-4 w-4 text-purple-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-700">
              {language === 'ar' ? 'ابتكار مستمر' : 'Continuous Innovation'}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-1/4 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 animate-bounce delay-500 hover:scale-110 transition-transform cursor-pointer">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Globe className="h-4 w-4 text-blue-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-700">
              {language === 'ar' ? 'رؤية عالمية' : 'Global Vision'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;