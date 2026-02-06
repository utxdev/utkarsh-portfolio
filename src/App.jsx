import React, { useState, useEffect } from 'react';
import CyberBackground from './components/CyberBackground';
import Header from './components/Header';
import Projects from './components/Projects';
import TechArsenal from './components/TechArsenal';
import Connect from './components/Connect';
import GlobalEffects from './components/GlobalEffects';
import BentoGrid from './components/BentoGrid';
import Achievements from './components/Achievements';
import AudioPlayer from './components/AudioPlayer';
import CyberOverlay from './components/CyberOverlay';

const App = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 500);
    }, []);

    return (
        <div className={`min-h-screen bg-void-DEFAULT text-white font-body selection:bg-neon-violet/30 selection:text-white overflow-x-hidden transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <CyberOverlay />
            <CyberBackground />
            <GlobalEffects />
            <AudioPlayer />

            <main className="relative z-10 w-full overflow-hidden">
                <Header />
                <BentoGrid />
                <Achievements />
                <TechArsenal />
                <Projects />
                <Connect />
            </main>
        </div>
    );
};

export default App;
