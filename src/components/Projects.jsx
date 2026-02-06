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
            className="relative w-full h-full rounded-xl transition-colors group cursor-pointer perspective-1000"
        >
            {/* Base Glass Layer & Holographic Effect */}
            <div className={`
                absolute inset-0 rounded-xl bg-cyber-glass backdrop-blur-xl border border-white/10 shadow-lg
                group-hover:shadow-[0_0_30px_rgba(189,0,255,0.15)] transition-shadow duration-500
                overflow-hidden z-0
            `} style={{ transform: "translateZ(0px)" }}>
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-violet opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500" />
            </div>

            <div
                style={{ transform: "translateZ(50px)" }}
                className="relative flex flex-col h-full p-6 z-10"
            >
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-neon-cyan/10 rounded-lg text-neon-cyan border border-neon-cyan/20">
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
                        <span key={i} className="px-2 py-1 text-xs font-mono text-neon-violet border border-neon-violet/30 rounded bg-neon-violet/5">
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
