import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Shield, Lock, FileCheck, Eye, CheckCircle, Award, Building2, Users, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const Security: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const securityFeatures = [
    {
      icon: Shield,
      titleAr: 'النشر المعزول (Air-gapped)',
      titleEn: 'Air-gapped Deployment',
      descAr: 'بيئات منعزلة تماماً عن الإنترنت لضمان أقصى درجات الأمان للبيانات الحساسة',
      descEn: 'Completely isolated environments from the internet ensuring maximum security for sensitive data',
      color: 'bg-red-100 text-red-700'
    },
    {
      icon: Lock,
      titleAr: 'التشفير من النقطة إلى النقطة',
      titleEn: 'End-to-End Encryption',
      descAr: 'تشفير AES-256 متقدم لجميع البيانات أثناء النقل والتخزين مع إدارة مفاتيح آمنة',
      descEn: 'Advanced AES-256 encryption for all data in transit and at rest with secure key management',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: Users,
      titleAr: 'المصادقة متعددة العوامل',
      titleEn: 'Multi-Factor Authentication',
      descAr: 'نظام مصادقة متقدم يتضمن البصمة الحيوية والرموز المؤقتة والشهادات الرقمية',
      descEn: 'Advanced authentication system including biometrics, time-based tokens, and digital certificates',
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: FileCheck,
      titleAr: 'إدارة سجل التدقيق',
      titleEn: 'Audit Trail Management',
      descAr: 'تسجيل شامل لجميع العمليات مع طوابع زمنية وتوقيعات رقمية غير قابلة للتلاعب',
      descEn: 'Comprehensive logging of all operations with timestamps and tamper-proof digital signatures',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      icon: Building2,
      titleAr: 'ضمانات السيادة على البيانات',
      titleEn: 'Data Sovereignty Guarantees',
      descAr: 'ضمان بقاء جميع البيانات داخل الحدود السعودية مع امتثال كامل للوائح المحلية',
      descEn: 'Guarantee that all data remains within Saudi borders with full compliance to local regulations',
      color: 'bg-orange-100 text-orange-700'
    },
    {
      icon: Eye,
      titleAr: 'المراقبة المستمرة',
      titleEn: 'Continuous Monitoring',
      descAr: 'نظام مراقبة ذكي يعمل على مدار الساعة للكشف عن التهديدات والاستجابة الفورية',
      descEn: 'Intelligent 24/7 monitoring system for threat detection and immediate response',
      color: 'bg-indigo-100 text-indigo-700'
    }
  ];

  const certifications = [
    {
      name: 'ISO 27001',
      nameAr: 'آيزو 27001',
      description: 'International standard for information security management systems',
      descriptionAr: 'المعيار الدولي لأنظمة إدارة أمن المعلومات',
      validUntil: '2025-12-31',
      logo: '🏆',
      color: 'bg-blue-500'
    },
    {
      name: 'SOC 2 Type II',
      nameAr: 'SOC 2 النوع الثاني',
      description: 'Service Organization Control 2 compliance for security and availability',
      descriptionAr: 'امتثال تحكم منظمة الخدمة 2 للأمان والتوفر',
      validUntil: '2025-06-30',
      logo: '🛡️',
      color: 'bg-green-500'
    },
    {
      name: 'Saudi Cloud Framework',
      nameAr: 'إطار الحوسبة السحابية السعودي',
      description: 'Compliance with Saudi Arabia Cloud Computing Regulatory Framework',
      descriptionAr: 'الامتثال للإطار التنظيمي للحوسبة السحابية في المملكة العربية السعودية',
      validUntil: '2026-03-15',
      logo: '☁️',
      color: 'bg-purple-500'
    },
    {
      name: 'CITC Cybersecurity',
      nameAr: 'الأمن السيبراني - هيئة الاتصالات',
      description: 'Communications and Information Technology Commission cybersecurity compliance',
      descriptionAr: 'امتثال الأمن السيبراني لهيئة الاتصالات وتقنية المعلومات',
      validUntil: '2025-09-20',
      logo: '🔒',
      color: 'bg-red-500'
    },
    {
      name: 'Government Data Protection',
      nameAr: 'حماية البيانات الحكومية',
      description: 'Saudi government data protection and privacy standards compliance',
      descriptionAr: 'امتثال معايير حماية البيانات والخصوصية الحكومية السعودية',
      validUntil: '2025-11-10',
      logo: '🏛️',
      color: 'bg-orange-500'
    },
    {
      name: 'Etimad Pre-approval',
      nameAr: 'الموافقة المسبقة - اعتماد',
      description: 'Pre-approved vendor status on Saudi government procurement platform',
      descriptionAr: 'حالة المورد المعتمد مسبقاً على منصة المشتريات الحكومية السعودية',
      validUntil: '2026-01-31',
      logo: '✅',
      color: 'bg-teal-500'
    }
  ];

  const testimonials = [
    {
      name: 'د. أحمد المحمد',
      nameEn: 'Dr. Ahmed Al-Mohammed',
      position: 'مدير تقنية المعلومات',
      positionEn: 'IT Director',
      agency: 'وزارة الداخلية',
      agencyEn: 'Ministry of Interior',
      quote: 'منصة وثبة حولت طريقة تعاملنا مع البيانات الأمنية. الأمان والكفاءة لا مثيل لهما.',
      quoteEn: 'Wathba platform transformed how we handle security data. The security and efficiency are unmatched.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'أ. فاطمة الزهراني',
      nameEn: 'Ms. Fatima Al-Zahrani',
      position: 'مديرة الخدمات الرقمية',
      positionEn: 'Digital Services Director',
      agency: 'وزارة الصحة',
      agencyEn: 'Ministry of Health',
      quote: 'تحسنت خدماتنا للمواطنين بشكل كبير. النظام آمن وسهل الاستخدام.',
      quoteEn: 'Our citizen services improved significantly. The system is secure and user-friendly.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'م. سعد العتيبي',
      nameEn: 'Eng. Saad Al-Otaibi',
      position: 'رئيس قسم الأمن السيبراني',
      positionEn: 'Head of Cybersecurity',
      agency: 'وزارة التعليم',
      agencyEn: 'Ministry of Education',
      quote: 'معايير الأمان في وثبة تفوق التوقعات. ثقة كاملة في حماية بيانات الطلاب.',
      quoteEn: 'Security standards in Wathba exceed expectations. Complete confidence in protecting student data.',
      rating: 5,
      image: '👨‍🔧'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="security" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? 'مركز الأمان والامتثال' : 'Security & Compliance Center'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'معايير الأمان الأعلى للبيانات الحكومية مع ضمان الامتثال الكامل للوائح المحلية والدولية'
              : 'Highest security standards for government data with full compliance to local and international regulations'
            }
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-lg ${feature.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                  <div className="text-right mb-1">
                    {feature.titleAr}
                  </div>
                  <div className="text-sm text-gray-500 font-normal">
                    {feature.titleEn}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-right leading-relaxed">
                  {language === 'ar' ? feature.descAr : feature.descEn}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {language === 'ar' ? 'الشهادات والاعتمادات' : 'Certifications & Accreditations'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-purple-200">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 rounded-lg ${cert.color} flex items-center justify-center mx-auto mb-4 text-2xl`}>
                        {cert.logo}
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        <div className="text-right mb-1">
                          {cert.nameAr}
                        </div>
                        <div className="text-sm text-gray-500 font-normal">
                          {cert.name}
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Badge variant="outline" className="text-green-700 border-green-300">
                        {language === 'ar' ? 'ساري حتى' : 'Valid until'} {cert.validUntil}
                      </Badge>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-right">
                      {language === 'ar' ? cert.nameAr : cert.name}
                    </DialogTitle>
                    <DialogDescription className="text-right">
                      {language === 'ar' ? cert.descriptionAr : cert.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {language === 'ar' ? 'تاريخ الانتهاء:' : 'Valid Until:'}
                      </span>
                      <Badge className="bg-green-100 text-green-800">
                        {cert.validUntil}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {language === 'ar' ? 'الحالة:' : 'Status:'}
                      </span>
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {language === 'ar' ? 'نشط' : 'Active'}
                      </Badge>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* Government Partnership Showcase */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {language === 'ar' ? 'شراكات حكومية موثوقة' : 'Trusted Government Partnerships'}
          </h3>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-purple-700 mb-2">15+</div>
              <div className="text-gray-600">
                {language === 'ar' ? 'وكالة حكومية تثق بنا' : 'Government Agencies Trust Us'}
              </div>
            </div>
            
            {/* Testimonial Carousel */}
            <div className="relative">
              <Card className="border-purple-200">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={prevTestimonial}
                      className="hover:bg-purple-50"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={nextTestimonial}
                      className="hover:bg-purple-50"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4">{testimonials[currentTestimonial].image}</div>
                    <blockquote className="text-lg text-gray-700 mb-4 italic text-right">
                      "{language === 'ar' ? testimonials[currentTestimonial].quote : testimonials[currentTestimonial].quoteEn}"
                    </blockquote>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">
                        {language === 'ar' ? testimonials[currentTestimonial].name : testimonials[currentTestimonial].nameEn}
                      </div>
                      <div className="text-sm text-gray-600">
                        {language === 'ar' ? testimonials[currentTestimonial].position : testimonials[currentTestimonial].positionEn}
                      </div>
                      <div className="text-sm text-purple-600 font-medium">
                        {language === 'ar' ? testimonials[currentTestimonial].agency : testimonials[currentTestimonial].agencyEn}
                      </div>
                    </div>
                    <div className="flex justify-center mt-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Secure Demo Request Portal */}
        <div className="bg-gradient-to-r from-purple-700 to-purple-800 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'بوابة طلب العرض التوضيحي الآمن' : 'Secure Demo Request Portal'}
            </h3>
            <p className="text-purple-100 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'احجز عرضاً توضيحياً مخصصاً لوكالتك الحكومية مع ضمان أعلى معايير الأمان والسرية'
                : 'Book a customized demo for your government agency with guaranteed highest security and confidentiality standards'
              }
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-purple-100">
                    {language === 'ar' ? 'اتفاقية عدم إفشاء مضمنة' : 'Built-in NDA Agreement'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-purple-100">
                    {language === 'ar' ? 'تشفير متقدم للبيانات' : 'Advanced Data Encryption'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-purple-100">
                    {language === 'ar' ? 'مستوى تصريح أمني مخصص' : 'Custom Security Clearance Level'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-purple-100">
                    {language === 'ar' ? 'جدولة مرنة للاجتماعات' : 'Flexible Meeting Scheduling'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Calendar className="mr-2 h-5 w-5" />
                {language === 'ar' ? 'احجز عرضاً توضيحياً آمناً' : 'Book Secure Demo'}
              </Button>
              <p className="text-purple-200 text-sm mt-4">
                {language === 'ar' ? 'استجابة خلال 24 ساعة' : 'Response within 24 hours'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;