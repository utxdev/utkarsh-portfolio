import React, { useState, useEffect } from 'react';
import CyberBackground from './components/CyberBackground';
import AudioPlayer from './components/AudioPlayer';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';

const App = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 500);
    }, []);

    return (
        <div className={`min-h-screen bg-coffee-950 text-coffee-100 font-mono selection:bg-amber-900/50 selection:text-amber-200 overflow-x-hidden transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <CyberBackground />
            <AudioPlayer />

            <main className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
                <Header />
                <About />
                <Experience />
                <Projects />
                <Achievements />
                <Skills />
                <Certifications />

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
