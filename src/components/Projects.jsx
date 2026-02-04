import React from 'react';
import { motion } from 'framer-motion';
import { Layout, GitBranch, ExternalLink, TabletSmartphone, Search, Database } from 'lucide-react';

const Projects = () => {
    const [activeImage, setActiveImage] = React.useState(0);

    const trinetraImages = [
        "/assets/trinetra_final_1.png",
        "/assets/trinetra_final_2.png",
        "/assets/trinetra_final_3.png",
        "/assets/trinetra_final_4.png",
        "/assets/trinetra_final_5.png"
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveImage((prev) => (prev + 1) % trinetraImages.length);
        }, 3500); // Slightly longer for better viewing
        return () => clearInterval(interval);
    }, []);

    const projects = [
        {
            title: "COMPANIO | AI Assistant",
            desc: "Advanced neural interface companion. Designed for seamless interaction, task automation, and digital companionship.",
            tech: ["React 19", "Node.js", "Socket.io", "OpenAI API"],
            icon: <Database size={24} className="text-bronze-500" />,
            link: "https://github.com/utxdev/Companio"
        },
        {
            title: "PATHFINDER | Learning Protocol",
            desc: "TikTok-style learning experience for the terminal generation. Vertical swipe navigation with hold-to-progress mechanics.",
            tech: ["React", "TypeScript", "Framer Motion", "Vercel"],
            icon: <TabletSmartphone size={24} className="text-coffee-300" />,
            link: "https://github.com/utxdev/Pathfinder"
        }
    ];

    return (
        <section className="mb-32">
            <div className="flex items-center gap-4 mb-12 border-b border-coffee-800 pb-4">
                <Layout className="text-bronze-500" size={32} />
                <h3 className="text-3xl font-bold text-coffee-100 font-mono">PROJECT_MODULES</h3>
            </div>

            <div className="grid grid-cols-1 gap-12 mb-16">
                {/* Featured Project: Xaenithra / Trinetra */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-coffee-950/80 border border-bronze-500/50 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(205,127,50,0.1)] relative group"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bronze-500 via-amber-500 to-bronze-500 animate-scanline opacity-50"></div>

                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Image Side - Carousel */}
                        <div className="relative overflow-hidden h-64 lg:h-[400px] border-b lg:border-b-0 lg:border-r border-coffee-800 bg-black group-hover:border-amber-500/50 transition-colors">
                            {/* Blurred Background Layer for filling black spaces */}
                            <div className="absolute inset-0 z-0 opacity-40 blur-2xl transform scale-125">
                                {trinetraImages.map((img, index) => (
                                    <img
                                        key={`blur-${index}`}
                                        src={img}
                                        alt=""
                                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === activeImage ? 'opacity-100' : 'opacity-0'}`}
                                    />
                                ))}
                            </div>

                            {/* Main Image Layer */}
                            {trinetraImages.map((img, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-1000 ease-in-out z-10 p-4 ${index === activeImage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                                >
                                    <img
                                        src={img}
                                        alt={`Trinetra Slide ${index}`}
                                        className="w-full h-full object-contain drop-shadow-2xl"
                                    />
                                </div>
                            ))}

                            {/* Visual Noise Overlay */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-20 mix-blend-overlay"></div>

                            {/* Slide Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                                {trinetraImages.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImage(idx)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeImage ? 'w-8 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'w-2 bg-coffee-800 hover:bg-coffee-600'}`}
                                    />
                                ))}
                            </div>

                            {/* Overlay Badge */}
                            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm border border-bronze-500 text-bronze-400 px-3 py-1 text-xs font-mono font-bold flex items-center gap-2">
                                <Database size={14} /> FLAGSHIP PROJECT
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-8 flex flex-col justify-between bg-coffee-900/20">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-3xl font-black text-coffee-100 mb-2 font-mono group-hover:text-amber-500 transition-colors">
                                        TRINETRA <span className="text-lg font-normal text-bronze-500">by Xaenithra</span>
                                    </h4>
                                    <a href="https://github.com/utxdev/Xaenithra-ps6-investigation" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={24} className="text-coffee-500 hover:text-amber-500 transition-colors" />
                                    </a>
                                </div>

                                <p className="text-coffee-300 text-base mb-6 leading-relaxed font-mono">
                                    <span className="text-amber-500 font-bold">The "All-Seeing Eye" of Digital Forensics.</span> <br />
                                    A 5-stage pipeline connecting device extraction (Indrajaal) to court-admissible reporting (Chitragupta).
                                </p>

                                <div className="space-y-4 mb-6">
                                    <div className="p-3 bg-black/40 border-l-2 border-bronze-500 text-sm text-coffee-300 font-mono">
                                        {'>'} <span className="text-amber-500">INDRAJAAL:</span> Live ADB Extraction Engine
                                    </div>
                                    <div className="p-3 bg-black/40 border-l-2 border-bronze-500 text-sm text-coffee-300 font-mono">
                                        {'>'} <span className="text-amber-500">KAAL CHAKRA:</span> Timeline Visualization
                                    </div>
                                    <div className="p-3 bg-black/40 border-l-2 border-bronze-500 text-sm text-coffee-300 font-mono">
                                        {'>'} <span className="text-amber-500">KARMA SEAL:</span> Cryptographic Evidence Integrity
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {["React 18", "Python 3.10", "FastAPI", "ADB", "Forensics", "Tailwind"].map((tech, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-black/40 border border-coffee-700 text-xs font-mono text-bronze-400">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
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
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={18} className="text-coffee-600 group-hover:text-amber-500 transition-colors cursor-pointer" />
                            </a>
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
