
import { useEffect, useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const FeatureCard = ({ title, description, icon: Icon, delay = 0 }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`glass-card p-6 group hover:bg-white/10 transition-all duration-500 cursor-pointer glow-border hover:shadow-2xl hover:shadow-white/10 hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
        <Icon size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-white/90 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
