import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
    const [isMuted, setIsMuted] = useState(false);
    const [audioError, setAudioError] = useState(false);
    const audioRef = useRef(null);

    // Local Lo-Fi Loop (Copyright Free)
    const streamUrl = "/assets/music.mp3";

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.05; // Very low volume (5%)
            if (!isMuted) {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(e => {
                        console.log("Autoplay blocked by browser policy. Reverting to muted.");
                        setIsMuted(true);
                    });
                }
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
                    p-3 rounded-full border transition-all duration-300 group relative overflow-hidden shadow-lg
                    ${isMuted
                        ? 'bg-cyber-950/80 border-cyber-light text-gray-500 hover:border-neon-cyan hover:text-neon-cyan'
                        : 'bg-black/90 border-neon-cyan text-neon-cyan shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                    }
                `}
            >
                {/* Ping animation when playing */}
                {!isMuted && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-neon-cyan/20"></span>
                )}

                {audioError ? (
                    <VolumeX size={20} className="text-neon-pink" title="Stream Offline" />
                ) : (
                    isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />
                )}
            </button>

            {/* Visualizer bars (Neon Cyan) */}
            {!isMuted && !audioError && (
                <div className="flex items-end gap-1 h-6">
                    <div className="w-1 bg-neon-cyan/80 animate-[music-bar_1s_ease-in-out_infinite]"></div>
                    <div className="w-1 bg-neon-cyan/60 animate-[music-bar_1.2s_ease-in-out_infinite_0.1s] h-3"></div>
                    <div className="w-1 bg-neon-cyan/80 animate-[music-bar_0.8s_ease-in-out_infinite_0.2s] h-5"></div>
                    <div className="w-1 bg-neon-cyan/60 animate-[music-bar_1.1s_ease-in-out_infinite_0.3s]"></div>
                </div>
            )}

            {/* Label for clarity */}
            <span className={`text-xs font-mono font-bold tracking-widest transition-all duration-300 ${isMuted ? 'text-gray-500 opacity-0 group-hover:opacity-100' : 'text-neon-cyan opacity-100'}`}>
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
