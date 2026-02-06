import React, { useState, useEffect } from 'react';
import CyberBackground from './components/CyberBackground';
import Header from './components/Header';
import Projects from './components/Projects';
import GlobalEffects from './components/GlobalEffects';
import BentoGrid from './components/BentoGrid';
import AudioPlayer from './components/AudioPlayer'; // Restored import

const App = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 500);
    }, []);

    return (
        <div className={`min-h-screen bg-void-DEFAULT text-white font-body selection:bg-neon-violet/30 selection:text-white overflow-x-hidden transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <CyberBackground />
            <GlobalEffects />
            <AudioPlayer />

            <main className="relative z-10 w-full overflow-hidden">
                <Header />
                <BentoGrid />
                <Projects />

                {/* Volunteering Section - Simple Footer Style */}
                <section className="border-t border-white/10 pt-12 pb-24 text-center bg-black/40 backdrop-blur-sm">
                    <h4 className="text-xl font-bold text-neon-purple mb-4 font-display tracking-widest">VOLUNTEERING & COMMUNITY</h4>
                    <p className="text-gray-400 max-w-2xl mx-auto px-6">
                        Community Contributor at <span className="text-neon-cyan">Brainly.in</span> (2020-2022).
                        Created LaTeX-based math and geometry content.
                    </p>

                    <div className="mt-12 text-xs text-gray-600 font-mono">
                        System Status: ONLINE | Encrypted Connection | © 2026 Utkarsh Pratham
                    </div>
                </section>
            </main>
        </div>
    );
};

export default App;
