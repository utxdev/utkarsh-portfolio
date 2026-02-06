import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, MapPin, Mail, Linkedin, ChevronDown } from 'lucide-react';

const Header = () => {
    return (
        <header className="relative min-h-[90vh] flex flex-col justify-center items-center text-center mb-24 z-20">
            {/* Ambient Background Glow for Hero */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

            {/* Magnetic Profile Photo */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="relative mb-12 group"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan to-neon-purple rounded-full blur-[30px] opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-neon-cyan transition-colors shadow-2xl">
                    <img
                        src="/assets/profile.png"
                        alt="Utkarsh Pratham"
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                    />
                    {/* Premium Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                </div>
            </motion.div>

            {/* Kinetic Typography Name Reveal */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative z-10"
            >
                <h1 className="text-6xl md:text-9xl font-display font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-2 leading-none">
                    UTKARSH
                </h1>
                <h1 className="text-6xl md:text-9xl font-display font-black tracking-tight text-white mb-6 leading-none relative">
                    <span className="absolute inset-0 text-neon-purple blur-[2px] opacity-50 translate-x-[2px]">PRATHAM</span>
                    <span className="relative">PRATHAM</span>
                </h1>
            </motion.div>

            {/* Status & Role */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-col items-center gap-4 mb-12"
            >
                <div className="px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 backdrop-blur-md flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan"></span>
                    </span>
                    <span className="text-neon-cyan font-mono text-xs tracking-widest uppercase">Cybersecurity & Full Stack Developer</span>
                </div>

                <div className="flex gap-6 text-gray-400 font-body text-sm md:text-base">
                    <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                        <MapPin size={16} className="text-neon-purple" /> New Delhi
                    </span>
                    <a href="mailto:utx1zz@gmail.com" className="flex items-center gap-2 hover:text-neon-cyan transition-colors">
                        <Mail size={16} className="text-neon-purple" /> utx1zz@gmail.com
                    </a>
                </div>
            </motion.div>

            {/* Resume Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
            >
                <a
                    href="/assets/resume.pdf"
                    download="Utkarsh_Pratham_Resume.pdf"
                    className="group relative px-8 py-4 bg-white text-black font-display font-bold tracking-wider hover:bg-neon-cyan transition-colors duration-300 clip-path-slant"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <Terminal size={18} /> INITIALIZE_RESUME
                    </span>
                    <div className="absolute inset-0 bg-neon-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 animate-bounce text-gray-500"
            >
                <ChevronDown size={24} />
            </motion.div>
        </header>
    );
};

export default Header;
