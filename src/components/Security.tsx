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
      titleAr: 'التنوع',
      titleEn: 'Diversity',
      descAr: 'مزيج من وجهات النظر العالمية والخبرة المحلية يثري حلولنا ويجعلها أكثر شمولية وفعالية',
      descEn: 'A mix of global perspectives and local expertise enriches our solutions and makes them more comprehensive and effective',
      color: 'bg-red-100 text-red-700'
    },
    {
      icon: Lock,
      titleAr: 'الانفتاح',
      titleEn: 'Openness',
      descAr: 'ثقافة الشفافية والتعلم المستمر تمكننا من التطور والنمو مع عملائنا وشركائنا',
      descEn: 'A culture of transparency and continuous learning enables us to evolve and grow with our clients and partners',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: Users,
      titleAr: 'الابتكار',
      titleEn: 'Innovation',
      descAr: 'ريادة الأفكار الجديدة والحلول المتطورة لمواجهة تحديات اليوم وبناء مستقبل أفضل',
      descEn: 'Pioneering new ideas and cutting-edge solutions to meet today\'s challenges and build a better future',
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: FileCheck,
      titleAr: 'الدفء',
      titleEn: 'Warmth',
      descAr: 'بناء علاقات قوية وتعاونية مع عملائنا وشركائنا تقوم على الثقة والاحترام المتبادل',
      descEn: 'Building strong, collaborative relationships with our clients and partners based on trust and mutual respect',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      icon: Building2,
      titleAr: 'التعاون',
      titleEn: 'Collaboration',
      descAr: 'الشراكة مع العملاء للنجاح طويل الأمد من خلال العمل المشترك وتبادل الخبرات',
      descEn: 'Partnering with clients for long-term success through collaborative work and knowledge sharing',
      color: 'bg-orange-100 text-orange-700'
    },
    {
      icon: Eye,
      titleAr: 'التميز في التنفيذ',
      titleEn: 'Excellence in Execution',
      descAr: 'التزامنا بأعلى معايير الجودة في تنفيذ جميع مشاريعنا وخدماتنا لضمان تحقيق أفضل النتائج',
      descEn: 'Our commitment to the highest quality standards in executing all our projects and services to ensure the best results',
      color: 'bg-indigo-100 text-indigo-700'
    }
  ];

  const certifications = [
    {
      name: 'Technology Consulting',
      nameAr: 'الاستشارات التقنية',
      description: 'Expert guidance in technology strategy and implementation',
      descriptionAr: 'إرشاد خبير في استراتيجية التكنولوجيا والتنفيذ',
      validUntil: 'Ongoing',
      logo: '🏆',
      color: 'bg-blue-500'
    },
    {
      name: 'Management Consulting',
      nameAr: 'الاستشارات الإدارية',
      description: 'Strategic management consulting for organizational excellence',
      descriptionAr: 'استشارات إدارية استراتيجية للتميز التنظيمي',
      validUntil: 'Ongoing',
      logo: '🛡️',
      color: 'bg-green-500'
    },
    {
      name: 'AI & Data Solutions',
      nameAr: 'حلول الذكاء الاصطناعي والبيانات',
      description: 'Cutting-edge AI and data management solutions',
      descriptionAr: 'حلول متطورة للذكاء الاصطناعي وإدارة البيانات',
      validUntil: 'Ongoing',
      logo: '☁️',
      color: 'bg-purple-500'
    },
    {
      name: 'Digital Transformation',
      nameAr: 'التحول الرقمي',
      description: 'Comprehensive digital transformation strategies and implementation',
      descriptionAr: 'استراتيجيات التحول الرقمي الشاملة والتنفيذ',
      validUntil: 'Ongoing',
      logo: '🔒',
      color: 'bg-red-500'
    },
    {
      name: 'Innovation Strategy',
      nameAr: 'استراتيجية الابتكار',
      description: 'Innovation frameworks and strategic planning for future growth',
      descriptionAr: 'أطر الابتكار والتخطيط الاستراتيجي للنمو المستقبلي',
      validUntil: 'Ongoing',
      logo: '🏛️',
      color: 'bg-orange-500'
    },
    {
      name: 'Change Management',
      nameAr: 'إدارة التغيير',
      description: 'Expert change management and organizational development services',
      descriptionAr: 'خدمات إدارة التغيير والتطوير التنظيمي المتخصصة',
      validUntil: 'Ongoing',
      logo: '✅',
      color: 'bg-teal-500'
    }
  ];

  const testimonials = [
    {
      name: 'أ. سارة العتيبي',
      nameEn: 'Ms. Sarah Al-Otaibi',
      position: 'مديرة التحول الرقمي',
      positionEn: 'Digital Transformation Director',
      agency: 'شركة تقنية رائدة',
      agencyEn: 'Leading Tech Company',
      quote: 'وثبة للاستشارات ساعدتنا في تحديد وتنفيذ حلول الذكاء الاصطناعي بطريقة عملية ومؤثرة.',
      quoteEn: 'Wathbah Consulting helped us identify and implement AI solutions in a practical and impactful way.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'د. محمد الشهري',
      nameEn: 'Dr. Mohammed Al-Shehri',
      position: 'الرئيس التنفيذي',
      positionEn: 'Chief Executive Officer',
      agency: 'مؤسسة صحية كبرى',
      agencyEn: 'Major Healthcare Institution',
      quote: 'الخبرة والاحترافية التي قدمتها وثبة في مشروع التحول الرقمي فاقت توقعاتنا.',
      quoteEn: 'The expertise and professionalism that Wathbah provided in our digital transformation project exceeded our expectations.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'أ. خالد النمر',
      nameEn: 'Mr. Khalid Al-Nemer',
      position: 'مدير الابتكار',
      positionEn: 'Innovation Manager',
      agency: 'شركة ناشئة تقنية',
      agencyEn: 'Tech Startup',
      quote: 'فريق وثبة ساعدنا في وضع استراتيجية واضحة للنمو والتوسع باستخدام التكنولوجيا.',
      quoteEn: 'Wathbah team helped us develop a clear strategy for growth and expansion using technology.',
      rating: 5,
      image: '👨‍💻'
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
      <div className="center-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? 'عن وثبة للاستشارات' : 'About Wathbah Consulting'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'حيث تلتقي الشغف السعودي بالتميز العالمي كشركة استشارات تقنية وإدارية طموحة جداً'
              : 'Where Saudi passion meets global excellence as a very ambitious technology and management consulting firm'
            }
          </p>
        </div>

        {/* Core Pillars Grid */}
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
            {language === 'ar' ? 'خدماتنا المتخصصة' : 'Our Specialized Services'}
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
                        {language === 'ar' ? 'متاح' : 'Available'} {cert.validUntil}
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
                        {language === 'ar' ? 'الحالة:' : 'Status:'}
                      </span>
                      <Badge className="bg-green-100 text-green-800">
                        {language === 'ar' ? 'متاح' : 'Available'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {language === 'ar' ? 'النوع:' : 'Type:'}
                      </span>
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {language === 'ar' ? 'خدمة استشارية' : 'Consulting Service'}
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
            {language === 'ar' ? 'شهادات عملائنا' : 'Client Testimonials'}
          </h3>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-purple-700 mb-2">100+</div>
              <div className="text-gray-600">
                {language === 'ar' ? 'عميل راضٍ عن خدماتنا' : 'Satisfied Clients'}
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
              {language === 'ar' ? 'هل أنت مستعد لرفع مستوى عملك؟' : 'Ready to Elevate Your Business?'}
            </h3>
            <p className="text-purple-100 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'تواصل معنا لمناقشة أهدافك وكيف يمكن لخبرتنا أن تساعدك في تحقيق النجاح'
                : 'Contact us to discuss your goals and how our expertise can help you achieve success'
              }
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-purple-100">
                    {language === 'ar' ? 'استشارة أولية مجانية' : 'Free Initial Consultation'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-purple-100">
                    {language === 'ar' ? 'فريق خبراء متخصص' : 'Expert Specialized Team'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-purple-100">
                    {language === 'ar' ? 'حلول مخصصة لاحتياجاتك' : 'Customized Solutions for Your Needs'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-purple-100">
                    {language === 'ar' ? 'متابعة مستمرة للمشاريع' : 'Continuous Project Follow-up'}
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
                {language === 'ar' ? 'ابدأ معنا' : 'Get Started'}
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