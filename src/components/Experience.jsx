import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Team Leader",
            org: "Xaenithra",
            period: "09/2025 - Present",
            desc: "Leading a focused team in cybersecurity initiatives and development.", // Extrapolated from context
            active: true
        },
        {
            role: "Core Team Member",
            org: "Cysecsphere Club CU",
            period: "Active",
            desc: "Organizing workshops and contributing to the cybersecurity community at Chandigarh University.",
            active: false
        }
    ];

    return (
        <section className="mb-32">
            <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-4">
                <Briefcase className="text-neon-pink" size={32} />
                <h3 className="text-3xl font-bold text-white font-mono text-glow-pink">EXPERIENCE_LOG</h3>
            </div>

            <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12 pl-8 md:pl-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                    >
                        {/* Timeline Dot */}
                        <div className={`absolute -left-[41px] md:-left-[59px] top-1 w-5 h-5 rounded-full border-4 border-black ${exp.active ? 'bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.8)]' : 'bg-gray-700'}`}></div>

                        <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                            {exp.role}
                            <span className="text-neon-purple text-lg font-mono">@ {exp.org}</span>
                        </h4>
                        <span className="inline-block px-2 py-1 bg-white/5 text-gray-400 text-xs font-mono rounded mt-2 mb-4 border border-white/10">
                            {exp.period}
                        </span>

                        <p className="text-gray-300 max-w-2xl bg-white/5 p-4 rounded-lg border-l-2 border-neon-cyan/50 backdrop-blur-sm">
                            {exp.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
