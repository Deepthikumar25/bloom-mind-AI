
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-wellness-blue/10 to-wellness-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-wellness-pink/10 to-wellness-teal/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-wellness-green/10 to-wellness-indigo/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-wellness-blue/20 rounded-full floating-animation"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-wellness-purple/20 rounded-full floating-animation delay-500"></div>
      <div className="absolute bottom-32 left-40 w-5 h-5 bg-wellness-teal/20 rounded-full floating-animation delay-1000"></div>
      <div className="absolute bottom-48 right-20 w-2 h-2 bg-wellness-pink/20 rounded-full floating-animation delay-1500"></div>
    </div>
  );
};

export default AnimatedBackground;
