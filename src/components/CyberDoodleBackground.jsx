import React from 'react';

const CyberDoodleBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-coffee-950">
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,19,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,19,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-coffee-950/20 to-coffee-950/80"></div>

            {/* Random Doodles / Tech Lines */}
            <svg className="absolute top-0 left-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="tech-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M10 10 L20 10 L20 20" fill="none" stroke="#CD7F32" strokeWidth="0.5" />
                        <rect x="50" y="50" width="2" height="2" fill="#CD7F32" />
                        <path d="M80 80 L90 90" fill="none" stroke="#CD7F32" strokeWidth="0.5" strokeDasharray="2 2" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#tech-pattern)" />
            </svg>

            {/* Large Abstract Shapes */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-bronze-900/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-coffee-900/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1))] bg-[size:100%_4px] pointer-events-none z-50 opacity-20"></div>
        </div>
    );
};

export default CyberDoodleBackground;
