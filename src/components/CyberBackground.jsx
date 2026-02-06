import React, { useEffect, useRef } from 'react';

const CyberBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particles
    const particles = [];
    const particleCount = 120; // Slightly less dense for cleaner look

    // Colors: Neon Cyan, Neon Pink, Deep Purple, White
    const colors = ['#00F0FF', '#FF003C', '#BD00FF', '#FFFFFF'];

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2; // Varying small sizes
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.1;
        this.life = Math.random() * 100 + 100;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        this.opacity = Math.min(this.life / 50, this.opacity); // Fade out

        // Wrap around screen
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height || this.life < 0) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }
    }

    // Initialize
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    const animate = () => {
      // Deep Void Background with slight trail
      ctx.fillStyle = 'rgba(5, 0, 20, 0.2)'; // void-DEFAULT with opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Random "Cyber Glitch" Horizontal Lines - Neon Cyan
      if (Math.random() > 0.97) {
        const y = Math.random() * canvas.height;
        const h = Math.random() * 2 + 1;
        const w = Math.random() * canvas.width;
        const x = Math.random() * canvas.width;

        ctx.fillStyle = 'rgba(0, 240, 255, 0.05)'; // Neon Cyan weak
        ctx.fillRect(x, y, w, h);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050014]">
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Cosmic Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050014]/40 to-[#050014] opacity-80" />

      {/* Mesh Gradient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#BD00FF]/20 rounded-full blur-[150px] animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#00F0FF]/10 rounded-full blur-[150px] animate-pulse-slow delay-1000 pointer-events-none"></div>
    </div>
  );
};

export default CyberBackground;
