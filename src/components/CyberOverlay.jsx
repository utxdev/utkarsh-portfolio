import React from 'react';

const CyberOverlay = () => {
    return (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            {/* Top Bar */}
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black/80 to-transparent flex justify-between px-6 items-center text-[10px] font-mono text-neon-cyan/40 tracking-[0.2em] border-b border-neon-cyan/10">
                <span>// SYS.MONITOR_ACTIVE</span>
                <span className="animate-pulse">REC ●</span>
            </div>

            {/* Corner Brackets */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-neon-cyan/20 rounded-tl-xl"></div>
            <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-neon-cyan/20 rounded-tr-xl"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-neon-cyan/20 rounded-bl-xl"></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-neon-cyan/20 rounded-br-xl"></div>

            {/* Side Coordinates */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col gap-8 text-[9px] font-mono text-neon-violet/20">
                <span className="rotate-180 writing-mode-vertical">COORD: 34.0522° N</span>
                <span className="rotate-180 writing-mode-vertical">COORD: 118.2437° W</span>
            </div>

            {/* Bottom Bar */}
            <div className="absolute bottom-0 left-0 w-full h-6 bg-black/80 border-t border-neon-cyan/10 flex items-center justify-center">
                <div className="flex gap-1">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className={`w-1 h-2 ${Math.random() > 0.5 ? 'bg-neon-cyan/20' : 'bg-transparent'} rounded-[1px]`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CyberOverlay;
