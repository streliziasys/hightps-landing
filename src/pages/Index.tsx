
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import NodesSection from '@/components/NodesSection';
import ContactSection from '@/components/ContactSection';
import ScrollIndicator from '@/components/ScrollIndicator';
import Loading from '@/components/Loading';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <ScrollIndicator />
      <HeroSection />
      <FeaturesSection />
      <NodesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black/50 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-50"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <p className="text-white/60 hover:text-white/80 transition-colors duration-300 glow-text">
            © 2025 HighTPS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
