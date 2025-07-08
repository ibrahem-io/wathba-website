import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, BarChart3, FileText, Shield, MapPin, ArrowRight, TrendingUp, Brain, Zap, Sparkles } from 'lucide-react';

const Solutions: React.FC = () => {
  const { language, t } = useLanguage();

  const solutions = [
    {
      icon: Brain,
      titleAr: 'الذكاء الاصطناعي للمدن الذكية',
      titleEn: 'Smart Cities AI',
      descAr: 'تحسين إدارة المدن من خلال تحليل البيانات الذكي وأتمتة الخدمات البلدية',
      descEn: 'Enhance city management through intelligent data analysis and municipal service automation',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      accuracy: '98%',
      speed: '0.3s',
      category: 'AI Core'
    },
    {
      icon: Users,
      titleAr: 'أتمتة خدمات المواطنين',
      titleEn: 'Citizen Services Automation',
      descAr: 'تسريع معالجة طلبات المواطنين وتحسين تجربة الخدمات الحكومية',
      descEn: 'Accelerate citizen request processing and improve government service experience',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      accuracy: '96%',
      speed: '0.5s',
      category: 'Automation'
    },
    {
      icon: BarChart3,
      titleAr: 'التحليلات التنبؤية للتخطيط',
      titleEn: 'Predictive Analytics for Planning',
      descAr: 'اتخاذ قرارات مدروسة باستخدام التحليلات المتقدمة والنمذجة التنبؤية',
      descEn: 'Make informed decisions using advanced analytics and predictive modeling',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      accuracy: '94%',
      speed: '1.2s',
      category: 'Analytics'
    },
    {
      icon: FileText,
      titleAr: 'ذكاء المستندات',
      titleEn: 'Document Intelligence',
      descAr: 'معالجة وتحليل المستندات الحكومية تلقائياً باستخدام الذكاء الاصطناعي',
      descEn: 'Automatically process and analyze government documents using AI',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      accuracy: '99%',
      speed: '0.8s',
      category: 'NLP'
    },
    {
      icon: Shield,
      titleAr: 'أمن ومراقبة بالذكاء الاصطناعي',
      titleEn: 'Security and Surveillance AI',
      descAr: 'تعزيز الأمن الوطني من خلال أنظمة المراقبة الذكية والكشف المبكر',
      descEn: 'Enhance national security through intelligent surveillance and early detection systems',
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-red-50',
      accuracy: '99.5%',
      speed: '0.1s',
      category: 'Security'
    },
    {
      icon: TrendingUp,
      titleAr: 'تحسين الأداء الحكومي',
      titleEn: 'Government Performance Optimization',
      descAr: 'قياس وتحسين كفاءة العمليات الحكومية باستخدام مؤشرات الأداء الذكية',
      descEn: 'Measure and improve government process efficiency using intelligent KPIs',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      accuracy: '97%',
      speed: '0.6s',
      category: 'Optimization'
    }
  ];

  return (
    <section className="min-h-full py-12 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="h-4 w-4" />
            <span>{language === 'ar' ? 'حلول الذكاء الاصطناعي المتقدمة' : 'Advanced AI Solutions'}</span>
            <Sparkles className="h-4 w-4 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {language === 'ar' ? 'حلول الذكاء الاصطناعي' : 'AI Solutions'}
            </span>
            <br />
            <span className="text-gray-800">
              {language === 'ar' ? 'للوكالات الحكومية' : 'for Government'}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'حلول مخصصة مدعومة بالذكاء الاصطناعي لتحسين الخدمات الحكومية وتعزيز تجربة المواطنين'
              : 'AI-powered custom solutions to enhance government services and citizen experience'
            }
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-gray-200 hover:scale-105 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex justify-center mb-3">
                  <Badge variant="outline" className="text-xs font-medium">
                    {solution.category}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                  <div className="text-right mb-1">
                    {solution.titleAr}
                  </div>
                  <div className="text-sm text-gray-500 font-normal">
                    {solution.titleEn}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-right mb-6 leading-relaxed">
                  {language === 'ar' ? solution.descAr : solution.descEn}
                </CardDescription>
                
                {/* AI Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{solution.accuracy}</div>
                    <div className="text-xs text-gray-500">
                      {language === 'ar' ? 'دقة' : 'Accuracy'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{solution.speed}</div>
                    <div className="text-xs text-gray-500">
                      {language === 'ar' ? 'سرعة' : 'Speed'}
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition-colors group-hover:bg-indigo-100"
                >
                  <Brain className="mr-2 h-4 w-4" />
                  {language === 'ar' ? 'جرب الذكاء الاصطناعي' : 'Try AI Solution'}
                  <ArrowRight className={`ml-2 h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Platform Showcase */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                <Zap className="h-6 w-6 text-yellow-300" />
                <span className="text-lg font-semibold">
                  {language === 'ar' ? 'منصة الذكاء الاصطناعي المتقدمة' : 'Advanced AI Platform'}
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-right">
                {language === 'ar' ? 'مصممة خصيصاً للحكومة السعودية' : 'Built for Saudi Government'}
              </h3>
              <p className="text-indigo-100 mb-6 text-right leading-relaxed">
                {language === 'ar' 
                  ? 'منصة شاملة تجمع جميع حلول الذكاء الاصطناعي في مكان واحد مع ضمان الامتثال والأمان'
                  : 'Comprehensive platform combining all AI solutions in one place with guaranteed compliance and security'
                }
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-indigo-200 text-sm">
                    {language === 'ar' ? 'وقت التشغيل' : 'Uptime'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-indigo-200 text-sm">
                    {language === 'ar' ? 'دعم ذكي' : 'AI Support'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-indigo-200 text-sm">
                    {language === 'ar' ? 'وكالة' : 'Agencies'}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">
                    {language === 'ar' ? 'الذكاء الاصطناعي يعمل الآن' : 'AI Systems Active'}
                  </span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Brain className="h-5 w-5 text-purple-300" />
                  <span className="font-medium">
                    {language === 'ar' ? 'يتعلم ويتطور باستمرار' : 'Continuously Learning'}
                  </span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Shield className="h-5 w-5 text-blue-300" />
                  <span className="font-medium">
                    {language === 'ar' ? 'محمي بأعلى معايير الأمان' : 'Maximum Security Protected'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;