import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen } from 'lucide-react';

const About = () => {
    return (
        <section className="grid md:grid-cols-2 gap-8 mb-32">
            {/* Summary */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-xl relative overflow-hidden border-t border-white/20"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple to-transparent opacity-50"></div>
                <div className="flex items-center gap-3 mb-6">
                    <User className="text-neon-cyan" size={24} />
                    <h3 className="text-2xl font-bold text-white font-mono">
                        // SUMMARY
                    </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                    Driven <span className="text-neon-pink font-bold">Computer Science Engineering</span> student specializing in
                    <span className="text-neon-cyan"> Cybersecurity</span> with a "First Principles" approach to problem-solving.
                    Bridging the gap between offensive security and full-stack development.
                </p>
                <div className="mt-4 p-4 bg-black/40 border-l-2 border-neon-purple font-mono text-sm text-gray-400">
                    <p>{'>'} Proven track record in competitive hacking (Top 10 Global Cipher Hunt 2.0).</p>
                    <p>{'>'} Rank 1 MeitY CTF.</p>
                    <p>{'>'} Building secure, scalable systems like Xaenithra Command Center.</p>
                </div>

                {/* Visual Accent */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neon-purple/20 rounded-full blur-[80px] animate-pulse"></div>
            </motion.div>

            {/* Education */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-xl relative border-t border-white/20"
            >
                <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="text-neon-pink" size={24} />
                    <h3 className="text-2xl font-bold text-white font-mono">
                        // EDUCATION
                    </h3>
                </div>

                <div className="space-y-6">
                    <div>
                        <h4 className="text-xl font-bold text-white">Bachelor of Engineering (Hons) CSE</h4>
                        <div className="flex justify-between items-center text-sm text-gray-400 font-mono mt-1">
                            <span>Cybersecurity with IBM</span>
                            <span className="text-neon-cyan">01/2025 - 12/2029</span>
                        </div>
                        <p className="text-neon-purple mt-1 font-bold">CHANDIGARH UNIVERSITY</p>
                    </div>
                </div>

                <div className="absolute bottom-4 right-4 text-white/5 opacity-20 font-black text-6xl select-none z-0">
                    EDU
                </div>
            </motion.div>
        </section>
    );
};

export default About;
