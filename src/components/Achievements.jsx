import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Shield, Cpu } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            title: "SVNIT (NIT Surat) – Echelon Cybersecurity Hackathon",
            rank: "Rank 1 (National) | Finalist",
            desc: "Secured 1st rank at national level CTF under MeitY. Built and presented a cybersecurity-focused solution."
        },
        {
            title: "Cipher Hunt 2.0 | 2025",
            rank: "Global Rank 7",
            desc: "Top 10 Global Cipher Hunt 2.0. Notable performance in Digital Forensics and Binary Exploitation skills."
        },
        {
            title: "IIT Madras – Shaastra CTF | 2025",
            rank: "National Finalist | Rank 6 (Quals)",
            desc: "Competed in Cryptography and Web Exploitation domains against top national teams."
        }
    ];

    return (
        <section className="mb-32">
            <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-4">
                <Trophy className="text-neon-cyan" size={32} />
                <h3 className="text-3xl font-bold text-white font-mono text-glow-cyan">MISSION_ACCOMPLISHMENTS</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {achievements.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group p-6 glass-card rounded-xl hover:border-neon-pink/50 hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                            {i % 2 === 0 ? <Shield size={80} /> : <Cpu size={80} />}
                        </div>

                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <span className="text-xs font-mono text-neon-cyan border border-neon-cyan/30 px-2 py-1 rounded bg-black/40">
                                {item.rank}
                            </span>
                        </div>

                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-neon-pink transition-colors">
                            {item.title}
                        </h4>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            {item.desc}
                        </p>

                        <div className="mt-4 w-full h-1 bg-gradient-to-r from-neon-pink/0 via-neon-pink/50 to-neon-pink/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
