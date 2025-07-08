import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Sparkles, Globe, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      titleAr: 'البريد الإلكتروني',
      titleEn: 'Email',
      value: 'info@wathbaconsulting.com',
      color: 'bg-blue-100 text-blue-700',
      action: 'mailto:info@wathbaconsulting.com'
    },
    {
      icon: Phone,
      titleAr: 'الهاتف',
      titleEn: 'Phone',
      value: '+966 11 456 7890',
      color: 'bg-green-100 text-green-700',
      action: 'tel:+966114567890'
    },
    {
      icon: MapPin,
      titleAr: 'العنوان',
      titleEn: 'Address',
      value: language === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
      color: 'bg-purple-100 text-purple-700',
      action: '#'
    },
    {
      icon: Clock,
      titleAr: 'ساعات العمل',
      titleEn: 'Working Hours',
      value: language === 'ar' ? 'الأحد - الخميس: 9:00 ص - 6:00 م' : 'Sunday - Thursday: 9:00 AM - 6:00 PM',
      color: 'bg-orange-100 text-orange-700',
      action: '#'
    }
  ];

  const industries = [
    { valueAr: 'الشركات الكبرى', valueEn: 'Corporate Enterprises' },
    { valueAr: 'الجهات الحكومية', valueEn: 'Government Entities' },
    { valueAr: 'الشركات الناشئة والتقنية', valueEn: 'Startups & Tech Companies' },
    { valueAr: 'الرعاية الصحية وعلوم الحياة', valueEn: 'Healthcare & Life Sciences' },
    { valueAr: 'التعليم', valueEn: 'Education' },
    { valueAr: 'الخدمات المالية', valueEn: 'Financial Services' },
    { valueAr: 'أخرى', valueEn: 'Other' }
  ];

  const projectTypes = [
    { valueAr: 'الوعي بالبيانات والذكاء الاصطناعي', valueEn: 'Data & AI Awareness' },
    { valueAr: 'تحديد وتنفيذ حالات استخدام الذكاء الاصطناعي', valueEn: 'AI Use Case Identification & Implementation' },
    { valueAr: 'إدارة المعرفة المدعومة بالذكاء الاصطناعي', valueEn: 'AI Powered Knowledge Management' },
    { valueAr: 'تحول رقمي', valueEn: 'Digital Transformation' },
    { valueAr: 'استشارات إدارية', valueEn: 'Management Consulting' },
    { valueAr: 'استراتيجية التكنولوجيا والابتكار', valueEn: 'Technology & Innovation Strategy' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (formStep < 3) setFormStep(formStep + 1);
  };

  const handlePrevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const renderFormStep = () => {
    switch (formStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 text-right mb-4">
              {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                  {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                  className="text-right"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                  {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder={language === 'ar' ? 'your@email.com' : 'your@email.com'}
                  className="text-right"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                {language === 'ar' ? 'اسم الشركة' : 'Company Name'}
              </label>
              <Input
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder={language === 'ar' ? 'اسم شركتك أو مؤسستك' : 'Your company or organization'}
                className="text-right"
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 text-right mb-4">
              {language === 'ar' ? 'تفاصيل المشروع' : 'Project Details'}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                  {language === 'ar' ? 'القطاع' : 'Industry'}
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg text-right"
                >
                  <option value="">{language === 'ar' ? 'اختر القطاع' : 'Select Industry'}</option>
                  {industries.map((industry, idx) => (
                    <option key={idx} value={language === 'ar' ? industry.valueAr : industry.valueEn}>
                      {language === 'ar' ? industry.valueAr : industry.valueEn}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                  {language === 'ar' ? 'نوع المشروع' : 'Project Type'}
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => handleInputChange('projectType', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg text-right"
                >
                  <option value="">{language === 'ar' ? 'اختر نوع المشروع' : 'Select Project Type'}</option>
                  {projectTypes.map((type, idx) => (
                    <option key={idx} value={language === 'ar' ? type.valueAr : type.valueEn}>
                      {language === 'ar' ? type.valueAr : type.valueEn}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                {language === 'ar' ? 'الجدول الزمني المتوقع' : 'Expected Timeline'}
              </label>
              <Input
                value={formData.timeline}
                onChange={(e) => handleInputChange('timeline', e.target.value)}
                placeholder={language === 'ar' ? 'مثال: 3-6 أشهر' : 'e.g., 3-6 months'}
                className="text-right"
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 text-right mb-4">
              {language === 'ar' ? 'تفاصيل إضافية' : 'Additional Details'}
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                {language === 'ar' ? 'وصف المشروع' : 'Project Description'}
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={5}
                placeholder={language === 'ar' ? 'اشرح لنا عن مشروعك ومتطلباتك...' : 'Tell us about your project and requirements...'}
                className="text-right"
              />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="min-h-full py-12 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4" />
            <span>{language === 'ar' ? 'تواصل معنا' : 'Get In Touch'}</span>
            <Sparkles className="h-4 w-4 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {language === 'ar' ? 'هل أنت مستعد' : 'Ready to Elevate'}
            </span>
            <br />
            <span className="text-gray-800">
              {language === 'ar' ? 'لرفع مستوى عملك؟' : 'Your Business?'}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'تواصل مع فريقنا المتخصص لاستكشاف الحلول المناسبة لاحتياجاتك'
              : 'Connect with our specialized team to explore the right solutions for your needs'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 text-right mb-6">
              {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-right mb-1">
                        {language === 'ar' ? info.titleAr : info.titleEn}
                      </h4>
                      <p className="text-gray-600 text-right">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Trust Indicators */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
              <h4 className="font-semibold text-green-900 mb-4 text-right">
                {language === 'ar' ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-700">
                    {language === 'ar' ? 'استجابة خلال 24 ساعة' : 'Response within 24 hours'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-700">
                    {language === 'ar' ? 'استشارة أولية مجانية' : 'Free initial consultation'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-700">
                    {language === 'ar' ? 'فريق خبراء متخصص' : 'Expert specialized team'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Multi-step Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {language === 'ar' ? 'ابدأ رحلتك معنا' : 'Start Your Journey With Us'}
                  </CardTitle>
                  <Badge variant="outline" className="text-indigo-600 border-indigo-300">
                    {language === 'ar' ? `الخطوة ${formStep} من 3` : `Step ${formStep} of 3`}
                  </Badge>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(formStep / 3) * 100}%` }}
                  ></div>
                </div>
                
                <CardDescription className="text-right">
                  {language === 'ar' 
                    ? 'املأ النموذج وسنتواصل معك خلال 24 ساعة لمناقشة احتياجاتك'
                    : 'Fill out the form and we\'ll get back to you within 24 hours to discuss your needs'
                  }
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {renderFormStep()}
                  
                  <div className="flex justify-between mt-8">
                    {formStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevStep}
                        className="px-6 py-2"
                      >
                        {language === 'ar' ? 'السابق' : 'Previous'}
                      </Button>
                    )}
                    
                    <div className="flex-1"></div>
                    
                    {formStep < 3 ? (
                      <Button
                        type="button"
                        onClick={handleNextStep}
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2"
                      >
                        {language === 'ar' ? 'التالي' : 'Next'}
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-2 flex items-center space-x-2 rtl:space-x-reverse"
                      >
                        <Send className="h-4 w-4" />
                        <span>{language === 'ar' ? 'إرسال الطلب' : 'Send Request'}</span>
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {language === 'ar' ? 'أو تواصل معنا مباشرة' : 'Or Contact Us Directly'}
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 rtl:space-x-reverse"
            >
              <Phone className="h-5 w-5" />
              <span>{language === 'ar' ? 'اتصل بنا الآن' : 'Call Us Now'}</span>
            </Button>
            <Button
              variant="outline"
              className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 rtl:space-x-reverse"
            >
              <Mail className="h-5 w-5" />
              <span>{language === 'ar' ? 'راسلنا عبر البريد' : 'Email Us'}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;