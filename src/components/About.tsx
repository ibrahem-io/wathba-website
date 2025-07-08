import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Eye, Award, Users, TrendingUp, Globe, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const { language } = useLanguage();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const visionMission = [
    {
      icon: Eye,
      titleAr: 'رؤيتنا',
      titleEn: 'Our Vision',
      descAr: 'أن نكون الشريك الأكثر قيمة للمؤسسات، مما يمكنها من التنقل في عصر الإمكانيات بثقة وابتكار',
      descEn: 'To be the most value-delivering partner for organizations, enabling them to navigate the age of possibilities with confidence and innovation',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Target,
      titleAr: 'مهمتنا',
      titleEn: 'Our Mission',
      descAr: 'مساعدة عملائنا على إطلاق الإمكانات الكاملة للتقنيات المتطورة والمبتكرة، وتقديم القيمة في كل خطوة',
      descEn: 'To help our clients unlock the full potential of cutting-edge and innovative technologies, delivering value at every step',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const achievements = [
    { number: '100+', label: language === 'ar' ? 'عميل راضٍ' : 'Satisfied Clients', icon: Users },
    { number: '50+', label: language === 'ar' ? 'مشروع ناجح' : 'Successful Projects', icon: TrendingUp },
    { number: '95%', label: language === 'ar' ? 'معدل رضا العملاء' : 'Client Satisfaction Rate', icon: Award },
    { number: '5+', label: language === 'ar' ? 'سنوات خبرة' : 'Years Experience', icon: Globe }
  ];

  const values = [
    {
      titleAr: 'التنوع',
      titleEn: 'Diversity',
      descAr: 'مزيج من وجهات النظر العالمية والخبرة المحلية',
      descEn: 'A mix of global perspectives and local expertise'
    },
    {
      titleAr: 'الانفتاح',
      titleEn: 'Openness',
      descAr: 'ثقافة الشفافية والتعلم المستمر',
      descEn: 'A culture of transparency and continuous learning'
    },
    {
      titleAr: 'الابتكار',
      titleEn: 'Innovation',
      descAr: 'ريادة الأفكار الجديدة والحلول المتطورة',
      descEn: 'Pioneering new ideas and cutting-edge solutions'
    },
    {
      titleAr: 'الدفء',
      titleEn: 'Warmth',
      descAr: 'بناء علاقات قوية وتعاونية',
      descEn: 'Building strong, collaborative relationships'
    },
    {
      titleAr: 'التعاون',
      titleEn: 'Collaboration',
      descAr: 'الشراكة مع العملاء للنجاح طويل الأمد',
      descEn: 'Partnering with clients for long-term success'
    }
  ];

  return (
    <section className="min-h-full py-12 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>{language === 'ar' ? 'من نحن' : 'About Us'}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {language === 'ar' ? 'وثبة للاستشارات' : 'Wathbah Consulting'}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'حيث تلتقي الشغف السعودي بالتميز العالمي كشركة استشارات تقنية وإدارية طموحة جداً'
              : 'Where Saudi passion meets global excellence as a very ambitious technology and management consulting firm'
            }
          </p>
        </div>

        {/* Vision & Mission Interactive Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {visionMission.map((item, index) => (
            <Card 
              key={index}
              className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl border-gray-200 hover:scale-105 ${
                activeCard === index ? 'ring-2 ring-indigo-500 shadow-2xl scale-105' : ''
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  <div className="text-right mb-2">
                    {item.titleAr}
                  </div>
                  <div className="text-lg text-gray-500 font-normal">
                    {item.titleEn}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-right leading-relaxed text-lg">
                  {language === 'ar' ? item.descAr : item.descEn}
                </CardDescription>
                
                {/* Hover reveal content */}
                <div className={`mt-6 transition-all duration-500 ${
                  activeCard === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                } overflow-hidden`}>
                  <div className={`${item.bgColor} p-4 rounded-xl`}>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {language === 'ar' ? 'نحقق هذا من خلال فريق متخصص' : 'Achieved through specialized team'}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Counter */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {language === 'ar' ? 'إنجازاتنا بالأرقام' : 'Our Achievements in Numbers'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {achievement.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {language === 'ar' ? 'أسسنا الخمسة' : 'Our Five Pillars'}
          </h3>
          <p className="text-center text-gray-600 mb-8">
            {language === 'ar' ? 'نعمل على خمسة ركائز أساسية:' : 'We operate on five core pillars:'}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 text-right">
                      {language === 'ar' ? value.titleAr : value.titleEn}
                    </h4>
                    <p className="text-gray-600 text-right leading-relaxed">
                      {language === 'ar' ? value.descAr : value.descEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            {language === 'ar' ? 'هل أنت مستعد لرفع مستوى عملك؟' : 'Ready to Elevate Your Business?'}
          </h3>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
            {language === 'ar' 
              ? 'تواصل معنا لمناقشة أهدافك وكيف يمكن لخبرتنا أن تساعدك في تحقيق النجاح'
              : 'Contact us to discuss your goals and how our expertise can help you achieve success'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-indigo-700 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 rtl:space-x-reverse">
              <Sparkles className="h-5 w-5" />
              <span>{language === 'ar' ? 'ابدأ معنا' : 'Get Started'}</span>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 rtl:space-x-reverse">
              <span>{language === 'ar' ? 'تواصل معنا' : 'Contact Us'}</span>
              <ArrowRight className={`h-5 w-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;