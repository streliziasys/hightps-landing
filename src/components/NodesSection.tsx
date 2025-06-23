
import { useEffect, useState } from 'react';
import { Server, Cpu, HardDrive, Zap, Globe, Clock } from 'lucide-react';

const NodesSection = () => {
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

    const section = document.getElementById('nodes');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const nodes = [
    {
      name: "Malaysia Node",
      location: "🇲🇾 Malaysia",
      specs: {
        ram: "256 GB DDR5 RAM",
        cpu: "32 Cores Intel Xeon E3-1270 v6",
        frequency: "3.791 GHz",
        storage: "1.41 TB NVMe SSD"
      },
      delay: 0
    },
    {
      name: "USA Node [Paid]", 
      location: "USA 🇺🇸",
      specs: {
        ram: "256 GB DDR5 RAM",
        cpu: "18 Cores Ryzen 9 7900",
        frequency: "3.699 GHz",
        storage: "1 TB NVMe SSD"
      },
      delay: 200
    }
  ];

  return (
    <section id="nodes" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Our Global Infrastructure
          </h2>
          <p className={`text-xl text-white/70 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Enterprise-grade servers strategically located worldwide for optimal performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {nodes.map((node, index) => (
            <div
              key={index}
              className={`glass-card p-8 relative overflow-hidden group hover:scale-105 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${node.delay}ms` }}
            >
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              
              {/* Node Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <Globe className="text-blue-400" size={28} />
                    {node.name}
                  </h3>
                  <p className="text-lg text-white/80">{node.location}</p>
                </div>
                <Server className="text-purple-400 group-hover:rotate-12 transition-transform duration-300" size={48} />
              </div>

              {/* Specifications */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <Zap className="text-green-400 flex-shrink-0" size={20} />
                  <div>
                    <span className="text-white/60 text-sm">Memory:</span>
                    <p className="text-white font-semibold">{node.specs.ram}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <Cpu className="text-blue-400 flex-shrink-0" size={20} />
                  <div>
                    <span className="text-white/60 text-sm">Processor:</span>
                    <p className="text-white font-semibold">{node.specs.cpu}</p>
                    <p className="text-white/70 text-sm">{node.specs.frequency}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <HardDrive className="text-orange-400 flex-shrink-0" size={20} />
                  <div>
                    <span className="text-white/60 text-sm">Storage:</span>
                    <p className="text-white font-semibold">{node.specs.storage}</p>
                  </div>
                </div>
              </div>

              {/* Performance Badge */}
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-300">99.9% Uptime</span>
              </div>
            </div>
          ))}

          {/* More Nodes Soon Card */}
          <div
            className={`glass-card p-8 relative overflow-hidden group border-2 border-dashed border-white/20 hover:border-blue-400/50 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex flex-col items-center justify-center text-center h-full min-h-[300px]">
              <Clock className="text-blue-400 mb-4 animate-pulse" size={48} />
              <h3 className="text-2xl font-bold text-white mb-4">More Nodes Soon</h3>
              <p className="text-white/70 mb-6 max-w-sm">
                We're expanding our global infrastructure to bring you even better performance and coverage.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-white/60">
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                  Europe
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  Asia Pacific
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                  North America
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-wrap justify-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span>DDoS Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>24/7 Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span>Enterprise Hardware</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full" />
              <span>Global Network</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NodesSection;
