import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, ArrowUpRight, Github, Linkedin, Mail, Trophy, Shield } from 'lucide-react';

const BentoCard = ({ children, className, img }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`relative overflow-hidden rounded-3xl bg-cyber-900 border border-white/5 group hover:border-neon-cyan/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-500 ${className}`}
        >
            {/* Background Image with Overlay */}
            {img && (
                <>
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-950 via-cyber-900/50 to-transparent z-10" />
                    <img
                        src={img}
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                    />
                </>
            )}

            {/* Content Container */}
            <div className="relative z-20 h-full p-8 flex flex-col justify-between">
                {children}
            </div>
        </motion.div>
    );
};

const BentoGrid = () => {
    return (
        <section id="profile" className="container mx-auto px-4 py-24 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[minmax(180px,auto)] h-full">

                {/* 1. Identity / Main Profile */}
                <BentoCard className="md:col-span-2 md:row-span-2 min-h-[400px]" img="/assets/profile.png?v=updated">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Available for work
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-4">
                            Offensive Security <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-cyan">Researcher.</span>
                        </h2>
                        <p className="text-gray-300 max-w-md text-lg">
                            Building digital fortresses & breaking them down. Specialized in OSINT, Digital Forensics, and Threat Intelligence.
                        </p>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white border border-white/10">
                            <Github size={20} />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white border border-white/10">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white border border-white/10">
                            <Mail size={20} />
                        </a>
                    </div>
                </BentoCard>

                {/* 2. Key Achievement */}
                <BentoCard className="md:col-span-1 md:row-span-2 min-h-[400px]" img="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1000">
                    <div className="bg-neon-violet/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-auto backdrop-blur-md border border-neon-violet/30">
                        <Trophy size={24} className="text-neon-violet" />
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-2xl mb-1">Rank 1</h3>
                        <a href="https://xaenithra.com" target="_blank" className="inline-block px-2 py-0.5 mb-2 rounded border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-[10px] font-mono hover:bg-neon-cyan/20 transition-colors">
                            XAENITHRA | TEAM LEADER
                        </a>
                        <p className="text-neon-violet font-medium mb-4">SVNIT MeitY CTF</p>
                        <p className="text-gray-400 text-sm">
                            Secured first rank at the national level Capture The Flag event organized by the Ministry of Electronics & IT.
                        </p>

                        {/* Status Indicator */}
                        <div className="mt-8 flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan"></span>
                            </span>
                            <span className="text-xs font-mono text-neon-cyan/80">HIGHEST HONOR UNLOCKED</span>
                        </div>
                    </div>
                </BentoCard>

                {/* 3. Location */}
                <BentoCard className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-indigo-900 to-purple-900">
                    <div className="flex justify-between items-start">
                        <MapPin size={24} className="text-white/80" />
                        <ArrowUpRight size={24} className="text-white/50" />
                    </div>
                    <div className="mt-auto">
                        <h3 className="text-2xl font-bold text-white">New Delhi, IN</h3>
                        <p className="text-white/60">Base of Operations</p>
                    </div>
                </BentoCard>

                {/* 4. Tech Stack */}
                <BentoCard className="md:col-span-1 md:row-span-1 bg-black">
                    <div className="flex flex-wrap gap-2 content-start h-full">
                        {["OSINT", "Forensics", "Burp Suite", "Python", "React", "Linux", "Docker", "Go", "Crypto"].map((tag, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-gray-300 border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                </BentoCard>

                {/* 5. Mission Objective - Tactical Terminal */}
                <div className="md:col-span-4 md:row-span-1 min-h-[200px] bg-black border border-neon-cyan/20 relative overflow-hidden rounded-3xl group hover:border-neon-cyan/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-500">
                    <div className="h-full flex flex-col justify-between font-mono relative overflow-hidden p-8">
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="text-[10px] text-gray-500 tracking-widest">USR: UTKARSH // MISSION_01</div>
                        </div>

                        {/* Terminal Body */}
                        <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-8 z-10">
                            <div className="max-w-3xl">
                                <div className="text-neon-cyan text-xs mb-2">$ cat mission_statement.txt</div>
                                <h3 className="text-xl md:text-2xl text-gray-300 leading-relaxed type-writer">
                                    &gt; "The only way to truly secure a system is to understand how to break it."<span className="animate-pulse bg-neon-cyan w-2 h-5 inline-block ml-1 align-middle"></span>
                                </h3>
                            </div>

                            <div className="flex-shrink-0">
                                <button
                                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-6 py-3 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan text-xs font-bold hover:bg-neon-cyan hover:text-black transition-all uppercase tracking-widest"
                                >
                                    [ EXECUTE_OPERATIONS ]
                                </button>
                            </div>
                        </div>

                        {/* Background Decor */}
                        <div className="absolute right-0 bottom-0 text-[10rem] text-white/5 font-black leading-none pointer-events-none select-none -z-0">
                            ./ROOT
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BentoGrid;
