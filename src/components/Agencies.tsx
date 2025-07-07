import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, Shield, Zap, HeartHandshake, GraduationCap, Briefcase, Car } from 'lucide-react';

const Agencies: React.FC = () => {
  const { t } = useLanguage();

  const agencies = [
    {
      icon: Building2,
      nameAr: 'وزارة الداخلية',
      nameEn: 'Ministry of Interior',
      color: 'bg-red-100 text-red-700',
      usage: '95%'
    },
    {
      icon: HeartHandshake,
      nameAr: 'وزارة الصحة',
      nameEn: 'Ministry of Health',
      color: 'bg-green-100 text-green-700',
      usage: '92%'
    },
    {
      icon: GraduationCap,
      nameAr: 'وزارة التعليم',
      nameEn: 'Ministry of Education',
      color: 'bg-blue-100 text-blue-700',
      usage: '88%'
    },
    {
      icon: Briefcase,
      nameAr: 'وزارة العمل',
      nameEn: 'Ministry of Labor',
      color: 'bg-purple-100 text-purple-700',
      usage: '90%'
    },
    {
      icon: Car,
      nameAr: 'وزارة النقل',
      nameEn: 'Ministry of Transport',
      color: 'bg-orange-100 text-orange-700',
      usage: '87%'
    },
    {
      icon: Shield,
      nameAr: 'وزارة الدفاع',
      nameEn: 'Ministry of Defense',
      color: 'bg-gray-100 text-gray-700',
      usage: '94%'
    }
  ];

  return (
    <section id="agencies" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('agencies.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('agencies.subtitle')}
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-700 mb-2">50+</div>
            <div className="text-gray-600">وكالة حكومية</div>
            <div className="text-sm text-gray-500">Government Agencies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-700 mb-2">2M+</div>
            <div className="text-gray-600">مواطن يُخدم يومياً</div>
            <div className="text-sm text-gray-500">Citizens Served Daily</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">99.9%</div>
            <div className="text-gray-600">وقت التشغيل</div>
            <div className="text-sm text-gray-500">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-700 mb-2">24/7</div>
            <div className="text-gray-600">دعم فني</div>
            <div className="text-sm text-gray-500">Technical Support</div>
          </div>
        </div>

        {/* Agency Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agencies.map((agency, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 saudi-accent">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                  <div className={`w-12 h-12 rounded-lg ${agency.color} flex items-center justify-center`}>
                    <agency.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-right mb-1">
                      {agency.nameAr}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {agency.nameEn}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 mixed-content">معدل الاستخدام</span>
                    <span className="text-sm font-semibold text-purple-700 metric-number">{agency.usage}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: agency.usage }}
                    ></div>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">نشط الآن</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-700 to-purple-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">هل وكالتك الحكومية مستعدة للانضمام؟</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              انضم إلى أكثر من 50 وكالة حكومية تستخدم منصة وثبة لتحسين خدماتها وتعزيز تجربة المواطنين
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                اطلب عرضاً توضيحياً
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                تحدث مع مختص
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agencies;