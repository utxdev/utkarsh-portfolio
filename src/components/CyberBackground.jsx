```javascript
import React from 'react';

const CyberBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#1A110D]"> {/* coffee-950 hex approximately */}
      {/* Base Grid - Coffee Theme */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
linear - gradient(rgba(111, 78, 55, 0.1) 1px, transparent 1px),
  linear - gradient(90deg, rgba(111, 78, 55, 0.1) 1px, transparent 1px)
    `,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
          animation: 'grid-flow 40s linear infinite', // Slowed down
        }}
      />
      
      {/* Ambient Glows - Latte & Coffee */}
      <div className="absolute inset-0">
         <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#E0B48C]/20 rounded-full blur-[120px] animate-pulse-slow" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#6F4E37]/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
      </div>

      {/* Floating Particles - Coffee Grounds */}
      <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute bg-current w-1 h-1 rounded-full animate-float"
                style={{
                    left: `${ Math.random() * 100 }% `,
                    top: `${ Math.random() * 100 }% `,
                    color: Math.random() > 0.5 ? '#6F4E37' : '#E0B48C', // Coffee Brown or Latte
                    animationDuration: `${ 15 + Math.random() * 20 } s`,
                    animationDelay: `- ${ Math.random() * 20 } s`
                }}
              />
          ))}
      </div>

      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#1A110D]/40 to-[#1A110D] opacity-90" />
      
      <style jsx>{`
@keyframes grid - flow {
  0 % { transform: perspective(500px) rotateX(60deg) translateY(0) translateZ(- 200px);
}
100 % { transform: perspective(500px) rotateX(60deg) translateY(40px) translateZ(- 200px); }
        }
`}</style>
    </div>
  );
};

export default CyberBackground;
```
