import React, { useState, useEffect } from 'react';
import CyberBackground from './components/CyberBackground';
import Header from './components/Header';
import Projects from './components/Projects';
import GlobalEffects from './components/GlobalEffects';
import BentoGrid from './components/BentoGrid'; // Added BentoGrid import

const App = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 500);
    }, []);

    return (
        <div className={`min-h-screen bg-cyber-950 text-white font-body selection:bg-neon-pink/30 selection:text-white overflow-x-hidden transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <CyberBackground />
            <GlobalEffects />
            <AudioPlayer />

            <main className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
                <Header />
                <BentoGrid /> {/* Replaced multiple components with BentoGrid */}
                <Projects />

                {/* Volunteering Section - Simple Footer Style */}
                <section className="border-t border-coffee-800 pt-12 pb-24 text-center">
                    <h4 className="text-xl font-bold text-coffee-200 mb-4">VOLUNTEERING</h4>
                    <p className="text-coffee-400 max-w-2xl mx-auto">
                        Community Contributor at <span className="text-bronze-500">Brainly.in</span> (2020-2022).
                        Created LaTeX-based math and geometry content.
                    </p>

                    <div className="mt-12 text-sm text-coffee-600 font-mono">
                        System Status: ONLINE | Encrypted Connection | © 2026 Utkarsh Pratham
                    </div>
                </section>
            </main>
        </div>
    );
};

export default App;
