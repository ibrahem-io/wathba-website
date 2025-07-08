import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, Shield, Zap, HeartHandshake, GraduationCap, Briefcase, Car } from 'lucide-react';

const Agencies: React.FC = () => {
  const { t } = useLanguage();

  const agencies = [
    {
      icon: Building2,
      nameAr: 'الشركات الكبرى',
      nameEn: 'Corporate Enterprises',
      color: 'bg-red-100 text-red-700',
      usage: '85%'
    },
    {
      icon: HeartHandshake,
      nameAr: 'الجهات الحكومية',
      nameEn: 'Government Entities',
      color: 'bg-green-100 text-green-700',
      usage: '75%'
    },
    {
      icon: GraduationCap,
      nameAr: 'الشركات الناشئة والتقنية',
      nameEn: 'Startups & Tech Companies',
      color: 'bg-blue-100 text-blue-700',
      usage: '90%'
    },
    {
      icon: Briefcase,
      nameAr: 'الرعاية الصحية وعلوم الحياة',
      nameEn: 'Healthcare & Life Sciences',
      color: 'bg-purple-100 text-purple-700',
      usage: '80%'
    }
  ];

  return (
    <section id="agencies" className="py-16 bg-gray-50">
      <div className="center-content">
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
            <div className="text-4xl font-bold text-purple-700 mb-2">100+</div>
            <div className="text-gray-600">عميل راضٍ</div>
            <div className="text-sm text-gray-500">Satisfied Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-700 mb-2">50+</div>
            <div className="text-gray-600">مشروع ناجح</div>
            <div className="text-sm text-gray-500">Successful Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">95%</div>
            <div className="text-gray-600">معدل رضا العملاء</div>
            <div className="text-sm text-gray-500">Client Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-700 mb-2">5+</div>
            <div className="text-gray-600">سنوات خبرة</div>
            <div className="text-sm text-gray-500">Years of Experience</div>
          </div>
        </div>

        {/* Agency Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <span className="text-sm text-gray-600 mixed-content">معدل النجاح</span>
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
                    <span className="text-xs text-green-600 font-medium">شراكة نشطة</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-700 to-purple-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">هل مؤسستك مستعدة للانضمام؟</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              انضم إلى أكثر من 100 عميل راضٍ يثقون في خدمات وثبة للاستشارات لتحقيق أهدافهم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                ابدأ معنا
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                تواصل معنا
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agencies;