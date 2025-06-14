
import { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import { 
  Zap, 
  Settings, 
  Users, 
  Globe, 
  Shield, 
  Gauge 
} from 'lucide-react';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('features');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "1-Click Plugin Installer",
      description: "Install and manage plugins effortlessly with our intuitive one-click system.",
      icon: Zap
    },
    {
      title: "Player Manager",
      description: "Advanced player management tools to control your server community.",
      icon: Users
    },
    {
      title: "Server Properties",
      description: "Fine-tune your server settings with our comprehensive configuration panel.",
      icon: Settings
    },
    {
      title: "Free Subdomain Manager",
      description: "Get your custom subdomain and manage DNS settings with ease.",
      icon: Globe
    },
    {
      title: "High Uptime",
      description: "99.9% uptime guarantee with enterprise-grade infrastructure.",
      icon: Shield
    },
    {
      title: "Blazing Performance",
      description: "Lightning-fast servers optimized for peak performance.",
      icon: Gauge
    }
  ];

  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Powerful Features
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Everything you need to run your server smoothly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 100}
            />
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-white/60 italic">
            And many more features to explore...
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
