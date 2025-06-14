
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-shimmer animate-text-shimmer">
            HighTPS
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-4 font-light leading-relaxed">
            Free Premium Hosting for Everything You Need
          </p>
          <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto">
            KVM VPS • Bot Hosting • Web Hosting • Minecraft Hosting & More
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-white to-white/90 hover:from-white/90 hover:to-white text-black font-bold px-10 py-5 text-xl transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-white/20 border-2 border-white/20 animate-glow-pulse"
              onClick={() => window.open('https://panel.hightps.pro', '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
              <Zap className="mr-3 group-hover:rotate-12 transition-transform duration-200" size={24} />
              Access Panel
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-200" size={24} />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group glint-effect bg-transparent border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-5 text-lg transition-all duration-300 hover:scale-105 hover:border-white/80"
              onClick={() => window.open('https://discord.gg/hightps', '_blank')}
            >
              Join Discord
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
