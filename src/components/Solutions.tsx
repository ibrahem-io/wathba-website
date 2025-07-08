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
      titleAr: 'الوعي بالبيانات والذكاء الاصطناعي',
      titleEn: 'Data & AI Awareness',
      descAr: 'نساعد المؤسسات على فهم إمكانيات البيانات والذكاء الاصطناعي وكيفية تطبيقها بفعالية في بيئة العمل',
      descEn: 'We help organizations understand the potential of data and AI and how to apply them effectively in the work environment',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      category: 'ai',
      features: ['Data Strategy', 'AI Readiness Assessment', 'Training & Workshops', 'Best Practices'],
      caseStudy: 'تدريب أكثر من 200 موظف على أساسيات الذكاء الاصطناعي'
    },
    {
      icon: Globe,
      titleAr: 'تحديد وتنفيذ حالات استخدام الذكاء الاصطناعي',
      titleEn: 'AI Use Case Identification & Implementation',
      descAr: 'نحدد الفرص المناسبة لتطبيق الذكاء الاصطناعي في مؤسستك ونساعد في تنفيذها بنجاح',
      descEn: 'We identify suitable opportunities for AI application in your organization and help implement them successfully',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      category: 'ai',
      features: ['Use Case Discovery', 'Feasibility Analysis', 'Pilot Implementation', 'Scaling Strategy'],
      caseStudy: 'تنفيذ 15 حالة استخدام للذكاء الاصطناعي في قطاع التجارة الإلكترونية'
    },
    {
      icon: Code,
      titleAr: 'إدارة المعرفة المدعومة بالذكاء الاصطناعي',
      titleEn: 'AI Powered Knowledge Management',
      descAr: 'نطور أنظمة إدارة المعرفة الذكية التي تحسن من الكفاءة والإنتاجية في المؤسسة',
      descEn: 'We develop intelligent knowledge management systems that improve efficiency and productivity in the organization',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      category: 'ai',
      features: ['Knowledge Base Design', 'AI Search & Retrieval', 'Content Management', 'User Experience'],
      caseStudy: 'تطوير نظام إدارة معرفة ذكي لشركة استشارات كبرى'
    },
    {
      icon: Database,
      titleAr: 'التحول الرقمي والاستشارات الإدارية',
      titleEn: 'Digital Transformation & Management Consulting',
      descAr: 'نقدم استشارات شاملة للتحول الرقمي واستراتيجيات الابتكار لتحقيق أهداف المؤسسة',
      descEn: 'We provide comprehensive consulting for digital transformation and innovation strategies to achieve organizational goals',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      category: 'consulting',
      features: ['Digital Strategy', 'Innovation Consulting', 'Change Management', 'Process Optimization'],
      caseStudy: 'استراتيجية تحول رقمي شاملة لمؤسسة حكومية'
    },
    {
      icon: Cloud,
      titleAr: 'استراتيجيات التكنولوجيا والابتكار',
      titleEn: 'Technology & Innovation Strategy',
      descAr: 'نساعد في وضع استراتيجيات التكنولوجيا والابتكار التي تدعم النمو المستدام للمؤسسة',
      descEn: 'We help develop technology and innovation strategies that support sustainable growth for the organization',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
      category: 'consulting',
      features: ['Technology Roadmap', 'Innovation Framework', 'Strategic Planning', 'Implementation Support'],
      caseStudy: 'وضع استراتيجية تكنولوجيا 5 سنوات لشركة تصنيع'
    },
    {
      icon: Shield,
      titleAr: 'إدارة التغيير والتطوير التنظيمي',
      titleEn: 'Change Management & Organizational Development',
      descAr: 'نساعد المؤسسات في إدارة التغيير والتطوير التنظيمي لضمان نجاح المبادرات الجديدة',
      descEn: 'We help organizations manage change and organizational development to ensure the success of new initiatives',
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-red-50',
      category: 'consulting',
      features: ['Change Strategy', 'Training Programs', 'Communication Plans', 'Performance Measurement'],
      caseStudy: 'إدارة تغيير ناجحة لتحول رقمي في قطاع الخدمات المالية'
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
              {language === 'ar' ? 'خدماتنا' : 'Our Services'}
            </span>
            <br />
            <span className="text-gray-800">
              {language === 'ar' ? 'المتخصصة' : 'Specialized'}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'نقدم خدمات متخصصة في التكنولوجيا والاستشارات الإدارية لمساعدة المؤسسات على تحقيق أهدافها'
              : 'We provide specialized services in technology and management consulting to help organizations achieve their goals'
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
                {language === 'ar' ? 'هل أنت مستعد لرفع مستوى عملك؟' : 'Ready to Elevate Your Business?'}
              </h3>
              <p className="text-indigo-100 mb-6 text-right leading-relaxed">
                {language === 'ar' 
                  ? 'تواصل معنا لمناقشة أهدافك وكيف يمكن لخبرتنا أن تساعدك في تحقيق النجاح'
                  : 'Contact us to discuss your goals and how our expertise can help you achieve success'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-indigo-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                  {language === 'ar' ? 'ابدأ معنا' : 'Get Started'}
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold">
                  {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="font-medium">
                    {language === 'ar' ? 'استشارة أولية مجانية' : 'Free Initial Consultation'}
                  </span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                  <span className="font-medium">
                    {language === 'ar' ? 'تحليل شامل للاحتياجات' : 'Comprehensive Needs Analysis'}
                  </span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Users className="h-5 w-5 text-purple-400" />
                  <span className="font-medium">
                    {language === 'ar' ? 'فريق خبراء متخصص' : 'Expert Specialized Team'}
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