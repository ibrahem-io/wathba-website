import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import SkeletonCard from './SkeletonCard';
import { 
  Building2, Users, BarChart3, FileText, Shield, MapPin, ArrowRight, TrendingUp, 
  Brain, Zap, Sparkles, Globe, Code, Database, Cloud, Smartphone, Monitor, Cog, CheckCircle 
} from 'lucide-react';

const Solutions: React.FC = () => {
  const { language, t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', labelAr: 'جميع الحلول', labelEn: 'All Solutions' },
    { id: 'ai', labelAr: 'الذكاء الاصطناعي', labelEn: 'AI Solutions' },
    { id: 'digital', labelAr: 'التحول الرقمي', labelEn: 'Digital Transformation' },
    { id: 'consulting', labelAr: 'الاستشارات', labelEn: 'Consulting' },
    { id: 'development', labelAr: 'التطوير', labelEn: 'Development' }
  ];

  const solutions = [
    {
      icon: Brain,
      titleAr: 'حلول الذكاء الاصطناعي المتقدمة',
      titleEn: 'Advanced AI Solutions',
      descAr: 'تطوير وتنفيذ حلول الذكاء الاصطناعي المخصصة لتحسين العمليات وزيادة الكفاءة',
      descEn: 'Develop and implement custom AI solutions to improve processes and increase efficiency',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      category: 'ai',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      caseStudy: 'تحسين كفاءة العمليات بنسبة 85% لشركة رائدة'
    },
    {
      icon: Globe,
      titleAr: 'استراتيجيات التحول الرقمي',
      titleEn: 'Digital Transformation Strategies',
      descAr: 'وضع وتنفيذ استراتيجيات شاملة للتحول الرقمي تتماشى مع أهداف المؤسسة',
      descEn: 'Develop and implement comprehensive digital transformation strategies aligned with organizational goals',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      category: 'digital',
      features: ['Digital Strategy', 'Process Automation', 'Cloud Migration', 'Change Management'],
      caseStudy: 'تحويل رقمي شامل لمؤسسة حكومية كبرى'
    },
    {
      icon: Code,
      titleAr: 'تطوير التطبيقات المخصصة',
      titleEn: 'Custom Application Development',
      descAr: 'تصميم وتطوير تطبيقات مخصصة تلبي احتياجات العمل الفريدة',
      descEn: 'Design and develop custom applications that meet unique business needs',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      category: 'development',
      features: ['Web Applications', 'Mobile Apps', 'Enterprise Software', 'API Integration'],
      caseStudy: 'تطوير منصة إدارة متكاملة لشركة تجارية'
    },
    {
      icon: Database,
      titleAr: 'إدارة البيانات والتحليلات',
      titleEn: 'Data Management & Analytics',
      descAr: 'حلول شاملة لإدارة البيانات وتحليلها لاتخاذ قرارات مدروسة',
      descEn: 'Comprehensive solutions for data management and analytics for informed decision-making',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      category: 'ai',
      features: ['Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization'],
      caseStudy: 'نظام تحليلات متقدم لمؤسسة مالية'
    },
    {
      icon: Cloud,
      titleAr: 'الحلول السحابية المتقدمة',
      titleEn: 'Advanced Cloud Solutions',
      descAr: 'تصميم وتنفيذ بنية تحتية سحابية آمنة وقابلة للتوسع',
      descEn: 'Design and implement secure and scalable cloud infrastructure',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
      category: 'digital',
      features: ['Cloud Architecture', 'DevOps', 'Security', 'Cost Optimization'],
      caseStudy: 'هجرة سحابية ناجحة لمؤسسة تعليمية'
    },
    {
      icon: Shield,
      titleAr: 'الأمن السيبراني والامتثال',
      titleEn: 'Cybersecurity & Compliance',
      descAr: 'حماية شاملة للأصول الرقمية وضمان الامتثال للمعايير الدولية',
      descEn: 'Comprehensive protection of digital assets and ensuring compliance with international standards',
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-red-50',
      category: 'consulting',
      features: ['Security Assessment', 'Compliance Management', 'Risk Analysis', 'Incident Response'],
      caseStudy: 'تعزيز الأمن السيبراني لبنك رائد'
    }
  ];

  const filteredSolutions = selectedCategory === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.category === selectedCategory);

  return (
    <section className="min-h-full py-12 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cog className="h-4 w-4 animate-spin" />
            <span>{language === 'ar' ? 'حلولنا المتقدمة' : 'Our Advanced Solutions'}</span>
            <Sparkles className="h-4 w-4 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {language === 'ar' ? 'حلول تقنية' : 'Technology Solutions'}
            </span>
            <br />
            <span className="text-gray-800">
              {language === 'ar' ? 'مبتكرة ومخصصة' : 'Innovative & Custom'}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'نقدم حلولاً تقنية متطورة ومخصصة تلبي احتياجات عملائنا وتحقق أهدافهم الاستراتيجية'
              : 'We provide advanced and customized technology solutions that meet our clients\' needs and achieve their strategic goals'
            }
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:text-indigo-600 hover:border-indigo-300'
              }`}
            >
              {language === 'ar' ? category.labelAr : category.labelEn}
            </Button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {isLoading ? (
            [...Array(6)].map((_, index) => (
              <SkeletonCard key={index} variant="ai" />
            ))
          ) : (
            filteredSolutions.map((solution, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer transition-all duration-500 hover:shadow-xl border-gray-200 hover:scale-105 bg-white/80 backdrop-blur-sm animate-fade-in">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <solution.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="flex justify-center mb-3">
                        <Badge variant="outline" className="text-xs font-medium capitalize">
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
                      
                      <Button 
                        variant="ghost" 
                        className="w-full text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition-all duration-300 group-hover:bg-indigo-100 group-hover:scale-105"
                      >
                        <Sparkles className="mr-2 h-4 w-4" />
                        {language === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                        <ArrowRight className={`ml-2 h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-right mb-4">
                      {language === 'ar' ? solution.titleAr : solution.titleEn}
                    </DialogTitle>
                    <DialogDescription className="text-right text-lg">
                      {language === 'ar' ? solution.descAr : solution.descEn}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-right">
                        {language === 'ar' ? 'الميزات الرئيسية:' : 'Key Features:'}
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 rtl:space-x-reverse">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Case Study */}
                    <div className={`${solution.bgColor} p-4 rounded-xl`}>
                      <h4 className="font-semibold text-gray-900 mb-2 text-right">
                        {language === 'ar' ? 'دراسة حالة:' : 'Case Study:'}
                      </h4>
                      <p className="text-sm text-gray-700 text-right">
                        {solution.caseStudy}
                      </p>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex gap-3 justify-center">
                      <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                        {language === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
                      </Button>
                      <Button variant="outline">
                        {language === 'ar' ? 'تحميل المزيد' : 'Download More'}
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))
          )}
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                <Zap className="h-6 w-6 text-yellow-300" />
                <span className="text-lg font-semibold">
                  {language === 'ar' ? 'حلول مخصصة لكل عميل' : 'Customized Solutions for Every Client'}
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-right">
                {language === 'ar' ? 'هل تحتاج حلاً مخصصاً؟' : 'Need a Custom Solution?'}
              </h3>
              <p className="text-indigo-100 mb-6 text-right leading-relaxed">
                {language === 'ar' 
                  ? 'نعمل معك لتطوير حلول تقنية مبتكرة تلبي احتياجاتك الفريدة وتحقق أهدافك الاستراتيجية'
                  : 'We work with you to develop innovative technology solutions that meet your unique needs and achieve your strategic goals'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-indigo-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                  {language === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold">
                  {language === 'ar' ? 'تحدث مع خبير' : 'Talk to Expert'}
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="font-medium">
                    {language === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
                  </span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                  <span className="font-medium">
                    {language === 'ar' ? 'تحليل احتياجات مفصل' : 'Detailed Needs Analysis'}
                  </span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Users className="h-5 w-5 text-purple-400" />
                  <span className="font-medium">
                    {language === 'ar' ? 'فريق متخصص' : 'Specialized Team'}
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