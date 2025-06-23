
import { Loader } from 'lucide-react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent" />
      
      <div className="relative z-10 text-center">
        {/* Main logo/title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white animate-pulse">
          HighTPS
        </h1>
        
        {/* Loading spinner */}
        <div className="flex items-center justify-center mb-4">
          <Loader className="w-8 h-8 text-blue-400 animate-spin" />
        </div>
        
        {/* Loading text */}
        <p className="text-white/70 text-lg animate-pulse">
          Loading premium hosting...
        </p>
        
        {/* Loading bar */}
        <div className="mt-6 w-64 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" 
               style={{ animation: 'loading-bar 2s ease-in-out infinite' }} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
