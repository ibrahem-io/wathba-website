import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Users, BarChart3, FileText, Shield, MapPin, ArrowRight, TrendingUp } from 'lucide-react';

const Solutions: React.FC = () => {
  const { language, t } = useLanguage();

  const solutions = [
    {
      icon: MapPin,
      titleAr: 'الذكاء الاصطناعي للمدن الذكية',
      titleEn: 'Smart Cities AI',
      descAr: 'تحسين إدارة المدن من خلال تحليل البيانات الذكي وأتمتة الخدمات البلدية',
      descEn: 'Enhance city management through intelligent data analysis and municipal service automation',
      color: 'bg-blue-100 text-blue-700',
      hoverColor: 'hover:bg-blue-50'
    },
    {
      icon: Users,
      titleAr: 'أتمتة خدمات المواطنين',
      titleEn: 'Citizen Services Automation',
      descAr: 'تسريع معالجة طلبات المواطنين وتحسين تجربة الخدمات الحكومية',
      descEn: 'Accelerate citizen request processing and improve government service experience',
      color: 'bg-green-100 text-green-700',
      hoverColor: 'hover:bg-green-50'
    },
    {
      icon: BarChart3,
      titleAr: 'التحليلات التنبؤية للتخطيط',
      titleEn: 'Predictive Analytics for Planning',
      descAr: 'اتخاذ قرارات مدروسة باستخدام التحليلات المتقدمة والنمذجة التنبؤية',
      descEn: 'Make informed decisions using advanced analytics and predictive modeling',
      color: 'bg-purple-100 text-purple-700',
      hoverColor: 'hover:bg-purple-50'
    },
    {
      icon: FileText,
      titleAr: 'ذكاء المستندات',
      titleEn: 'Document Intelligence',
      descAr: 'معالجة وتحليل المستندات الحكومية تلقائياً باستخدام الذكاء الاصطناعي',
      descEn: 'Automatically process and analyze government documents using AI',
      color: 'bg-orange-100 text-orange-700',
      hoverColor: 'hover:bg-orange-50'
    },
    {
      icon: Shield,
      titleAr: 'أمن ومراقبة بالذكاء الاصطناعي',
      titleEn: 'Security and Surveillance AI',
      descAr: 'تعزيز الأمن الوطني من خلال أنظمة المراقبة الذكية والكشف المبكر',
      descEn: 'Enhance national security through intelligent surveillance and early detection systems',
      color: 'bg-red-100 text-red-700',
      hoverColor: 'hover:bg-red-50'
    },
    {
      icon: TrendingUp,
      titleAr: 'تحسين الأداء الحكومي',
      titleEn: 'Government Performance Optimization',
      descAr: 'قياس وتحسين كفاءة العمليات الحكومية باستخدام مؤشرات الأداء الذكية',
      descEn: 'Measure and improve government process efficiency using intelligent KPIs',
      color: 'bg-indigo-100 text-indigo-700',
      hoverColor: 'hover:bg-indigo-50'
    }
  ];

  return (
    <section id="solutions" className="py-16 bg-white">
      <div className="center-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className={`group cursor-pointer transition-all duration-200 hover:shadow-lg border-gray-200`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-lg ${solution.color} flex items-center justify-center mx-auto mb-4`}>
                  <solution.icon className="h-8 w-8" />
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
                <CardDescription className="text-gray-600 text-right mb-4 leading-relaxed">
                  {language === 'ar' ? solution.descAr : solution.descEn}
                </CardDescription>
                <Button 
                  variant="ghost" 
                  className="w-full text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition-colors"
                >
                  {language === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                  <ArrowRight className={`ml-2 h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 text-right">
                {language === 'ar' ? 'منصة الذكاء الاصطناعي الحكومية المتقدمة' : 'Advanced Government AI Platform'}
              </h3>
              <p className="text-indigo-100 mb-6 text-right leading-relaxed">
                {language === 'ar' 
                  ? 'مصممة خصيصاً للوكالات الحكومية السعودية مع مراعاة الامتثال والأمان وقابلية التوسع'
                  : 'Built specifically for Saudi government agencies with compliance, security, and scalability in mind'
                }
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-indigo-200 text-sm">
                    {language === 'ar' ? 'ضمان وقت التشغيل' : 'Uptime Guarantee'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-indigo-200 text-sm">
                    {language === 'ar' ? 'دعم متاح' : 'Support Available'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-indigo-200 text-sm">
                    {language === 'ar' ? 'وكالة تُخدم' : 'Agencies Served'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2 text-right">
                {language === 'ar' ? 'متوافق مع رؤية 2030' : 'Vision 2030 Aligned'}
              </h4>
              <p className="text-green-700 text-sm text-right">
                {language === 'ar' 
                  ? 'دعم أهداف التحول الرقمي لرؤية السعودية 2030'
                  : 'Supporting Saudi Vision 2030 digital transformation goals'
                }
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 text-right">
                {language === 'ar' ? 'خبرة محلية' : 'Local Expertise'}
              </h4>
              <p className="text-gray-700 text-sm text-right">
                {language === 'ar' 
                  ? 'فهم عميق لمتطلبات الحكومة السعودية'
                  : 'Deep understanding of Saudi government requirements'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;