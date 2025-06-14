
import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="w-1 h-32 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="w-full bg-gradient-to-t from-white/80 to-white/40 transition-all duration-300 rounded-full"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
      <div className="mt-4 text-xs text-white/50 text-center">
        {Math.round(scrollProgress)}%
      </div>
    </div>
  );
};

export default ScrollIndicator;
