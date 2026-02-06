import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Download, MapPin, Mail, Linkedin } from 'lucide-react';

const Header = () => {
    return (
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-8 relative z-10">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1"
            >
                <div className="flex items-center gap-2 text-neon-cyan mb-2 font-mono">
                    <Terminal size={18} />
                    <span className="text-sm tracking-widest uppercase">Target Aquired: UTX1ZZ</span>
                </div>

                <div className="relative inline-block mb-4">
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white relative z-10 mix-blend-difference">
                        UTKARSH
                    </h1>
                    <h1 className="absolute top-0 left-0 text-6xl md:text-9xl font-black tracking-tighter text-neon-purple opacity-50 blur-[2px] animate-glitch scale-[1.02]">
                        UTKARSH
                    </h1>
                </div>

                <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-cyan to-white animate-pulse-slow">
                    PRATHAM
                </h1>

                <h2 className="text-xl md:text-3xl font-bold text-cyber-light flex flex-col md:flex-row gap-2 md:gap-4 mb-8 font-mono border-l-4 border-neon-cyan pl-4 bg-cyber-glass py-2 backdrop-blur-sm rounded-r-lg">
                    <span className="text-neon-pink text-glow-pink">Cybersecurity & Full Stack Developer</span>
                    <span className="hidden md:block text-neon-cyan">|</span>
                    <span>CTF Competitor</span>
                </h2>

                <div className="flex flex-wrap gap-4 text-sm text-gray-300 font-mono">
                    <span className="flex items-center gap-2">
                        <MapPin size={16} className="text-neon-cyan" /> New Delhi
                    </span>
                    <a href="mailto:utx1zz@gmail.com" className="flex items-center gap-2 hover:text-neon-pink transition-colors">
                        <Mail size={16} className="text-neon-cyan" /> utx1zz@gmail.com
                    </a>
                    <a href="https://www.linkedin.com/in/utkarsh-pratham/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-neon-pink transition-colors">
                        <Linkedin size={16} className="text-neon-cyan" /> LinkedIn
                    </a>
                </div>

                <div className="flex gap-3 mt-8">
                    <div className="px-2 py-1 border-l-2 border-neon-cyan bg-neon-cyan/10 text-xs font-mono text-neon-cyan">
                        TEAM LEADER @ XAENITHRA
                    </div>
                </div>
            </motion.div>

            {/* Profile Photo & Resume Block */}
            <div className="flex flex-col items-center gap-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="relative group w-48 h-48 md:w-64 md:h-64"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan to-neon-purple rounded-full blur-[20px] opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 group-hover:border-neon-cyan transition-colors shadow-2xl">
                        <img
                            src="/assets/profile.png"
                            alt="Utkarsh Pratham"
                            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-neon-purple/10 mix-blend-overlay pointer-events-none"></div>

                        {/* Scanline overlay */}
                        <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/xT9Igk3jF5r6kS0g5W/giphy.gif')] opacity-10 mix-blend-soft-light pointer-events-none"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative group block"
                >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full opacity-50 group-hover:opacity-100 blur transition duration-500"></div>
                    <a
                        href="/assets/resume.pdf"
                        download="Utkarsh_Pratham_Resume.pdf"
                        className="relative px-8 py-3 bg-black border border-neon-cyan/50 rounded-full flex items-center gap-3 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all group-hover:scale-105 active:scale-95"
                    >
                        {/* Glowing scanning effect inside */}
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                            <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent animate-[shimmer_2s_infinite]"></div>
                        </div>

                        <Terminal size={18} className="text-neon-cyan" />
                        <span className="font-bold tracking-widest font-mono text-xs md:text-sm text-white group-hover:text-neon-cyan transition-colors">
                            Download Resume
                        </span>
                    </a>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;
