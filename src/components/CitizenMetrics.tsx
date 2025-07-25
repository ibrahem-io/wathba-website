import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SkeletonCard from './SkeletonCard';
import { TrendingUp, Clock, Users, CheckCircle } from 'lucide-react';

const CitizenMetrics: React.FC = () => {
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [animatedValues, setAnimatedValues] = useState({
    processing: 0,
    waitTime: 0,
    satisfaction: 0,
    efficiency: 0
  });

  const targetValues = {
    processing: 95,
    waitTime: 85,
    satisfaction: 98,
    efficiency: 90
  };

  useEffect(() => {
    // Simulate loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setAnimatedValues({
          processing: Math.round(targetValues.processing * easeOutQuart),
          waitTime: Math.round(targetValues.waitTime * easeOutQuart),
          satisfaction: Math.round(targetValues.satisfaction * easeOutQuart),
          efficiency: Math.round(targetValues.efficiency * easeOutQuart)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    };

    // Start animation after component mounts
    const startDelay = setTimeout(animateCounters, 1300);
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(startDelay);
    };
  }, []);

  const metrics = [
    {
      icon: TrendingUp,
      value: animatedValues.processing,
      target: targetValues.processing,
      labelAr: 'معدل رضا العملاء',
      labelEn: 'Client Satisfaction Rate',
      color: 'bg-green-100 text-green-700',
      progressColor: 'bg-green-500'
    },
    {
      icon: Clock,
      value: animatedValues.waitTime,
      target: targetValues.waitTime,
      labelAr: 'تحسن الكفاءة التشغيلية',
      labelEn: 'Operational Efficiency Improvement',
      color: 'bg-blue-100 text-blue-700',
      progressColor: 'bg-blue-500'
    },
    {
      icon: Users,
      value: animatedValues.satisfaction,
      target: targetValues.satisfaction,
      labelAr: 'نجاح تنفيذ المشاريع',
      labelEn: 'Project Success Rate',
      color: 'bg-purple-100 text-purple-700',
      progressColor: 'bg-purple-500'
    },
    {
      icon: CheckCircle,
      value: animatedValues.efficiency,
      target: targetValues.efficiency,
      labelAr: 'تحقيق الأهداف الاستراتيجية',
      labelEn: 'Strategic Goals Achievement',
      color: 'bg-orange-100 text-orange-700',
      progressColor: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="center-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? 'إنجازاتنا وتأثيرنا الإيجابي' : 'Our Achievements and Positive Impact'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'نتائج قابلة للقياس في تحسين أداء المؤسسات وتحقيق أهدافها الاستراتيجية'
              : 'Measurable results in improving organizational performance and achieving strategic goals'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {isLoading ? (
            [...Array(4)].map((_, index) => (
              <SkeletonCard key={index} variant="metric" />
            ))
          ) : (
            metrics.map((metric, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-lg ${metric.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <metric.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-4xl font-bold text-gray-900 mb-2">
                  <span className="metric-number">{metric.value}%</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <p className="text-gray-700 font-medium text-right mb-1 mixed-content">
                    {metric.labelAr}
                  </p>
                  <p className="text-sm text-gray-500 mixed-content">
                    {metric.labelEn}
                  </p>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div 
                    className={`${metric.progressColor} h-3 rounded-full transition-all duration-2000 ease-out`}
                    style={{ width: `${(metric.value / 100) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </CardContent>
            </Card>
          ))
          )}
        </div>

        {/* Additional Impact Metrics */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-700 mb-2">100+</div>
              <div className="text-gray-600 font-medium">
                {language === 'ar' ? 'عميل راضٍ' : 'Satisfied Clients'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-700 mb-2">50+</div>
              <div className="text-gray-600 font-medium">
                {language === 'ar' ? 'مشروع ناجح' : 'Successful Projects'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-700 mb-2">5+</div>
              <div className="text-gray-600 font-medium">
                {language === 'ar' ? 'سنوات خبرة' : 'Years of Experience'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitizenMetrics;