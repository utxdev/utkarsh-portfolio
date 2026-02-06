import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, Terminal, Cpu, Shield, Award, Briefcase, GraduationCap } from 'lucide-react';

const BentoGrid = () => {
    // Data
    const skills = [
        "C++", "Python", "JavaScript", "React", "Node.js",
        "Burp Suite", "Metasploit", "Wireshark", "Linux",
        "Docker", "AWS", "SQL"
    ];

    const experience = [
        { role: "Team Leader", org: "Xaenithra", date: "Present", active: true },
        { role: "Core Team", org: "GirlScript", date: "2024" },
        { role: "Member", org: "Defcon Delhi", date: "2024" }
    ];

    const certs = [
        { name: "Cybersecurity Analyst", issuer: "IBM" },
        { name: "Ethical Hacking", issuer: "EC-Council" },
        { name: "Google Cybersecurity", issuer: "Google" }
    ];

    const boxStyle = "bg-cyber-glass border border-white/5 p-6 rounded-3xl backdrop-blur-md hover:border-white/10 transition-colors group relative overflow-hidden";

    return (
        <section className="container mx-auto px-4 py-20 max-w-7xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-16 text-center">
                <span className="text-neon-purple">SYSTEM</span>_OVERVIEW
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[minmax(180px,auto)]">

                {/* 1. Summary (Large - 2x2) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`${boxStyle} md:col-span-2 md:row-span-2 flex flex-col justify-between`}
                >
                    <div className="absolute top-0 right-0 p-32 bg-neon-purple/20 blur-[100px] rounded-full pointer-events-none" />
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-neon-cyan font-mono text-sm">
                            <Terminal size={16} />
                            <span>WHOAMI</span>
                        </div>
                        <p className="text-2xl md:text-3xl font-body font-medium text-gray-200 leading-relaxed">
                            Driven <span className="text-white font-bold">Computer Science Engineer</span> bridging the gap between <span className="text-neon-pink">Offensive Security</span> and <span className="text-neon-cyan">Full-Stack Development</span>.
                        </p>
                    </div>
                    <div className="mt-8 relative z-10">
                        <div className="flex flex-wrap gap-2 text-sm font-mono text-gray-400">
                            <span className="bg-black/30 px-3 py-1 rounded-full border border-white/5">CTF Player</span>
                            <span className="bg-black/30 px-3 py-1 rounded-full border border-white/5">Bug Hunter</span>
                            <span className="bg-black/30 px-3 py-1 rounded-full border border-white/5">Open Source</span>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Education (1x1) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className={`${boxStyle} md:col-span-1 md:row-span-1`}
                >
                    <div className="flex items-center gap-2 mb-4 text-neon-pink font-mono text-sm">
                        <GraduationCap size={16} />
                        <span>EDUCATION</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">B.E. CSE (Hons)</h3>
                    <p className="text-sm text-gray-400">Chandigarh University</p>
                    <p className="text-xs text-neon-purple mt-2 font-mono">2025 - 2029</p>
                </motion.div>

                {/* 3. Location / Status (1x1) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`${boxStyle} md:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center`}
                >
                    <MapPin size={32} className="text-neon-cyan mb-2" />
                    <h3 className="text-lg font-bold text-white">New Delhi, IN</h3>
                    <div className="mt-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs text-gray-400 font-mono">OPEN TO WORK</span>
                    </div>
                </motion.div>

                {/* 4. Experience (Simplified Timeline) (1x2) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className={`${boxStyle} md:col-span-1 md:row-span-2 overflow-y-auto custom-scrollbar`}
                >
                    <div className="flex items-center gap-2 mb-6 text-neon-cyan font-mono text-sm">
                        <Briefcase size={16} />
                        <span>EXPERIENCE</span>
                    </div>
                    <div className="space-y-6 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-white/10" />

                        {experience.map((exp, i) => (
                            <div key={i} className="relative pl-6">
                                <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${exp.active ? 'bg-neon-cyan border-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.5)]' : 'bg-black border-gray-600'}`} />
                                <h4 className="text-white font-bold">{exp.role}</h4>
                                <p className="text-sm text-gray-400">{exp.org}</p>
                                <p className="text-xs text-gray-500 font-mono mt-1">{exp.date}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 5. Skills Marquee (2x1) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className={`${boxStyle} md:col-span-2 md:row-span-1 overflow-hidden flex flex-col justify-center`}
                >
                    <div className="flex items-center gap-2 mb-4 text-neon-pink font-mono text-sm">
                        <Cpu size={16} />
                        <span>ARSENAL</span>
                    </div>
                    <div className="relative flex overflow-x-hidden group">
                        <div className="animate-marquee whitespace-nowrap flex gap-4">
                            {[...skills, ...skills].map((skill, i) => (
                                <span key={i} className="text-2xl font-display font-bold text-white/20 uppercase hover:text-white hover:text-glow-cyan transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />
                        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />
                    </div>
                </motion.div>

                {/* 6. Certifications (1x1) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className={`${boxStyle} md:col-span-1 md:row-span-1`}
                >
                    <div className="flex items-center gap-2 mb-4 text-neon-purple font-mono text-sm">
                        <Award size={16} />
                        <span>CERTS</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        {certs.slice(0, 3).map((cert, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                                <Shield size={12} className="text-neon-cyan" />
                                <span className="truncate">{cert.issuer}</span>
                            </div>
                        ))}
                        <div className="text-xs text-gray-500 font-mono mt-2">+ Many more</div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default BentoGrid;
