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
            <div className="flex items-center gap-4 mb-12 border-b border-coffee-800 pb-4">
                <Trophy className="text-bronze-500" size={32} />
                <h3 className="text-3xl font-bold text-coffee-100 font-mono">MISSION_ACCOMPLISHMENTS</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {achievements.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group p-6 bg-coffee-950 border border-coffee-800 rounded-xl hover:border-amber-500/50 hover:bg-coffee-900 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                            {i % 2 === 0 ? <Shield size={80} /> : <Cpu size={80} />}
                        </div>

                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <span className="text-xs font-mono text-bronze-400 border border-bronze-900 px-2 py-1 rounded bg-black/20">
                                {item.rank}
                            </span>
                        </div>

                        <h4 className="text-xl font-bold text-coffee-100 mb-3 group-hover:text-amber-500 transition-colors">
                            {item.title}
                        </h4>

                        <p className="text-coffee-400 text-sm leading-relaxed">
                            {item.desc}
                        </p>

                        <div className="mt-4 w-full h-1 bg-gradient-to-r from-bronze-500/0 via-bronze-500/50 to-bronze-500/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
