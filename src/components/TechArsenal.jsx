import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Code, Database, Lock, Globe, Terminal, Zap } from 'lucide-react';

const ArsenalCategory = ({ title, icon: Icon, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-neon-violet/30 transition-colors"
    >
        <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
            <div className="p-2 rounded-lg bg-neon-violet/10 text-neon-violet">
                <Icon size={20} />
            </div>
            <h3 className="font-display font-bold text-white text-lg tracking-wide">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
                <span
                    key={i}
                    className="px-3 py-1.5 rounded bg-black/40 border border-white/5 text-xs font-mono text-gray-300 hover:text-white hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all cursor-default"
                >
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const TechArsenal = () => {
    return (
        <section className="container mx-auto px-4 py-24 max-w-7xl">
            <div className="text-center mb-16">
                <span className="text-neon-cyan font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Capabilities</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 text-glow-purple">
                    TECHNICAL <span className="text-neon-violet">ARSENAL</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ArsenalCategory
                    title="Offensive Security"
                    icon={Shield}
                    skills={["Metasploit", "Burp Suite Pro", "Nmap", "Wireshark", "SQLMap", "Aircrack-ng", "Hydra", "John the Ripper"]}
                    delay={0.1}
                />
                <ArsenalCategory
                    title="Cloud & Infra"
                    icon={Database}
                    skills={["AWS Security", "Docker", "Kubernetes", "Linux (Kali/Parrot)", "Active Directory", "Azure Sentinel", "Terraform"]}
                    delay={0.2}
                />
                <ArsenalCategory
                    title="Development"
                    icon={Code}
                    skills={["Python", "Go (Golang)", "React.js", "Node.js", "TypeScript", "Bash Scripting", "C/C++ Assembly"]}
                    delay={0.3}
                />
                <ArsenalCategory
                    title="Forensics"
                    icon={Lock}
                    skills={["Autopsy", "Volatility", "Velociraptor", "FTK Imager", "Memory Dump Analysis", "Registry Analysis"]}
                    delay={0.4}
                />
                <ArsenalCategory
                    title="OSINT & Recon"
                    icon={Globe}
                    skills={["Maltego", "Shodan", "Recon-ng", "Spiderfoot", "Google Dorking", "Social Engineering"]}
                    delay={0.5}
                />
                <ArsenalCategory
                    title="Cryptography"
                    icon={Terminal}
                    skills={["AES/RSA Implementation", "PKI Infrastructure", "Hashcat", "Cryptanalysis", "Steganography"]}
                    delay={0.6}
                />
            </div>
        </section>
    );
};

export default TechArsenal;
