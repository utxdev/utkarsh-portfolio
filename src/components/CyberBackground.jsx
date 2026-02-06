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

    // Configuration
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    // "Hacker" characters (Katakana + Latin)
    const chars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const animate = () => {
      // Trail effect (lower opacity = longer trails)
      ctx.fillStyle = 'rgba(5, 0, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Space Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Randomize color for "glitch" effect
        // Mostly Purple (#BD00FF), rarely Cyan (#00F0FF) or White
        const random = Math.random();
        if (random > 0.98) {
          ctx.fillStyle = '#ffffff'; // Sparkle
        } else if (random > 0.90) {
          ctx.fillStyle = '#00F0FF'; // Cyan Glitch
        } else {
          ctx.fillStyle = '#BD00FF'; // Void Purple (Main)
        }

        const text = chars.charAt(Math.floor(Math.random() * chars.length));

        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly or keep falling
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
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
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

      {/* Vignette for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050014]/60 to-[#050014] opacity-90" />

      {/* Slight CRT Scanline texture overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
    </div>
  );
};

export default CyberBackground;
