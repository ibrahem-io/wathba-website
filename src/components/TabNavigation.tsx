import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Cpu, 
  TrendingUp, 
  Building2, 
  Shield, 
  Info, 
  MessageCircle,
  Sparkles
} from 'lucide-react';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  const { language, t } = useLanguage();

  const tabs = [
    {
      id: 'home',
      labelAr: 'الرئيسية',
      labelEn: 'Home',
      icon: Home,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'solutions',
      labelAr: 'حلول الذكاء الاصطناعي',
      labelEn: 'AI Solutions',
      icon: Cpu,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 'metrics',
      labelAr: 'المؤشرات',
      labelEn: 'Metrics',
      icon: TrendingUp,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 'agencies',
      labelAr: 'الوكالات',
      labelEn: 'Agencies',
      icon: Building2,
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 'security',
      labelAr: 'الأمان',
      labelEn: 'Security',
      icon: Shield,
      gradient: 'from-red-500 to-rose-600'
    },
    {
      id: 'about',
      labelAr: 'عن وثبة',
      labelEn: 'About',
      icon: Info,
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      id: 'contact',
      labelAr: 'تواصل معنا',
      labelEn: 'Contact',
      icon: MessageCircle,
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            
            return (
              <Button
                key={tab.id}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative min-w-fit px-4 py-2 rounded-xl font-medium transition-all duration-300 group
                  ${isActive 
                    ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg scale-105` 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }
                `}
              >
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  <span className="text-sm whitespace-nowrap">
                    {language === 'ar' ? tab.labelAr : tab.labelEn}
                  </span>
                  {isActive && (
                    <Sparkles className="h-3 w-3 text-white/80 animate-pulse" />
                  )}
                </div>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                )}
                
                {/* Hover effect */}
                {!isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${tab.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;