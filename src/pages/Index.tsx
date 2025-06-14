
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ContactSection from '@/components/ContactSection';
import ScrollIndicator from '@/components/ScrollIndicator';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <ScrollIndicator />
      <HeroSection />
      <FeaturesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-white/60">
            © 2024 HighTPS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
