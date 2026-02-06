import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, MapPin, Mail, ChevronDown, Code, Hash, Power, Shield } from 'lucide-react';

const Header = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

    const [displayText, setDisplayText] = useState("");
    const fullName = "UTKARSH PRATHAM";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayText(fullName.slice(0, i));
            i++;
            if (i > fullName.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.header
            style={{ opacity, scale }}
            className="relative min-h-screen flex flex-col justify-center items-center text-center z-20 perspective-1000"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-void-purple/20 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-neon-violet/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />

            {/* User Profile Hero Integration */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 mix-blend-lighten pointer-events-none overflow-hidden">
                <img
                    src="/assets/profile.png"
                    alt="Utkarsh Pratham"
                    className="w-full h-full object-cover md:object-contain scale-110 md:scale-90 mask-image-b-fade opacity-80"
                    style={{ maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)' }}
                />
            </div>

            {/* HUD Elements */}
            <div className="absolute top-10 w-full max-w-7xl flex justify-between items-center px-6 text-xs font-mono text-neon-cyan/50 tracking-widest uppercase opacity-70 z-10">
                <div className="flex items-center gap-2">
                    <Power size={14} className="text-neon-pink animate-pulse" />
                    <span>System: Online</span>
                </div>
                <div className="flex gap-4">
                    <span>OPS: OFFENSIVE</span>
                    <span>NET: SECURE</span>
                </div>
                <div>v2.1.0</div>
            </div>

            {/* Main Content */}
            <div className="relative group">
                {/* Glitch Layers */}
                <h1 className="text-6xl md:text-9xl font-display font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-2 leading-none relative z-10">
                    {displayText}<span className="animate-pulse text-neon-cyan">_</span>
                </h1>

                {/* Cyber Reflection */}
                <h1 className="absolute top-full left-0 w-full text-6xl md:text-9xl font-display font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-neon-violet/20 to-transparent scale-y-[-0.5] blur-sm opacity-50 pointer-events-none">
                    {displayText}
                </h1>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="mt-8 flex flex-col items-center gap-6"
            >
                {/* Role Badge */}
                <div className="px-6 py-2 rounded-none border-x border-neon-cyan/50 bg-black/40 backdrop-blur-sm flex items-center gap-3 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                    <Shield size={16} className="text-neon-violet" />
                    <span className="text-neon-cyan font-mono text-sm tracking-[0.2em] uppercase">Cybersecurity Specialist</span>
                    <Hash size={16} className="text-neon-violet" />
                </div>

                <div className="flex gap-8 text-gray-400 font-mono text-xs md:text-sm tracking-widest">
                    <span className="flex items-center gap-2 hover:text-white transition-colors cursor-crosshair">
                        <MapPin size={14} className="text-neon-pink" />
                        [LOC]: NEW DELHI
                    </span>
                    <a href="mailto:utx1zz@gmail.com" className="flex items-center gap-2 hover:text-neon-cyan transition-colors cursor-pointer group">
                        <Mail size={14} className="text-neon-pink group-hover:animate-bounce" />
                        [MAIL]: UTX1ZZ@GMAIL.COM
                    </a>
                </div>
            </motion.div>

            {/* Primary Action */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 }}
                className="mt-16"
            >
                <a
                    href="#profile"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-display font-bold text-white transition-all duration-300 bg-transparent border border-neon-violet/50 hover:bg-neon-violet/10 group"
                >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-neon-violet rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                    <span className="relative flex items-center gap-3 text-neon-violet group-hover:text-white transition-colors">
                        <Terminal size={20} />
                        INITIALIZE_PROFILE
                    </span>

                    {/* Corners */}
                    <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-cyan"></span>
                    <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neon-cyan"></span>
                    <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neon-cyan"></span>
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-cyan"></span>
                </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-10 animate-bounce text-neon-cyan/50"
            >
                <ChevronDown size={24} />
            </motion.div>
        </motion.header>
    );
};

export default Header;
