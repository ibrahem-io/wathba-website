import React, { createContext, useContext, useState } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.solutions': 'الحلول',
    'nav.agencies': 'الوكالات',
    'nav.security': 'الأمان',
    'nav.contact': 'اتصل بنا',
    'nav.demo': 'احجز عرضاً توضيحياً',
    
    // Hero Section
    'hero.title': 'تمكين الحكومة الذكية بالذكاء الاصطناعي الآمن',
    'hero.subtitle': 'منصة الابتكار الحكومي الرائدة في المملكة العربية السعودية',
    'hero.description': 'منصة وثبة للذكاء الاصطناعي الحكومي تدعم رؤية المملكة ٢٠٣٠ من خلال حلول تقنية متطورة وآمنة لتحسين الخدمات الحكومية وتعزيز تجربة المواطنين والمقيمين',
    'hero.benefit1': 'تحسين كفاءة الخدمات الحكومية بنسبة 85%',
    'hero.benefit2': 'تقليل أوقات الانتظار للمواطنين إلى أقل من دقيقتين',
    'hero.benefit3': 'ضمان أمان البيانات وفقاً لأعلى المعايير الدولية',
    'hero.benefit4': 'دعم رؤية السعودية 2030 للتحول الرقمي',
    'hero.cta.primary': 'استكشف الحلول',
    'hero.cta.secondary': 'تحميل التقرير',
    
    // Trust Indicators
    'trust.residency': '١٠٠٪ إقامة البيانات السعودية',
    'trust.etimad': 'معتمد مسبقاً في منصة اعتماد',
    'trust.citc': 'متوافق مع لوائح هيئة الاتصالات وتقنية المعلومات',
    'trust.iso': 'حاصل على شهادة آيزو ٢٧٠٠١',
    
    // Solutions
    'solutions.title': 'حلول الذكاء الاصطناعي للوكالات الحكومية',
    'solutions.subtitle': 'حلول مخصصة لتحسين الخدمات الحكومية وتعزيز تجربة المواطنين',
    'solutions.citizen': 'خدمات المواطنين',
    'solutions.citizen.desc': 'تحسين تجربة المواطنين من خلال الذكاء الاصطناعي التفاعلي والاستجابة الفورية',
    'solutions.analytics': 'تحليلات البيانات الحكومية',
    'solutions.analytics.desc': 'اتخاذ القرارات المبنية على البيانات والتحليلات المتقدمة لتحسين السياسات',
    'solutions.automation': 'الأتمتة الذكية',
    'solutions.automation.desc': 'تحسين الكفاءة من خلال أتمتة العمليات الحكومية والإجراءات الإدارية',
    'solutions.security': 'الأمان السيبراني المتقدم',
    'solutions.security.desc': 'حماية البيانات الحكومية بتقنيات الذكاء الاصطناعي وأنظمة الكشف المبكر',
    
    // Agencies Section
    'agencies.title': 'الوكالات الحكومية الشريكة',
    'agencies.subtitle': 'نخدم أكثر من 50 وكالة حكومية في المملكة العربية السعودية',
    
    // Security
    'security.title': 'الأمان والامتثال',
    'security.subtitle': 'معايير الأمان الأعلى للبيانات الحكومية مع ضمان الامتثال الكامل للوائح المحلية',
    'security.compliance': 'الامتثال التنظيمي الكامل',
    'security.compliance.desc': 'متوافق مع جميع اللوائح الحكومية السعودية ومعايير الأمن السيبراني',
    'security.encryption': 'التشفير المتقدم متعدد الطبقات',
    'security.encryption.desc': 'تشفير البيانات بأعلى المعايير الدولية مع حماية من النقطة إلى النقطة',
    'security.audit': 'المراجعة والتدقيق المستمر',
    'security.audit.desc': 'نظام شامل لمراجعة وتدقيق العمليات مع تقارير الامتثال الدورية',
    
    // About
    'about.title': 'عن وثبة',
    'about.subtitle': 'رؤيتنا هي تمكين الحكومة السعودية بتقنيات الذكاء الاصطناعي المتقدمة لخدمة أفضل للمواطنين',
    'about.mission': 'مهمتنا',
    'about.mission.desc': 'تطوير حلول الذكاء الاصطناعي المخصصة للوكالات الحكومية السعودية لتحقيق رؤية 2030',
    'about.vision': 'رؤيتنا',
    'about.vision.desc': 'أن نكون المنصة الرائدة للذكاء الاصطناعي الحكومي في المملكة والمنطقة',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'تواصل مع فريقنا المتخصص لاستكشاف الحلول المناسبة لوكالتك الحكومية',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.address': 'العنوان',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.agency': 'الوكالة الحكومية',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال الطلب',
    
    // Footer
    'footer.description': 'منصة الذكاء الاصطناعي الموثوقة للوكالات الحكومية السعودية',
    'footer.links': 'روابط مفيدة',
    'footer.legal': 'الشروط القانونية',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'الشروط والأحكام',
    'footer.rights': 'جميع الحقوق محفوظة',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.agencies': 'Agencies',
    'nav.security': 'Security',
    'nav.contact': 'Contact',
    'nav.demo': 'Book a Demo',
    
    // Hero Section
    'hero.title': 'Empowering Smart Government with Secure AI',
    'hero.subtitle': 'The Kingdom\'s Leading Government Innovation Platform',
    'hero.description': 'Wathba Government AI Platform supports Saudi Vision 2030 through advanced and secure technology solutions to improve government services and enhance the experience of citizens and residents',
    'hero.benefit1': 'Improve government service efficiency by 85%',
    'hero.benefit2': 'Reduce citizen waiting times to under 2 minutes',
    'hero.benefit3': 'Ensure data security with highest international standards',
    'hero.benefit4': 'Support Saudi Vision 2030 digital transformation',
    'hero.cta.primary': 'Explore Solutions',
    'hero.cta.secondary': 'Download Report',
    
    // Trust Indicators
    'trust.residency': '100% Saudi Data Residency',
    'trust.etimad': 'Pre-approved for Etimad Procurement',
    'trust.citc': 'CITC Compliant',
    'trust.iso': 'ISO 27001 Certified',
    
    // Solutions
    'solutions.title': 'AI Solutions for Government Agencies',
    'solutions.subtitle': 'Customized solutions to enhance government services and citizen experience',
    'solutions.citizen': 'Citizen Services',
    'solutions.citizen.desc': 'Enhance citizen experience through interactive AI and instant response capabilities',
    'solutions.analytics': 'Government Data Analytics',
    'solutions.analytics.desc': 'Make data-driven decisions with advanced analytics to improve policies',
    'solutions.automation': 'Smart Automation',
    'solutions.automation.desc': 'Improve efficiency through intelligent automation of government processes and procedures',
    'solutions.security': 'Advanced Cyber Security',
    'solutions.security.desc': 'Protect government data with AI-powered security and early detection systems',
    
    // Agencies Section
    'agencies.title': 'Partner Government Agencies',
    'agencies.subtitle': 'Serving over 50 government agencies across Saudi Arabia',
    
    // Security
    'security.title': 'Security & Compliance',
    'security.subtitle': 'Highest security standards for government data with full compliance to local regulations',
    'security.compliance': 'Full Regulatory Compliance',
    'security.compliance.desc': 'Compliant with all Saudi government regulations and cybersecurity standards',
    'security.encryption': 'Advanced Multi-layered Encryption',
    'security.encryption.desc': 'Data encryption with highest international standards and end-to-end protection',
    'security.audit': 'Continuous Audit & Review',
    'security.audit.desc': 'Comprehensive audit and review system with regular compliance reports',
    
    // About
    'about.title': 'About Wathba',
    'about.subtitle': 'Our vision is to empower Saudi government with advanced AI technologies for better citizen services',
    'about.mission': 'Our Mission',
    'about.mission.desc': 'Developing tailored AI solutions for Saudi government agencies to achieve Vision 2030',
    'about.vision': 'Our Vision',
    'about.vision.desc': 'To be the leading government AI platform in the Kingdom and the region',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Connect with our specialized team to explore the right solutions for your government agency',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.agency': 'Government Agency',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Submit Request',
    
    // Footer
    'footer.description': 'Trusted AI platform for Saudi government agencies',
    'footer.links': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.rights': 'All rights reserved',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar'); // Arabic-first

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};