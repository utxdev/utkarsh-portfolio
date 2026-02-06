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
            className="group relative w-full rounded-2xl bg-cyber-glass border border-white/10 hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all duration-500 overflow-hidden flex flex-col md:flex-row h-auto md:h-[280px]"
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
            desc: "A military-grade digital forensics framework designed for active incident response. Trinetra automates the extraction of artifacts from compromised Windows/Linux systems, generating court-admissible reports in real-time. It features a custom PowerShell engine for deep-dive memory analysis and live telemetry.",
            tech: ["PowerShell 7", "Live Forensics", "Artifact Extraction", "Report Gen"],
            icon: <Terminal size={20} />,
            img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000",
            links: { github: "https://github.com/utxdev/Xaenithra-ps6-investigation", live: "#" }
        },
        {
            title: "CYBER_ECOSYSTEM",
            desc: "An all-encompassing cybersecurity awareness platform simulating real-world threat scenarios. Features 11+ interactive modules including a Steganography encoder, OSINT investigation dashboard, and a phishing simulation engine. Designed to train users in identifying and neutralizing digital threats.",
            tech: ["React.js", "Vite", "Interactive Labs", "Gamified Learning"],
            icon: <Globe size={20} />,
            img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
            links: { github: "https://github.com/utxdev/cyber-ecosystem", live: "#" }
        },
        {
            title: "XAENITHRA_ENC",
            desc: "A custom-built cryptographic framework for secure communication channels. Implements a modified AES-256 algorithm with dynamic key rotation and payload obfuscation techniques. Primarily used for secure C2 (Command & Control) communication simulations and avoiding signature-based detection.",
            tech: ["Python 3", "Cryptography", "Payload Obfuscation", "AES-256"],
            icon: <Shield size={20} />,
            img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
            links: { github: "https://github.com/utxdev/Xaenithra-Encoded", live: "#" }
        },
        {
            title: "PATHFINDER",
            desc: "An automated network reconnaissance utility written in Go for high-speed vulnerability mapping. Pathfinder scans target subnets, identifies open ports, fingerprints services, and maps potential attack vectors, feeding data directly into the pentesting workflow.",
            tech: ["Go (Golang)", "Network Scanner", "Vuln Mapping", "Concurrency"],
            icon: <Search size={20} />,
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
            links: { github: "https://github.com/utxdev", live: "#" }
        },
        {
            title: "COMPANIO",
            desc: "Your intelligent SOC analyst assistant. Companio uses machine learning to parse massive log files (syslog, auth.log) and identify anomalous patterns indicative of a breach. It provides natural language summaries of threats, reducing alert fatigue for security operations teams.",
            tech: ["Python", "TensorFlow Lite", "NLP", "Log Parsing"],
            icon: <Database size={20} />,
            img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
            links: { github: "https://github.com/utxdev", live: "#" }
        }
    ];

    return (
        <section id="projects" className="container mx-auto px-4 py-24 max-w-7xl">
            <div className="flex items-center gap-4 mb-16 border-b border-white/10 pb-4">
                <Layout className="text-neon-cyan" size={32} />
                <h3 className="text-3xl font-display font-bold text-white text-glow-cyan">PROJECT_MODULES</h3>
            </div>

            <div className="flex flex-col gap-12">
                {projects.map((p, i) => (
                    <ProjectCard key={i} project={p} index={i} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
