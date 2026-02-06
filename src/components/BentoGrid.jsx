import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Briefcase, Cpu, Award, Terminal, Code, Globe, Shield } from 'lucide-react';

const TiltCard = ({ children, className, colSpan = 1, rowSpan = 1 }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative ${className} group`}
        >
            <div className={`
                absolute inset-0 rounded-3xl bg-cyber-glass backdrop-blur-xl border border-white/10 shadow-lg
                group-hover:shadow-[0_0_30px_rgba(125,249,255,0.15)] transition-shadow duration-500
                overflow-hidden z-0
            `} style={{ transform: "translateZ(0px)" }}>
                {/* HOLOGRAPHIC BORDER GRADIENT */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500" />
            </div>

            <div className="relative z-10 h-full p-6 flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
                {children}
            </div>
        </motion.div>
    );
};

const BentoGrid = () => {
    const skills = [
        "OSINT", "Steganography", "Digital Forensics", "Web Exploitation",
        "Cryptography", "Vulnerability Assessment", "Burp Suite", "Metasploit",
        "Python", "C++", "React", "Node.js", "Linux", "Docker"
    ];

    const missions = [
        { name: "SVNIT CTF (MeitY)", rank: "Rank 1", desc: "National Level - Ministry of Electronics & IT" },
        { name: "IIT Madras Shaastra", rank: "Finalist", desc: "Rank 6 (Quals) / Rank 7 (Finals)" },
        { name: "Echelon Hackathon", rank: "Finalist", desc: "Advanced Cybersecurity Hackathon" },
        { name: "Cipher Hunt 2.0", rank: "Rank 7", desc: "Digital Forensics & Puzzle Solving" }
    ];

    return (
        <section className="container mx-auto px-4 py-20 max-w-7xl perspective-2000">
            <div className="flex items-center justify-center gap-4 mb-16">
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-neon-purple" />
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white text-center tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">SYSTEM</span>_NODES
                </h2>
                <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-neon-purple" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[minmax(180px,auto)]">

                {/* 1. Identity Node (Large) */}
                <TiltCard className="md:col-span-2 md:row-span-2 h-full min-h-[300px]">
                    <div className="absolute top-0 right-0 p-32 bg-neon-purple/20 blur-[80px] rounded-full pointer-events-none mix-blend-screen" />
                    <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-2 text-neon-cyan font-mono text-sm tracking-widest border-b border-neon-cyan/20 pb-2 w-fit">
                            <Terminal size={16} /> IDENTITY_VERIFIED
                        </div>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                            <span className="text-neon-pink drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">Offensive Security</span> <br />
                            Researcher & <span className="text-neon-violet drop-shadow-[0_0_10px_rgba(125,249,255,0.5)]">Creative Dev</span>
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed font-body max-w-lg">
                            Specializing in <strong className="text-white">OSINT</strong>, <strong className="text-white">Digital Forensics</strong>, and <strong className="text-white">Web Exploitation</strong>.
                            Dissecting systems to secure the future.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3 relative z-10">
                        <span className="px-4 py-1.5 rounded bg-neon-cyan/10 border border-neon-cyan text-sm text-neon-cyan font-mono shadow-[0_0_15px_rgba(0,240,255,0.2)] font-bold">
                            🏆 Rank 1 @ SVNIT MeitY
                        </span>
                        <span className="px-4 py-1.5 rounded bg-neon-purple/10 border border-neon-purple text-sm text-neon-purple font-mono font-bold">
                            🏅 IIT Madras Finalist
                        </span>
                    </div>
                </TiltCard>

                {/* 2. Status Node */}
                <TiltCard className="md:col-span-1 md:row-span-1 min-h-[180px]">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-neon-cyan/10 rounded-xl text-neon-cyan border border-neon-cyan/20 box-glow-cyan">
                            <MapPin size={24} />
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs text-green-400 font-mono tracking-wider font-bold">AVAILABLE</span>
                        </div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white tracking-tight">New Delhi</div>
                        <div className="text-sm text-gray-400 font-mono mt-1">lat: 28.6139° N</div>
                    </div>
                </TiltCard>

                {/* 3. Tech Stack Marquee */}
                <TiltCard className="md:col-span-1 md:row-span-2 overflow-hidden flex flex-col">
                    <div className="flex items-center gap-2 text-neon-pink font-mono text-xs tracking-widest mb-4 border-b border-neon-pink/20 pb-2">
                        <Cpu size={14} /> ARSENAL
                    </div>
                    <div className="relative flex-grow overflow-hidden mask-gradient-y">
                        <div className="animate-marquee-vertical flex flex-col gap-3">
                            {[...skills, ...skills].map((skill, i) => (
                                <div key={i} className="text-xl font-display font-bold text-gray-500 uppercase hover:text-white hover:pl-2 transition-all cursor-default select-none">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </TiltCard>

                {/* 4. Mission Logs (Achievements) */}
                <TiltCard className="md:col-span-1 md:row-span-1 overflow-y-auto custom-scrollbar min-h-[200px]">
                    <div className="flex items-center gap-2 text-neon-violet font-mono text-xs tracking-widest mb-4 border-b border-neon-violet/20 pb-2">
                        <Award size={14} /> MISSION_LOGS
                    </div>
                    <div className="space-y-3">
                        {missions.map((mission, i) => (
                            <div key={i} className="group flex flex-col bg-white/5 p-3 rounded hover:bg-white/10 transition-colors border-l-2 border-transparent hover:border-neon-pink">
                                <span className="text-white font-bold text-sm tracking-tight">{mission.name}</span>
                                <span className="text-xs text-neon-pink font-mono mt-1">{mission.rank}</span>
                            </div>
                        ))}
                    </div>
                </TiltCard>

                {/* 5. Rich Media / Education */}
                <TiltCard className="md:col-span-2 md:row-span-1 group/media overflow-hidden">
                    {/* Placeholder for "Images so many omg stuffs" - using a gradient pattern for now */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-black mix-blend-overlay z-0" />
                    <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=ecf05e478z29d4g882046420359858593452077038')] bg-cover bg-center opacity-10 group-hover/media:opacity-30 transition-opacity duration-700" />

                    <div className="relative z-10 flex flex-col justify-end h-full">
                        <div className="flex items-center gap-2 text-white font-mono text-xs tracking-widest mb-2">
                            <Award size={14} className="text-gold" /> EDUCATION_PROTOCOL
                        </div>
                        <h4 className="text-xl font-bold text-white">B.E. Computer Science & Engineering</h4>
                        <p className="text-sm text-gray-400">Chandigarh University • 2025-2029</p>
                    </div>
                </TiltCard>
            </div>
        </section>
    );
};

export default BentoGrid;
