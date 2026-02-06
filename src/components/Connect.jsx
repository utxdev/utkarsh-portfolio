import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Twitter, Terminal, ExternalLink } from 'lucide-react';

const SocialLink = ({ href, icon: Icon, label, username, delay }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.1)" }}
        className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-black/40 hover:border-neon-violet/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all group"
    >
        <div className="p-3 rounded-lg bg-white/5 text-neon-violet group-hover:text-white group-hover:bg-neon-violet transition-colors">
            <Icon size={24} />
        </div>
        <div className="flex flex-col">
            <span className="text-sm font-bold text-white group-hover:text-neon-cyan transition-colors">{label}</span>
            <span className="text-xs font-mono text-gray-400">{username}</span>
        </div>
        <ExternalLink size={16} className="ml-auto text-gray-600 group-hover:text-neon-cyan opacity-0 group-hover:opacity-100 transition-all" />
    </motion.a>
);

const Connect = () => {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-void-purple/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="mb-16 md:flex justify-between items-end border-b border-white/10 pb-8">
                    <div>
                        <div className="flex items-center gap-2 text-neon-violet mb-2">
                            <Terminal size={18} />
                            <span className="font-mono text-sm tracking-widest text-neon-cyan">SECURE_UPLINK</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white text-glow-purple">
                            INITIATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-cyan">CONNECTION</span>
                        </h2>
                    </div>
                    <p className="mt-4 md:mt-0 text-gray-400 max-w-sm text-right hidden md:block">
                        Available for freelance security auditing, pentesting, and full-stack development contracts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SocialLink
                        href="https://github.com/utxdev"
                        icon={Github}
                        label="GitHub"
                        username="@utxdev"
                        delay={0.1}
                    />
                    <SocialLink
                        href="https://linkedin.com/in/utkarsh-pratham"
                        icon={Linkedin}
                        label="LinkedIn"
                        username="Utkarsh Pratham"
                        delay={0.2}
                    />
                    <SocialLink
                        href="https://instagram.com/xivtx"
                        icon={Instagram}
                        label="Instagram"
                        username="@xivtx"
                        delay={0.3}
                    />
                    <SocialLink
                        href="mailto:utx1zz@gmail.com"
                        icon={Mail}
                        label="Email"
                        username="utx1zz@gmail.com"
                        delay={0.4}
                    />
                </div>

                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-600">
                    <div className="flex gap-8">
                        <span>STATUS: <span className="text-green-500 animate-pulse">●</span> ONLINE</span>
                        <span>LATENCY: 12ms</span>
                        <span>ENCRYPTION: AES-256</span>
                    </div>
                    <div className="mt-4 md:mt-0">
                        © 2026 UTKARSH PRATHAM. ALL RIGHTS RESERVED.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connect;
