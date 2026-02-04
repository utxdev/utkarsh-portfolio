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
    const particleCount = 150; // Density

    // Colors: Coffee, Bronze, Amber
    const colors = ['#6F4E37', '#B87333', '#F59E0B', '#1A110D'];

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
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
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Initialize
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    const animate = () => {
      // Trail effect (Cyber smear)
      ctx.fillStyle = 'rgba(26, 17, 13, 0.15)'; // coffee-950 with opacity for trails
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Random "Cyber Glitch" Horizontal Lines
      if (Math.random() > 0.95) {
        const y = Math.random() * canvas.height;
        const h = Math.random() * 2 + 1;
        ctx.fillStyle = 'rgba(245, 158, 11, 0.1)'; // Amber weak
        ctx.fillRect(0, y, canvas.width, h);
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
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#1A110D]">
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#1A110D]/20 to-[#1A110D] opacity-90" />
    </div>
  );
};

export default CyberBackground;
