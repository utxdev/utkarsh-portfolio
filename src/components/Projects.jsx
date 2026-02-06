import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Layout, GitBranch, ExternalLink, Search, Shield, Database } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full rounded-xl bg-cyber-glass border border-white/5 p-6 hover:border-neon-cyan/50 transition-colors group cursor-pointer perspective-1000"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="absolute inset-4 rounded-lg bg-black/50 shadow-inner pointer-events-none"
            />
            <div
                style={{ transform: "translateZ(50px)" }}
                className="relative flex flex-col h-full"
            >
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-neon-cyan/10 rounded-lg text-neon-cyan">
                        {project.icon}
                    </div>
                    <div className="flex gap-3">
                        {project.links.github && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white z-20" title="View Code">
                                <GitBranch size={18} />
                            </a>
                        )}
                        {project.links.live && (
                            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white z-20" title="Live Demo">
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors transform-gpu">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                    {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 text-xs font-mono text-neon-purple border border-neon-purple/30 rounded bg-neon-purple/5">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Glossy Overlay */}
            <div
                style={{ transform: "translateZ(100px)" }}
                className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-10 rounded-xl pointer-events-none transition-opacity duration-300"
            />
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "TRINETRA",
            desc: "Mobile Forensics Investigation Tool connected to court-admissible reporting.",
            tech: ["Python", "React 18", "FastAPI", "ADB", "SHA-256"],
            icon: <Search size={24} />,
            links: { github: "#", live: "#" }
        },
        {
            title: "XAENITHRA",
            desc: "Automated vulnerability scanner and pentesting suite (Command Center).",
            tech: ["Go", "gRPC", "Next.js"],
            icon: <Shield size={24} />,
            links: { github: "#", live: "#" }
        },
        {
            title: "INDERJAAL",
            desc: "Decentralized secure communication protocol for red teams.",
            tech: ["Rust", "WASM", "libp2p"],
            icon: <Database size={24} />,
            links: { github: "#", live: "#" }
        }
    ];

    return (
        <section className="container mx-auto px-4 py-20 max-w-7xl">
            <div className="flex items-center gap-4 mb-16 border-b border-white/10 pb-4">
                <Layout className="text-neon-cyan" size={32} />
                <h3 className="text-3xl font-display font-bold text-white text-glow-cyan">PROJECT_MODULES</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, i) => (
                    <ProjectCard key={i} project={p} index={i} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
