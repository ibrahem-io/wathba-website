import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { 
  MessageCircle, 
  Send, 
  X, 
  Bot, 
  User, 
  Calendar,
  Download,
  Minimize2,
  Maximize2,
  Loader2
} from 'lucide-react';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const AIExpertChat: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [conversationCount, setConversationCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initial greeting message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greetingMessage: Message = {
        id: Date.now().toString(),
        content: language === 'ar' 
          ? 'مرحباً! أنا مساعد ذكي من وثبة للاستشارات. كيف يمكنني مساعدتك في تحقيق أهدافك التقنية والإدارية؟'
          : 'Hello! I\'m an AI assistant from Wathbah Consulting. How can I help you achieve your technology and management goals?',
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages([greetingMessage]);
    }
  }, [isOpen, language]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setConversationCount(prev => prev + 1);

    try {
      // Simulate API call to OpenAI
      const response = await simulateOpenAIResponse(inputValue, messages, language);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);

      // Show Calendly after meaningful conversation
      if (conversationCount >= 4 && response.includes(language === 'ar' ? 'استشارة' : 'consultation')) {
        setTimeout(() => setShowCalendly(true), 2000);
      }
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: language === 'ar' 
          ? 'عذراً، حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.'
          : 'Sorry, an error occurred. Please try again or contact us directly.',
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const exportTranscript = () => {
    const transcript = messages.map(msg => 
      `${msg.role === 'user' ? (language === 'ar' ? 'أنت' : 'You') : (language === 'ar' ? 'وثبة' : 'Wathbah')}: ${msg.content}`
    ).join('\n\n');
    
    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wathbah-consultation-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const resetChat = () => {
    setMessages([]);
    setConversationCount(0);
    setShowCalendly(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce"
          >
            <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
          </Button>
          
          {/* Tooltip */}
          <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {language === 'ar' ? 'اتحدث مع خبير آلي' : 'Talk to an AI Expert'}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
        }`}>
          <Card className="h-full shadow-2xl border-0 bg-white/95 backdrop-blur-lg">
            {/* Header */}
            <CardHeader className="pb-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold">
                      {language === 'ar' ? 'خبير وثبة الآلي' : 'Wathbah AI Expert'}
                    </CardTitle>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs opacity-90">
                        {language === 'ar' ? 'متاح الآن' : 'Available Now'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-white hover:bg-white/20 p-1 h-8 w-8"
                  >
                    {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 p-1 h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {!isMinimized && (
              <>
                {/* Messages */}
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 h-[400px]">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 rtl:space-x-reverse max-w-[80%] ${
                        message.role === 'user' ? 'flex-row-reverse space-x-reverse rtl:space-x-2' : ''
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.role === 'user' 
                            ? 'bg-indigo-100 text-indigo-600' 
                            : 'bg-purple-100 text-purple-600'
                        }`}>
                          {message.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </div>
                        
                        <div className={`rounded-2xl px-4 py-3 ${
                          message.role === 'user'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {message.content}
                          </p>
                          <div className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString(language === 'ar' ? 'ar-SA' : 'en-US', {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="bg-gray-100 rounded-2xl px-4 py-3">
                          <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span className="text-sm text-gray-600">
                              {language === 'ar' ? 'يكتب...' : 'Typing...'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </CardContent>

                {/* Input Area */}
                <div className="p-4 border-t border-gray-200">
                  {messages.length > 2 && (
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {language === 'ar' ? `${messages.length} رسالة` : `${messages.length} messages`}
                      </Badge>
                      <div className="flex space-x-2 rtl:space-x-reverse">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={exportTranscript}
                          className="text-xs h-7 px-2"
                        >
                          <Download className="h-3 w-3 mr-1" />
                          {language === 'ar' ? 'تصدير' : 'Export'}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={resetChat}
                          className="text-xs h-7 px-2"
                        >
                          {language === 'ar' ? 'محادثة جديدة' : 'New Chat'}
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Type your message here...'}
                      className="flex-1 text-right"
                      disabled={isLoading}
                    />
                    <Button
                      onClick={sendMessage}
                      disabled={!inputValue.trim() || isLoading}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    {language === 'ar' 
                      ? 'مدعوم بالذكاء الاصطناعي • استشارة مجانية'
                      : 'Powered by AI • Free Consultation'
                    }
                  </p>
                </div>
              </>
            )}
          </Card>
        </div>
      )}

      {/* Calendly Modal */}
      <Dialog open={showCalendly} onOpenChange={setShowCalendly}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              {language === 'ar' ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-center text-gray-600">
              {language === 'ar' 
                ? 'هل تود حجز استشارة مع فريق الخبراء لدينا؟'
                : 'Would you like to book a consultation with our expert team?'
              }
            </p>
            <div className="flex gap-3 justify-center">
              <Button 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                onClick={() => {
                  // In a real implementation, this would open Calendly
                  window.open('https://calendly.com/wathbah-consultation', '_blank');
                  setShowCalendly(false);
                }}
              >
                <Calendar className="h-4 w-4 mr-2" />
                {language === 'ar' ? 'احجز الآن' : 'Book Now'}
              </Button>
              <Button variant="outline" onClick={() => setShowCalendly(false)}>
                {language === 'ar' ? 'لاحقاً' : 'Later'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

// Simulate OpenAI API response
const simulateOpenAIResponse = async (
  userMessage: string, 
  conversationHistory: Message[], 
  language: string
): Promise<string> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

  const isArabic = language === 'ar';
  const lowerMessage = userMessage.toLowerCase();

  // Detect language from user message
  const arabicPattern = /[\u0600-\u06FF]/;
  const messageIsArabic = arabicPattern.test(userMessage);
  const responseLanguage = messageIsArabic ? 'ar' : 'en';

  // AI responses based on Wathbah's services
  if (lowerMessage.includes('ai') || lowerMessage.includes('ذكاء') || lowerMessage.includes('اصطناعي')) {
    return responseLanguage === 'ar' 
      ? 'نحن متخصصون في ثلاث خدمات رئيسية للذكاء الاصطناعي:\n\n1. الوعي بالبيانات والذكاء الاصطناعي - نساعدك على فهم الإمكانيات\n2. تحديد وتنفيذ حالات الاستخدام - نجد الفرص المناسبة لمؤسستك\n3. إدارة المعرفة المدعومة بالذكاء الاصطناعي - أنظمة ذكية لتحسين الكفاءة\n\nما هو القطاع الذي تعمل فيه مؤسستك؟'
      : 'We specialize in three main AI services:\n\n1. Data & AI Awareness - helping you understand the possibilities\n2. AI Use Case Identification & Implementation - finding the right opportunities for your organization\n3. AI Powered Knowledge Management - intelligent systems to improve efficiency\n\nWhat sector does your organization operate in?';
  }

  if (lowerMessage.includes('digital') || lowerMessage.includes('transformation') || lowerMessage.includes('تحول') || lowerMessage.includes('رقمي')) {
    return responseLanguage === 'ar'
      ? 'التحول الرقمي هو إحدى خدماتنا الأساسية. نقدم:\n\n• استراتيجيات التحول الرقمي الشاملة\n• الاستشارات الإدارية للتغيير\n• استراتيجيات التكنولوجيا والابتكار\n• إدارة التغيير والتطوير التنظيمي\n\nما هي التحديات الرئيسية التي تواجهها مؤسستك حالياً؟'
      : 'Digital transformation is one of our core services. We provide:\n\n• Comprehensive digital transformation strategies\n• Management consulting for change\n• Technology & innovation strategies\n• Change management & organizational development\n\nWhat are the main challenges your organization is currently facing?';
  }

  if (lowerMessage.includes('consulting') || lowerMessage.includes('استشارات') || lowerMessage.includes('استشارة')) {
    return responseLanguage === 'ar'
      ? 'وثبة للاستشارات تجمع بين الشغف السعودي والتميز العالمي. نقدم:\n\n✓ استشارات تقنية متخصصة\n✓ استشارات إدارية استراتيجية\n✓ حلول مخصصة لكل عميل\n✓ فريق خبراء محلي وعالمي\n\nهل تود معرفة المزيد عن خدمة معينة؟'
      : 'Wathbah Consulting combines Saudi passion with global excellence. We offer:\n\n✓ Specialized technology consulting\n✓ Strategic management consulting\n✓ Customized solutions for each client\n✓ Local and global expert team\n\nWould you like to know more about a specific service?';
  }

  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('سعر') || lowerMessage.includes('تكلفة')) {
    return responseLanguage === 'ar'
      ? 'نقدم حلولاً مخصصة لكل عميل، لذا تختلف التكلفة حسب:\n\n• نطاق المشروع وتعقيده\n• المدة الزمنية المطلوبة\n• حجم الفريق المطلوب\n• نوع الخدمة المطلوبة\n\nنقدم استشارة أولية مجانية لتقييم احتياجاتك. هل تود حجز موعد؟'
      : 'We provide customized solutions for each client, so costs vary based on:\n\n• Project scope and complexity\n• Required timeline\n• Team size needed\n• Type of service required\n\nWe offer a free initial consultation to assess your needs. Would you like to schedule an appointment?';
  }

  if (conversationHistory.length > 6) {
    return responseLanguage === 'ar'
      ? 'يبدو أن لديك اهتماماً جدياً بخدماتنا! هل تود حجز استشارة مع فريق الخبراء لدينا لمناقشة احتياجاتك بالتفصيل؟ الاستشارة الأولية مجانية تماماً.'
      : 'It seems you have a serious interest in our services! Would you like to schedule a consultation with our expert team to discuss your needs in detail? The initial consultation is completely free.';
  }

  // Default responses
  const defaultResponses = {
    ar: [
      'شكراً لك على اهتمامك بوثبة للاستشارات. كيف يمكنني مساعدتك اليوم؟',
      'نحن هنا لمساعدتك في تحقيق أهدافك التقنية والإدارية. ما هو التحدي الذي تواجهه؟',
      'وثبة للاستشارات تقدم حلولاً مبتكرة للمؤسسات. هل تود معرفة المزيد عن خدماتنا؟'
    ],
    en: [
      'Thank you for your interest in Wathbah Consulting. How can I help you today?',
      'We\'re here to help you achieve your technology and management goals. What challenge are you facing?',
      'Wathbah Consulting provides innovative solutions for organizations. Would you like to know more about our services?'
    ]
  };

  const responses = defaultResponses[responseLanguage];
  return responses[Math.floor(Math.random() * responses.length)];
};

export default AIExpertChat;