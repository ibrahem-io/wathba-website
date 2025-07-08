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
    'nav.home': 'الصفحة الرئيسية',
    'nav.solutions': 'خدماتنا',
    'nav.agencies': 'من نخدم',
    'nav.security': 'عن وثبة',
    'nav.contact': 'اتصل بنا',
    'nav.demo': 'ابدأ معنا',
    
    // Hero Section
    'hero.title': 'ريادة المستقبل الرقمي',
    'hero.subtitle': 'حيث تلتقي الشغف السعودي بالتميز العالمي',
    'hero.description': 'نمزج بين الابتكار المحلي والعالمي لتحويل المؤسسات. من خلال الحلول الذكية والتكنولوجيا المتطورة، نشارك عملاءنا في تحويل التحديات إلى فرص، مما يمكن نجاح الغد اليوم.',
    'hero.benefit1': 'تحويل التحديات إلى فرص',
    'hero.benefit2': 'حلول ذكية ومتطورة',
    'hero.benefit3': 'شراكة طويلة الأمد للنجاح',
    'hero.benefit4': 'خبرة محلية بمعايير عالمية',
    'hero.cta.primary': 'ابدأ معنا',
    'hero.cta.secondary': 'تعرف على خدماتنا',
    
    // Trust Indicators
    'trust.residency': 'شركة استشارات سعودية',
    'trust.etimad': 'خبرة محلية وعالمية',
    'trust.citc': 'حلول تقنية متطورة',
    'trust.iso': 'شراكة طويلة الأمد',
    
    // Solutions
    'solutions.title': 'خدماتنا المتخصصة',
    'solutions.subtitle': 'نقدم حلولاً متطورة في التكنولوجيا والاستشارات الإدارية',
    'solutions.citizen': 'الوعي بالبيانات والذكاء الاصطناعي',
    'solutions.citizen.desc': 'نساعد المؤسسات على فهم إمكانيات البيانات والذكاء الاصطناعي وتطبيقها بفعالية',
    'solutions.analytics': 'تحديد وتنفيذ حالات استخدام الذكاء الاصطناعي',
    'solutions.analytics.desc': 'نحدد الفرص المناسبة لتطبيق الذكاء الاصطناعي ونساعد في تنفيذها',
    'solutions.automation': 'إدارة المعرفة المدعومة بالذكاء الاصطناعي',
    'solutions.automation.desc': 'نطور أنظمة إدارة المعرفة الذكية لتحسين الكفاءة والإنتاجية',
    'solutions.security': 'التحول الرقمي والاستشارات',
    'solutions.security.desc': 'نقدم استشارات شاملة للتحول الرقمي واستراتيجيات الابتكار',
    
    // Agencies Section
    'agencies.title': 'من نخدم',
    'agencies.subtitle': 'نعمل مع مجموعة متنوعة من القطاعات والمؤسسات',
    
    // Security
    'security.title': 'عن وثبة للاستشارات',
    'security.subtitle': 'حيث تلتقي الشغف السعودي بالتميز العالمي كشركة استشارات تقنية وإدارية طموحة جداً',
    'security.compliance': 'رؤيتنا',
    'security.compliance.desc': 'أن نكون الشريك الأكثر قيمة للمؤسسات، مما يمكنها من التنقل في عصر الإمكانيات بثقة وابتكار',
    'security.encryption': 'مهمتنا',
    'security.encryption.desc': 'مساعدة عملائنا على إطلاق الإمكانات الكاملة للتقنيات المتطورة والمبتكرة، وتقديم القيمة في كل خطوة',
    'security.audit': 'أسسنا الخمسة',
    'security.audit.desc': 'التنوع، الانفتاح، الابتكار، الدفء، والتعاون - هذه هي الركائز التي نبني عليها نجاحنا',
    
    // About
    'about.title': 'عن وثبة للاستشارات',
    'about.subtitle': 'شركة استشارات تقنية وإدارية طموحة تجمع بين الخبرة المحلية والتميز العالمي',
    'about.mission': 'مهمتنا',
    'about.mission.desc': 'مساعدة عملائنا على إطلاق الإمكانات الكاملة للتقنيات المتطورة والمبتكرة، وتقديم القيمة في كل خطوة',
    'about.vision': 'رؤيتنا',
    'about.vision.desc': 'أن نكون الشريك الأكثر قيمة للمؤسسات، مما يمكنها من التنقل في عصر الإمكانيات بثقة وابتكار',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'تواصل مع فريقنا المتخصص لمناقشة أهدافك وكيف يمكننا مساعدتك',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.address': 'العنوان',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.agency': 'الشركة أو المؤسسة',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال الطلب',
    
    // Footer
    'footer.description': 'شركة استشارات تقنية وإدارية سعودية تجمع بين الشغف المحلي والتميز العالمي',
    'footer.links': 'روابط مفيدة',
    'footer.legal': 'الشروط القانونية',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'الشروط والأحكام',
    'footer.rights': 'جميع الحقوق محفوظة',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.solutions': 'Services',
    'nav.agencies': 'Who We Serve',
    'nav.security': 'About',
    'nav.contact': 'Contact',
    'nav.demo': 'Get Started',
    
    // Hero Section
    'hero.title': 'Pioneering The Digital Future',
    'hero.subtitle': 'Where Saudi passion meets global excellence',
    'hero.description': 'We blend local and global innovation to transform organizations. Through intelligent solutions and cutting-edge technology, we partner with our clients to turn challenges into opportunities, enabling tomorrow\'s success today.',
    'hero.benefit1': 'Turn challenges into opportunities',
    'hero.benefit2': 'Intelligent and cutting-edge solutions',
    'hero.benefit3': 'Long-term partnership for success',
    'hero.benefit4': 'Local expertise with global standards',
    'hero.cta.primary': 'Get Started',
    'hero.cta.secondary': 'Explore Our Services',
    
    // Trust Indicators
    'trust.residency': 'Saudi Consulting Firm',
    'trust.etimad': 'Local & Global Expertise',
    'trust.citc': 'Cutting-edge Solutions',
    'trust.iso': 'Long-term Partnership',
    
    // Solutions
    'solutions.title': 'Our Specialized Services',
    'solutions.subtitle': 'We provide advanced solutions in technology and management consulting',
    'solutions.citizen': 'Data & AI Awareness',
    'solutions.citizen.desc': 'We help organizations understand the potential of data and AI and apply them effectively',
    'solutions.analytics': 'AI Use Case Identification & Implementation',
    'solutions.analytics.desc': 'We identify suitable opportunities for AI application and help implement them',
    'solutions.automation': 'AI Powered Knowledge Management',
    'solutions.automation.desc': 'We develop intelligent knowledge management systems to improve efficiency and productivity',
    'solutions.security': 'Digital Transformation & Consulting',
    'solutions.security.desc': 'We provide comprehensive consulting for digital transformation and innovation strategies',
    
    // Agencies Section
    'agencies.title': 'Who We Serve',
    'agencies.subtitle': 'We work with a diverse range of sectors and organizations',
    
    // Security
    'security.title': 'About Wathbah Consulting',
    'security.subtitle': 'Where Saudi passion meets global excellence as a very ambitious technology and management consulting firm',
    'security.compliance': 'Our Vision',
    'security.compliance.desc': 'To be the most value-delivering partner for organizations, enabling them to navigate the age of possibilities with confidence and innovation',
    'security.encryption': 'Our Mission',
    'security.encryption.desc': 'To help our clients unlock the full potential of cutting-edge and innovative technologies, delivering value at every step',
    'security.audit': 'Our Five Pillars',
    'security.audit.desc': 'Diversity, Openness, Innovation, Warmth, and Collaboration - these are the pillars we build our success on',
    
    // About
    'about.title': 'About Wathbah Consulting',
    'about.subtitle': 'An ambitious technology and management consulting firm that combines local expertise with global excellence',
    'about.mission': 'Our Mission',
    'about.mission.desc': 'To help our clients unlock the full potential of cutting-edge and innovative technologies, delivering value at every step',
    'about.vision': 'Our Vision',
    'about.vision.desc': 'To be the most value-delivering partner for organizations, enabling them to navigate the age of possibilities with confidence and innovation',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Connect with our specialized team to discuss your goals and how we can help you',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.agency': 'Company/Organization',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Submit Request',
    
    // Footer
    'footer.description': 'Saudi technology and management consulting firm combining local passion with global excellence',
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