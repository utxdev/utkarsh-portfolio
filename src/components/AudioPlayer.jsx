import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [audioError, setAudioError] = useState(false);
    const audioRef = useRef(null);

    // Local Lo-Fi Loop (Copyright Free)
    const streamUrl = "/assets/music.mp3";

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.05; // Very low volume (5%)
            if (!isMuted) {
                audioRef.current.play().catch(e => {
                    console.error("Audio autoplay failed:", e);
                    // Autoplay policies might block this until interaction
                });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isMuted]);

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    // Don't hide on error, just log it. We want the UI to be visible.
    // if (audioError) return null; 

    return (
        <div className="fixed bottom-6 left-6 z-[100] flex items-center gap-3">
            <button
                onClick={toggleMute}
                className={`
                    p-3 rounded-full border-2 transition-all duration-300 group relative overflow-hidden shadow-lg
                    ${isMuted
                        ? 'bg-black/90 border-coffee-600 text-coffee-400 hover:border-amber-500 hover:text-amber-500' // High contrast mute state
                        : 'bg-black/90 border-amber-500 text-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)]'
                    }
                `}
            >
                {/* Ping animation when playing */}
                {!isMuted && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-amber-500/20"></span>
                )}

                {audioError ? (
                    <VolumeX size={20} className="text-red-500" title="Stream Offline" />
                ) : (
                    isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />
                )}
            </button>

            {/* Visualizer bars (Fake/CSS based) */}
            {!isMuted && !audioError && (
                <div className="flex items-end gap-1 h-6">
                    <div className="w-1 bg-amber-500/80 animate-[music-bar_1s_ease-in-out_infinite]"></div>
                    <div className="w-1 bg-amber-500/60 animate-[music-bar_1.2s_ease-in-out_infinite_0.1s] h-3"></div>
                    <div className="w-1 bg-amber-500/80 animate-[music-bar_0.8s_ease-in-out_infinite_0.2s] h-5"></div>
                    <div className="w-1 bg-amber-500/60 animate-[music-bar_1.1s_ease-in-out_infinite_0.3s]"></div>
                </div>
            )}

            {/* Label for clarity */}
            <span className={`text-xs font-mono font-bold tracking-widest transition-all duration-300 ${isMuted ? 'text-coffee-600 opacity-0 group-hover:opacity-100' : 'text-amber-500 opacity-100'}`}>
                {isMuted ? 'MUTE' : 'ON AIR'}
            </span>

            <audio
                ref={audioRef}
                src={streamUrl}
                loop
                crossOrigin="anonymous"
                onError={() => {
                    console.log("Audio stream error");
                    setAudioError(true);
                }}
            />

            <style jsx>{`
                @keyframes music-bar {
                    0%, 100% { height: 4px; }
                    50% { height: 100%; }
                }
            `}</style>
        </div>
    );
};

export default AudioPlayer;
