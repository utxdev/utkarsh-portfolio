import React from 'react';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const CredentialCard = ({ type, icon: Icon, title, items }) => (
    <div className="p-6 rounded-3xl bg-cyber-900/50 border border-white/5 hover:border-neon-cyan/30 transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-neon-cyan/10 text-neon-cyan">
                <Icon size={20} />
            </div>
            <h3 className="text-xl font-display font-bold text-white">{title}</h3>
        </div>
        <div className="space-y-6">
            {items.map((item, idx) => (
                <div key={idx} className="relative pl-6 border-l border-white/10 last:border-0">
                    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-cyber-800 border border-neon-cyan/50"></div>
                    <h4 className="text-white font-bold text-sm tracking-wide">{item.role}</h4>
                    <div className="text-neon-violet text-xs font-mono mb-1">{item.org}</div>
                    {item.duration && <div className="text-gray-500 text-[10px] font-mono">{item.duration}</div>}
                </div>
            ))}
        </div>
    </div>
);

const CertCard = ({ certs }) => (
    <div className="p-6 rounded-3xl bg-cyber-900/50 border border-white/5 hover:border-neon-cyan/30 transition-all duration-300 h-full">
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-neon-pink/10 text-neon-pink">
                <Award size={20} />
            </div>
            <h3 className="text-xl font-display font-bold text-white">Certifications</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certs.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-white/5 hover:border-neon-cyan/30 transition-colors">
                    <CheckCircle2 size={16} className="text-neon-cyan mt-1 flex-shrink-0" />
                    <div>
                        <div className="text-white text-xs font-bold leading-tight mb-1">{cert.name}</div>
                        <div className="text-gray-500 text-[10px] font-mono">{cert.issuer}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

const Credentials = () => {
    return (
        <section className="container mx-auto px-4 py-12 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Education & Experience */}
                <CredentialCard
                    title="Experience"
                    icon={Briefcase}
                    items={[
                        { role: "Team Leader", org: "Xaenithra", duration: "09/2025 - Present" },
                        { role: "Core Team Member", org: "Cysecsphere Club CU", duration: "09/2025 - Present" },
                        { role: "Community Contributor", org: "Brainly (Academic Content)", duration: "Volunteer" },
                    ]}
                />
                <CredentialCard
                    title="Education"
                    icon={GraduationCap}
                    items={[
                        { role: "Bachelor of Engineering (Hons) CSE", org: "Chandigarh University", duration: "01/2025 - 12/2029" },
                        { role: "Cybersecurity Specialization", org: "IBM Collaboration", duration: "Integrated Program" },
                    ]}
                />
            </div>

            {/* Certifications - Full Width */}
            <CertCard
                certs={[
                    { name: "Certified AppSec Practitioner (CAP)", issuer: "The SecOps Group" },
                    { name: "Pre Security Certificate", issuer: "TryHackMe" },
                    { name: "Tata - Cybersecurity Analyst Job Simulation", issuer: "Forage" },
                    { name: "The Basics of Google Cloud Compute", issuer: "Google" },
                    { name: "Career Essentials in Cybersecurity", issuer: "Microsoft and LinkedIn" },
                    { name: "Generative AI Foundations", issuer: "upGrad" },
                ]}
            />
        </section>
    );
};

export default Credentials;
