import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Layout, GitBranch, ExternalLink, Search, Shield, Database, Terminal, Globe } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative w-full rounded-2xl bg-cyber-glass border border-white/10 hover:border-neon-cyan/50 transition-all duration-500 overflow-hidden flex flex-col md:flex-row h-auto md:h-[280px]"
        >
            {/* Image Section */}
            <div className="w-full md:w-2/5 h-48 md:h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-neon-purple/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col relative z-20">
                {/* Decorative background grid */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-neon-cyan/10 rounded-lg text-neon-cyan">
                            {project.icon}
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white tracking-tight group-hover:text-neon-cyan transition-colors">
                            {project.title}
                        </h3>
                    </div>

                    <div className="flex gap-2">
                        {project.links.github && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
                                <GitBranch size={18} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow border-l-2 border-neon-purple/20 pl-4">
                    {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 text-[10px] font-mono uppercase text-neon-violet border border-neon-violet/20 rounded bg-neon-violet/5">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "TRINETRA",
            desc: "Advanced PowerShell investigation & forensic data extraction tool for active incident response.",
            tech: ["PowerShell", "Forensics", "Live Analysis"],
            icon: <Terminal size={20} />,
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
            links: { github: "https://github.com/utxdev/Xaenithra-ps6-investigation", live: "#" }
        },
        {
            title: "CYBER_ECOSYSTEM",
            desc: "Comprehensive cybersecurity awareness platform featuring 11+ interactive tools (Steganography, OSINT, etc).",
            tech: ["React", "Vite", "Cyber Tools"],
            icon: <Globe size={20} />,
            img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
            links: { github: "https://github.com/utxdev/cyber-ecosystem", live: "#" }
        },
        {
            title: "XAENITHRA_ENC",
            desc: "Custom encryption/encoding framework for secure communication and payload obfuscation.",
            tech: ["Python", "Cryptography", "Obfuscation"],
            icon: <Shield size={20} />,
            img: "https://images.unsplash.com/photo-1558494949-efc5e60dc3bd?auto=format&fit=crop&q=80&w=1000",
            links: { github: "https://github.com/utxdev/Xaenithra-Encoded", live: "#" }
        },
        {
            title: "PATHFINDER",
            desc: "Network reconnaissance and vulnerability mapping utility for automated pentesting workflows.",
            tech: ["Go", "Network Scanning", "Automation"],
            icon: <Search size={20} />,
            img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd82?auto=format&fit=crop&q=80&w=1000",
            links: { github: "https://github.com/utxdev", live: "#" }
        },
        {
            title: "COMPANIO",
            desc: "AI-driven security assistant for real-time threat monitoring and log analysis.",
            tech: ["AI/ML", "Python", "Log Analysis"],
            icon: <Database size={20} />,
            img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
            links: { github: "https://github.com/utxdev", live: "#" }
        }
    ];

    return (
        <section className="container mx-auto px-4 py-24 max-w-7xl">
            <div className="flex items-center gap-4 mb-16 border-b border-white/10 pb-4">
                <Layout className="text-neon-cyan" size={32} />
                <h3 className="text-3xl font-display font-bold text-white text-glow-cyan">PROJECT_MODULES</h3>
            </div>

            <div className="flex flex-col gap-8">
                {projects.map((p, i) => (
                    <ProjectCard key={i} project={p} index={i} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
