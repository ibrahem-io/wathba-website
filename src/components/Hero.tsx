import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Sparkles, Brain, Zap, Shield, TrendingUp, Users, Clock, CheckCircle, Play, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  const aiFeatures = [
    { 
      icon: Brain, 
      text: language === 'ar' ? 'ذكاء اصطناعي متقدم' : 'Advanced AI',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Zap, 
      text: language === 'ar' ? 'معالجة فورية' : 'Instant Processing',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      icon: Shield, 
      text: language === 'ar' ? 'أمان مطلق' : 'Total Security',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: TrendingUp, 
      text: language === 'ar' ? 'تحليلات ذكية' : 'Smart Analytics',
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const metrics = [
    { value: '99.9%', label: language === 'ar' ? 'دقة الذكاء الاصطناعي' : 'AI Accuracy' },
    { value: '<2s', label: language === 'ar' ? 'زمن الاستجابة' : 'Response Time' },
    { value: '50+', label: language === 'ar' ? 'وكالة حكومية' : 'Gov Agencies' },
    { value: '24/7', label: language === 'ar' ? 'متاح دائماً' : 'Always Available' }
  ];

  return (
    <section className="relative min-h-full flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
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
                <line x1="50" y1="50" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-indigo-400" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural)" />
          </svg>
        </div>

        {/* Floating AI Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* AI Badge */}
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-indigo-200">
            <Brain className="h-4 w-4" />
            <span>{language === 'ar' ? 'مدعوم بالذكاء الاصطناعي المتقدم' : 'Powered by Advanced AI'}</span>
            <Sparkles className="h-4 w-4 animate-pulse" />
          </div>

          {/* Main Heading with AI Animation */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {language === 'ar' ? 'الذكاء الاصطناعي' : 'AI-Powered'}
              </span>
              <br />
              <span className="text-gray-800">
                {language === 'ar' ? 'للحكومة الذكية' : 'Smart Government'}
              </span>
            </h1>
            
            {/* Typing Animation Effect */}
            <div className="h-8 flex items-center justify-center">
              <p className="text-xl text-gray-600 font-medium">
                {language === 'ar' ? 'تحويل الخدمات الحكومية بتقنيات المستقبل' : 'Transforming Government Services with Future Tech'}
              </p>
            </div>
          </div>

          {/* AI Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center space-x-2 rtl:space-x-reverse"
            >
              <Brain className="h-5 w-5" />
              <span>{language === 'ar' ? 'استكشف الذكاء الاصطناعي' : 'Explore AI Solutions'}</span>
              <ArrowRight className={`h-5 w-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-200 hover:shadow-lg flex items-center space-x-2 rtl:space-x-reverse"
            >
              <Play className="h-5 w-5" />
              <span>{language === 'ar' ? 'شاهد العرض التوضيحي' : 'Watch AI Demo'}</span>
            </Button>
          </div>

          {/* Real-time Metrics */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 opacity-70">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-gray-600">
                {language === 'ar' ? 'معتمد حكومياً' : 'Government Certified'}
              </span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">
                {language === 'ar' ? 'آمن ومشفر' : 'Secure & Encrypted'}
              </span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Zap className="h-4 w-4 text-yellow-600" />
              <span className="text-sm font-medium text-gray-600">
                {language === 'ar' ? 'سرعة البرق' : 'Lightning Fast'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating AI Status Cards */}
      <div className="absolute top-1/4 left-8 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 animate-bounce">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              {language === 'ar' ? 'الذكاء الاصطناعي نشط' : 'AI Online'}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-8 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 animate-bounce delay-1000">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Brain className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium text-gray-700">
              {language === 'ar' ? 'يتعلم الآن' : 'Learning Now'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;