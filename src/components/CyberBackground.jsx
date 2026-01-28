import React from 'react';

const CyberBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      {/* Base Grid - Purple Theme */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
          animation: 'grid-flow 25s linear infinite',
        }}
      />
      
      {/* Ambient Glows - Cyan & Purple */}
      <div className="absolute inset-0">
         <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute bg-current w-1 h-1 rounded-full animate-float"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    color: Math.random() > 0.5 ? '#a855f7' : '#06b6d4',
                    animationDuration: `${10 + Math.random() * 20}s`,
                    animationDelay: `-${Math.random() * 20}s`
                }}
              />
          ))}
      </div>

      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black opacity-90" />
      
      <style jsx>{`
        @keyframes grid-flow {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(40px) translateZ(-200px); }
        }
        @keyframes float {
            0%, 100% { transform: translate(0, 0); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translate(-20px, -100px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default CyberBackground;
