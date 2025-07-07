import React from 'react';
import { useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { useRTL } from './hooks/useRTL';
import { optimizeForGovernmentNetwork } from './utils/performance';
import Header from './components/Header';
import TrustIndicators from './components/TrustIndicators';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import CitizenMetrics from './components/CitizenMetrics';
import Agencies from './components/Agencies';
import Security from './components/Security';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContent: React.FC = () => {
  useRTL();

  useEffect(() => {
    // Initialize performance optimizations
    optimizeForGovernmentNetwork();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TrustIndicators />
      <main>
        <Hero />
        <Solutions />
        <CitizenMetrics />
        <Agencies />
        <Security />
        <About />
        <Contact />
      </main>
      <Footer />
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