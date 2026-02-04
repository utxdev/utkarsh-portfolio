import React from 'react';
import { motion } from 'framer-motion';
import { Layout, GitBranch, ExternalLink, TabletSmartphone, Search, Database } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "TRINETRA | Mobile Forensics",
            desc: "Mobile-first learning roadmap platform using React, TypeScript. Key features include ADB integration, WebSockets, and cryptographic hashing (SHA-256).",
            tech: ["React 18", "TypeScript", "Python 3.10", "FastAPI", "ADB", "WebSockets"],
            icon: <Search size={24} className="text-amber-500" />
        },
        {
            title: "Xaenithra Command Center",
            desc: "Secure, scalable system for the Xaenithra team. Bridges offensive security operations with full-stack management.",
            tech: ["Full Stack", "Security", "Scalable Systems"],
            icon: <Database size={24} className="text-bronze-500" />
        },
        {
            title: "Mobile Learning Roadmap",
            desc: "Gamified hold-to-progress interactions with swipe-based navigation. Privacy-focused client-side application.",
            tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
            icon: <TabletSmartphone size={24} className="text-coffee-300" />
        }
    ];

    return (
        <section className="mb-32">
            <div className="flex items-center gap-4 mb-12 border-b border-coffee-800 pb-4">
                <Layout className="text-bronze-500" size={32} />
                <h3 className="text-3xl font-bold text-coffee-100 font-mono">PROJECT_MODULES</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-coffee-900/40 border border-coffee-800 p-6 rounded-lg hover:border-bronze-500 hover:bg-coffee-900/60 transition-all duration-300 flex flex-col"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-coffee-950 rounded-lg border border-coffee-800 group-hover:border-bronze-500/50 transition-colors">
                                {project.icon}
                            </div>
                            <ExternalLink size={18} className="text-coffee-600 group-hover:text-amber-500 transition-colors cursor-pointer" />
                        </div>

                        <h4 className="text-xl font-bold text-coffee-100 mb-2 font-mono group-hover:text-amber-500 transition-colors">
                            {project.title}
                        </h4>

                        <p className="text-coffee-300 text-sm mb-6 flex-grow leading-relaxed">
                            {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech, idx) => (
                                <span key={idx} className="px-2 py-1 bg-coffee-950 border border-coffee-800 rounded text-xs font-mono text-bronze-400 group-hover:border-bronze-900 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
