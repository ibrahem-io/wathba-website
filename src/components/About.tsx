import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('about.mission'),
      description: t('about.mission.desc'),
      color: 'bg-purple-100 text-purple-700'
    },
    {
      icon: Eye,
      title: t('about.vision'),
      description: t('about.vision.desc'),
      color: 'bg-green-100 text-green-700'
    }
  ];

  const stats = [
    { number: '50+', label: 'Government Agencies' },
    { number: '1M+', label: 'Citizens Served' },
    { number: '99.9%', label: 'Uptime Achieved' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className={`w-12 h-12 rounded-lg ${value.color} flex items-center justify-center flex-shrink-0`}>
                    <value.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-50 to-green-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-purple-700 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-purple-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-purple-700" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Excellence in Government Technology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Recognized as a leader in government AI solutions, we've helped transform how Saudi agencies serve their citizens through innovative technology.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-700" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Dedicated Expert Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Our team of AI specialists, security experts, and government technology consultants work around the clock to ensure your success.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;