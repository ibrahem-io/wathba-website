import React, { useState } from 'react';
import { useEffect, Suspense } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { useRTL } from './hooks/useRTL';
import { optimizeForGovernmentNetwork } from './utils/performance';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import LoadingPlaceholder from './components/LoadingPlaceholder';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import CitizenMetrics from './components/CitizenMetrics';
import Agencies from './components/Agencies';
import Security from './components/Security';
import About from './components/About';
import Contact from './components/Contact';

const AppContent: React.FC = () => {
  useRTL();
  const [activeTab, setActiveTab] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Initialize performance optimizations
    optimizeForGovernmentNetwork();
  }, []);

  const handleTabChange = (newTab: string) => {
    if (newTab === activeTab) return;
    
    setIsTransitioning(true);
    
    // Smooth transition delay
    setTimeout(() => {
      setActiveTab(newTab);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 200);
  };

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'home':
        return <Hero />;
      case 'solutions':
        return <Solutions />;
      case 'metrics':
        return <CitizenMetrics />;
      case 'agencies':
        return <Agencies />;
      case 'security':
        return <Security />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex flex-col overflow-hidden">
      <Header />
      <TabNavigation activeTab={activeTab} setActiveTab={handleTabChange} />
      <main className="flex-1 overflow-y-auto">
        <div className={`min-h-full transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <Suspense fallback={<LoadingPlaceholder />}>
            {isTransitioning ? <LoadingPlaceholder /> : renderActiveSection()}
          </Suspense>
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;