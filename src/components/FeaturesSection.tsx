
import FeatureCard from './FeatureCard';
import { Server, Zap, Shield, Globe, Bot, Database } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "KVM VPS Hosting",
      description: "Full root access with dedicated resources. Perfect for applications requiring complete control and maximum performance.",
      icon: Server,
      delay: 0
    },
    {
      title: "Minecraft Hosting",
      description: "Optimized servers with 1-click mod installer, player manager, and server properties configuration. Built for gaming.",
      icon: Database,
      delay: 100
    },
    {
      title: "Bot Hosting",
      description: "Deploy Discord bots, Telegram bots, and custom applications with 24/7 uptime and automatic scaling.",
      icon: Bot,
      delay: 200
    },
    {
      title: "Web Hosting",
      description: "Host websites, APIs, and web applications with free SSL certificates and global CDN integration.",
      icon: Globe,
      delay: 300
    },
    {
      title: "High Performance",
      description: "Blazing-fast NVMe SSD storage, premium network connectivity, and enterprise-grade hardware infrastructure.",
      icon: Zap,
      delay: 400
    },
    {
      title: "Premium Security",
      description: "DDoS protection, automated backups, SSL certificates, and advanced firewall configurations included free.",
      icon: Shield,
      delay: 500
    }
  ];

  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/2 to-transparent opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-slide-up">
            Premium Features, Zero Cost
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Everything you need to host your projects with enterprise-level features and blazing performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
