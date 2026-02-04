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
                className="bg-coffee-900/40 border border-coffee-800 p-8 rounded-sm relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bronze-500 to-transparent opacity-50"></div>
                <div className="flex items-center gap-3 mb-6">
                    <User className="text-bronze-500" size={24} />
                    <h3 className="text-2xl font-bold text-coffee-100 font-mono">
                        // SUMMARY
                    </h3>
                </div>
                <p className="text-coffee-300 leading-relaxed text-lg">
                    Driven <span className="text-amber-500 font-bold">Computer Science Engineering</span> student specializing in
                    <span className="text-bronze-400"> Cybersecurity</span> with a "First Principles" approach to problem-solving.
                    Bridging the gap between offensive security and full-stack development.
                </p>
                <div className="mt-4 p-4 bg-black/40 border-l-2 border-bronze-600 font-mono text-sm text-coffee-400">
                    <p>{'>'} Proven track record in competitive hacking (Top 10 Global Cipher Hunt 2.0).</p>
                    <p>{'>'} Rank 1 MeitY CTF.</p>
                    <p>{'>'} Building secure, scalable systems like Xaenithra Command Center.</p>
                </div>
            </motion.div>

            {/* Education */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-coffee-900/40 border border-coffee-800 p-8 rounded-sm relative"
            >
                <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="text-bronze-500" size={24} />
                    <h3 className="text-2xl font-bold text-coffee-100 font-mono">
                        // EDUCATION
                    </h3>
                </div>

                <div className="space-y-6">
                    <div>
                        <h4 className="text-xl font-bold text-coffee-100">Bachelor of Engineering (Hons) CSE</h4>
                        <div className="flex justify-between items-center text-sm text-coffee-400 font-mono mt-1">
                            <span>Cybersecurity with IBM</span>
                            <span className="text-bronze-500">01/2025 - 12/2029</span>
                        </div>
                        <p className="text-bronze-600 mt-1 font-bold">CHANDIGARH UNIVERSITY</p>
                    </div>
                </div>

                <div className="absolute bottom-4 right-4 text-coffee-800 opacity-20 font-black text-6xl select-none z-0">
                    EDU
                </div>
            </motion.div>
        </section>
    );
};

export default About;
