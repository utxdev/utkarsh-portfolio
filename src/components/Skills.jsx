import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Shield, Code, Database, Cloud } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            category: "Languages",
            icon: <Code size={20} />,
            items: ["C++", "C", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "LaTeX"]
        },
        {
            category: "Cybersecurity",
            icon: <Shield size={20} />,
            items: ["Penetration Testing", "Web App Security", "Forensics", "Burp Suite", "Metasploit", "Wireshark", "Kali Linux"]
        },
        {
            category: "Frameworks & Stack",
            icon: <Database size={20} />,
            items: ["React", "Node.js", "MERN Stack", "Tailwind CSS", "FastAPI"]
        },
        {
            category: "AI & Cloud",
            icon: <Cloud size={20} />,
            items: ["Generative AI", "LLMs", "Prompt Engineering", "Google Cloud Compute"]
        }
    ];

    return (
        <section className="mb-32">
            <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-4">
                <Cpu className="text-neon-cyan" size={32} />
                <h3 className="text-3xl font-bold text-white font-mono text-glow-cyan">SYSTEM_CAPABILITIES</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {skillCategories.map((cat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-6 rounded-lg relative overflow-hidden group hover:border-neon-purple/50 transition-colors"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            {cat.icon}
                        </div>

                        <h4 className="text-lg font-bold text-neon-purple mb-6 flex items-center gap-2 font-mono uppercase tracking-wider">
                            {cat.icon} {cat.category}
                        </h4>

                        <div className="flex flex-wrap gap-2">
                            {cat.items.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-black/40 text-gray-300 text-sm border border-white/10 hover:border-neon-cyan hover:text-neon-cyan transition-colors cursor-default backdrop-blur-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
