import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Download, ExternalLink, Shield, Code, ChevronRight, Trophy, Cpu, Database } from 'lucide-react';
import CyberBackground from './components/CyberBackground';

const App = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 1000);
    }, []);

    const achievements = [
        {
            title: "IIT Madras – Shaastra CTF | 2025 National Level Finalist",
            rank: "Rank 6 (Quals) / Rank 7 (Finals)",
            desc: "Top performer among hundreds of participants. Solved complex challenges in cryptography and web exploitation."
        },
        {
            title: "SVNIT CTF | 2026 - National Level (MeitY)",
            rank: "Rank 1 (Preliminary)",
            desc: "Secured first rank among participating teams in the initial round organized by the Ministry of Electronics and Information Technology."
        },
        {
            title: "Cipher Hunt 2.0 & NITE CTF | 2024–2025",
            rank: "Rank 7 (Cipher Hunt)",
            desc: "Demonstrated rapid problem-solving and digital forensic analysis skills under time pressure. Collaborated on high-intensity binary exploitation in NITE CTF."
        },
        {
            title: "Gen AI Hackathon | 2024",
            rank: "Participant & Developer",
            desc: "Developed a Blockchain-based WiFi Two-Factor Authentication (2FA) system using Generative AI to optimize authentication protocols."
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-mono selection:bg-purple-500/30 selection:text-cyan-300 overflow-x-hidden">
            <CyberBackground />

            <main className="relative z-10 container mx-auto px-6 py-12 max-w-5xl">

                {/* Header / Hero */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 text-cyan-400 mb-2">
                            <Terminal size={20} />
                            <span className="text-sm tracking-widest uppercase">System Online</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 animate-gradient-x">
                            UTKARSH
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-400 flex items-center gap-3">
                            <span className="text-purple-500">Team Leader @ Xaenithra</span>
                        </h2>
                        <div className="flex gap-4 mt-6">
                            <span className="px-3 py-1 border border-purple-500/30 rounded bg-purple-500/10 text-xs tracking-wider">FULL STACK</span>
                            <span className="px-3 py-1 border border-cyan-500/30 rounded bg-cyan-500/10 text-xs tracking-wider">ETHICAL HACKER</span>
                            <span className="px-3 py-1 border border-green-500/30 rounded bg-green-500/10 text-xs tracking-wider">CTF PLAYER</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
                        <a
                            href="/resume.pdf"
                            download
                            className="relative px-8 py-4 bg-black border border-gray-800 rounded-lg flex items-center gap-3 hover:border-purple-500 transition-colors group-hover:text-purple-400"
                        >
                            <Download size={20} />
                            <span className="font-bold tracking-wider">DOWNLOAD RESUME</span>
                        </a>
                    </motion.div>
                </header>

                {/* Competitions Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="flex items-center gap-4 mb-12 border-b border-gray-800 pb-4">
                        <Trophy className="text-purple-500" size={32} />
                        <h3 className="text-3xl font-bold">COMPETITIONS & PROJECTS</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {achievements.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-cyan-500/50 hover:bg-gray-900/80 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    {i % 2 === 0 ? <Shield size={80} /> : <Cpu size={80} />}
                                </div>

                                <div className="flex justify-between items-start mb-4 relative z-10">
                                    <span className="text-xs font-mono text-cyan-500 border border-cyan-500/30 px-2 py-1 rounded">
                                        {item.rank}
                                    </span>
                                </div>

                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                                    {item.title}
                                </h4>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>

                                <div className="mt-4 w-full h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Skills / Footer */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-800 pt-12"
                >
                    {['Cryptography', 'Web Exploitation', 'Forensics', 'Blockchain', 'React / Node', 'Python', 'OSINT', 'Network Sec'].map((skill, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors cursor-default">
                            <ChevronRight size={14} className="text-purple-500" />
                            <span className="text-sm tracking-wider">{skill}</span>
                        </div>
                    ))}
                </motion.section>

            </main>
        </div>
    );
};

export default App;
