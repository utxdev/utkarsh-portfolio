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
            >
                <div className="flex items-center gap-2 text-bronze-400 mb-2 font-mono">
                    <Terminal size={18} />
                    <span className="text-sm tracking-widest uppercase">Target Aquired: UTX1ZZ</span>
                </div>

                <div className="relative inline-block mb-4">
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-coffee-100 relative z-10 mix-blend-difference">
                        UTKARSH
                    </h1>
                    <h1 className="absolute top-0 left-0 text-6xl md:text-9xl font-black tracking-tighter text-bronze-500 opacity-50 blur-[2px] animate-glitch scale-[1.02]">
                        UTKARSH
                    </h1>
                </div>

                <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-r from-bronze-500 via-amber-600 to-coffee-400 animate-pulse-slow">
                    PRATHAM
                </h1>

                <h2 className="text-xl md:text-3xl font-bold text-coffee-300 flex flex-col md:flex-row gap-2 md:gap-4 mb-8 font-mono border-l-4 border-amber-500 pl-4 bg-black/30 py-2">
                    <span className="text-amber-500">Cybersecurity & Full Stack Developer</span>
                    <span className="hidden md:block text-coffee-600">|</span>
                    <span>CTF Competitor</span>
                </h2>

                <div className="flex flex-wrap gap-4 text-sm text-coffee-400 font-mono">
                    <span className="flex items-center gap-2">
                        <MapPin size={16} className="text-bronze-500" /> New Delhi
                    </span>
                    <a href="mailto:utx1zz@gmail.com" className="flex items-center gap-2 hover:text-amber-500 transition-colors">
                        <Mail size={16} className="text-bronze-500" /> utx1zz@gmail.com
                    </a>
                    <a href="https://www.linkedin.com/in/utkarsh-pratham/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-500 transition-colors">
                        <Linkedin size={16} className="text-bronze-500" /> LinkedIn
                    </a>
                </div>

                <div className="flex gap-3 mt-8">
                    <div className="px-2 py-1 border-l-2 border-amber-500 bg-amber-900/10 text-xs font-mono text-amber-500">
                        TEAM LEADER @ XAENITHRA
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative group block"
            >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-bronze-600 to-amber-900 rounded opacity-50 group-hover:opacity-100 blur transition duration-500"></div>
                <a
                    href="/assets/resume.pdf"
                    download="Utkarsh_Pratham_Resume.pdf"
                    className="relative px-8 py-3 bg-black/50 border border-amber-500/50 rounded-full flex items-center gap-3 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all group-hover:scale-105 active:scale-95"
                >
                    {/* Glowing scanning effect inside */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-amber-500/20 to-transparent animate-[shimmer_2s_infinite]"></div>
                    </div>

                    <Terminal size={18} className="text-amber-500" />
                    <span className="font-bold tracking-widest font-mono text-xs md:text-sm text-coffee-100 group-hover:text-amber-400 transition-colors">
                        [ ACCESS_DOSSIER ]
                    </span>
                </a>
            </motion.div>
        </header>
    );
};

export default Header;
