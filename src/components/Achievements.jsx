import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Target, Star, Shield } from 'lucide-react';

const AchievementItem = ({ title, rank, org, desc, year, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="group relative p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-neon-cyan/30 transition-all duration-300"
    >
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-shrink-0 p-4 rounded-lg bg-neon-cyan/10 text-neon-cyan group-hover:bg-neon-cyan/20 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all">
                <Trophy size={28} />
            </div>

            <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-0.5 rounded uppercase tracking-wider">{year}</span>
                    <span className="text-xs font-bold text-neon-pink uppercase tracking-wider">{rank}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">{title}</h3>
                <p className="text-sm font-mono text-neon-violet mb-2">{org}</p>
                <p className="text-gray-400 text-sm max-w-2xl">{desc}</p>
            </div>

            <div className="hidden md:block">
                <Shield size={18} className="text-gray-700 group-hover:text-neon-cyan/50 transition-colors" />
            </div>
        </div>
    </motion.div>
);

const Achievements = () => {
    return (
        <section className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
                <Award size={32} className="text-neon-cyan" />
                <h2 className="text-3xl font-display font-bold text-white">
                    MISSION <span className="text-neon-violet">LOGS</span>
                </h2>
                <div className="ml-auto text-xs font-mono text-gray-500 hidden md:block">
                    [CLASSIFIED RECORDS DECLASSIFIED]
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <AchievementItem
                    title="Shaastra CTF (National Finals)"
                    rank="National Finalist (Rank 6 Quals / Rank 7 Finals)"
                    org={<span>Team Leader @ <a href="https://xaenithra.com" target="_blank" className="text-neon-cyan hover:underline">Xaenithra</a> | IIT Madras</span>}
                    year="2025"
                    desc="Top performer among hundreds of participants. Solved complex challenges in cryptography and web exploitation during the 24-hour hackathon."
                    delay={0.1}
                />
                <AchievementItem
                    title="Cipher Hunt 2.0"
                    rank="Rank 7"
                    org={<span>Team Leader @ <a href="https://xaenithra.com" target="_blank" className="text-neon-cyan hover:underline">Xaenithra</a> | Cryptographic Society</span>}
                    year="2024"
                    desc="Demonstrated rapid problem-solving and digital forensic analysis skills under time pressure. Specialized in steganography challenges."
                    delay={0.2}
                />
                <AchievementItem
                    title="NITE CTF"
                    rank="Top Tier Participant"
                    org={<span>Team Leader @ <a href="https://xaenithra.com" target="_blank" className="text-neon-cyan hover:underline">Xaenithra</a> | NIT Trichy</span>}
                    year="2024"
                    desc="Collaborated on high-intensity binary exploitation challenges. Secured critical flags in the final hours of the event."
                    delay={0.3}
                />
            </div>
        </section>
    );
};

export default Achievements;
