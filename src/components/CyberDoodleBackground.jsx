import React from 'react';

const CyberDoodleBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-coffee-950">
            {/* Texture Noise Overlay (Grain) */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay z-10"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            {/* Generated Doodle Background - Tiled & Scrolling */}
            <div className="absolute inset-0 w-full h-full opacity-30 animate-scanline"
                style={{
                    backgroundImage: 'url("/assets/cyber_doodle_bg.png")',
                    backgroundSize: '400px',
                    backgroundRepeat: 'repeat',
                }}
            ></div>

            {/* Floating Stickers Layer - Parallax Simulation */}
            <div className="absolute top-10 right-10 w-64 h-64 opacity-20 rotate-12 animate-float">
                <img src="/assets/hacker_stickers.png" alt="" className="w-full h-full object-cover rounded-full mix-blend-screen" />
            </div>
            <div className="absolute bottom-20 left-10 w-48 h-48 opacity-10 -rotate-12 animate-float" style={{ animationDelay: '2s' }}>
                <img src="/assets/hacker_stickers.png" alt="" className="w-full h-full object-cover rounded-full mix-blend-screen scale-150" />
            </div>

            {/* Vignette & Old Film Effect */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-coffee-950/40 to-coffee-950/90 z-20"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2))] bg-[size:100%_4px] pointer-events-none z-30 opacity-30"></div>
        </div>
    );
};

export default CyberDoodleBackground;
