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
      descAr: 'أن نكون الشريك الاستراتيجي الرائد في التحول الرقمي، نمزج بين الخبرة المحلية والابتكار العالمي لبناء مستقبل رقمي مستدام يدعم رؤية المملكة 2030',
      descEn: 'To be the leading strategic partner in digital transformation, blending local expertise with global innovation to build a sustainable digital future supporting Saudi Vision 2030',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Target,
      titleAr: 'مهمتنا',
      titleEn: 'Our Mission',
      descAr: 'تمكين المؤسسات من تحقيق أهدافها الاستراتيجية من خلال حلول تقنية مبتكرة ومخصصة، مع ضمان أعلى معايير الجودة والأمان والامتثال',
      descEn: 'Empowering organizations to achieve their strategic goals through innovative and customized technology solutions, ensuring the highest standards of quality, security, and compliance',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const achievements = [
    { number: '500+', label: language === 'ar' ? 'مشروع ناجح' : 'Successful Projects', icon: TrendingUp },
    { number: '15+', label: language === 'ar' ? 'سنة خبرة' : 'Years Experience', icon: Award },
    { number: '99.9%', label: language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction', icon: Users },
    { number: '24/7', label: language === 'ar' ? 'دعم متواصل' : 'Continuous Support', icon: Globe }
  ];

  const values = [
    {
      titleAr: 'الابتكار والتميز',
      titleEn: 'Innovation & Excellence',
      descAr: 'نسعى دائماً لتقديم حلول مبتكرة تتجاوز توقعات عملائنا',
      descEn: 'We constantly strive to deliver innovative solutions that exceed our clients\' expectations'
    },
    {
      titleAr: 'الشراكة الاستراتيجية',
      titleEn: 'Strategic Partnership',
      descAr: 'نبني علاقات طويلة الأمد مع عملائنا كشركاء في النجاح',
      descEn: 'We build long-term relationships with our clients as partners in success'
    },
    {
      titleAr: 'الجودة والموثوقية',
      titleEn: 'Quality & Reliability',
      descAr: 'نلتزم بأعلى معايير الجودة في جميع خدماتنا ومشاريعنا',
      descEn: 'We commit to the highest quality standards in all our services and projects'
    },
    {
      titleAr: 'التطوير المستمر',
      titleEn: 'Continuous Development',
      descAr: 'نواكب أحدث التقنيات والاتجاهات لضمان تقديم أفضل الحلول',
      descEn: 'We keep up with the latest technologies and trends to ensure the best solutions'
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
              {language === 'ar' ? 'وثبة للاستشارات' : 'Wathba Consulting'}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'شريكك الاستراتيجي في رحلة التحول الرقمي والابتكار التقني'
              : 'Your strategic partner in digital transformation and technological innovation'
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
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {language === 'ar' ? 'قيمنا الأساسية' : 'Our Core Values'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
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
            {language === 'ar' ? 'هل أنت مستعد لبدء رحلة التحول؟' : 'Ready to Start Your Transformation Journey?'}
          </h3>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
            {language === 'ar' 
              ? 'انضم إلى مئات العملاء الذين حققوا نجاحاً استثنائياً مع حلولنا المبتكرة'
              : 'Join hundreds of clients who achieved exceptional success with our innovative solutions'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-indigo-700 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 rtl:space-x-reverse">
              <Sparkles className="h-5 w-5" />
              <span>{language === 'ar' ? 'احجز استشارة مجانية' : 'Book Free Consultation'}</span>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 rtl:space-x-reverse">
              <span>{language === 'ar' ? 'تصفح مشاريعنا' : 'View Our Projects'}</span>
              <ArrowRight className={`h-5 w-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;