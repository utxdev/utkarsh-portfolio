import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
    const certs = [
        {
            name: "Certified AppSec Practitioner (CAP)",
            issuer: "The SecOps Group",
            date: "2025"
        },
        {
            name: "Pre Security Certificate",
            issuer: "TryHackMe",
            date: "2024"
        },
        {
            name: "Tata - Cybersecurity Analyst Job Simulation",
            issuer: "Forage",
            date: "2024"
        },
        {
            name: "The Basics of Google Cloud Compute",
            issuer: "Google Skill Badge",
            date: "2024"
        },
        {
            name: "Career Essentials in Cybersecurity",
            issuer: "Microsoft and LinkedIn",
            date: "2024"
        },
        {
            name: "Generative AI Foundations",
            issuer: "upGrad",
            date: "2024"
        }
    ];

    return (
        <section className="mb-32">
            <div className="flex items-center gap-4 mb-12 border-b border-coffee-800 pb-4">
                <Award className="text-bronze-500" size={32} />
                <h3 className="text-3xl font-bold text-coffee-100 font-mono">CERTIFIED_AUTHORITY</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((cert, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 p-4 border border-coffee-800/50 rounded hover:bg-coffee-900/40 hover:border-bronze-600/50 transition-colors"
                    >
                        <CheckCircle className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                        <div>
                            <h4 className="text-coffee-100 font-bold text-sm">{cert.name}</h4>
                            <p className="text-coffee-500 text-xs font-mono mt-1">{cert.issuer}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
