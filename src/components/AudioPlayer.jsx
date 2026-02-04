import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [audioError, setAudioError] = useState(false);
    const audioRef = useRef(null);

    // Stream URL: Lofi 24/7 (Stable HTTPS stream)
    // Alternative: https://stream.zeno.fm/0r0xa854rp8uv
    const streamUrl = "https://stream.zeno.fm/0r0xa854rp8uv";

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.4; // Set initial volume to 40%
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

    if (audioError) return null;

    return (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
            <button
                onClick={toggleMute}
                className={`
                    p-3 rounded-full border transition-all duration-300 group relative overflow-hidden
                    ${isMuted
                        ? 'bg-coffee-950/80 border-coffee-800 text-coffee-400'
                        : 'bg-black/80 border-amber-500 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                    }
                `}
            >
                {/* Ping animation when playing */}
                {!isMuted && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-amber-500/20"></span>
                )}

                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>

            {/* Visualizer bars (Fake/CSS based) */}
            {!isMuted && (
                <div className="flex items-end gap-1 h-6">
                    <div className="w-1 bg-amber-500/80 animate-[music-bar_1s_ease-in-out_infinite]"></div>
                    <div className="w-1 bg-amber-500/60 animate-[music-bar_1.2s_ease-in-out_infinite_0.1s] h-3"></div>
                    <div className="w-1 bg-amber-500/80 animate-[music-bar_0.8s_ease-in-out_infinite_0.2s] h-5"></div>
                    <div className="w-1 bg-amber-500/60 animate-[music-bar_1.1s_ease-in-out_infinite_0.3s]"></div>
                </div>
            )}

            <audio
                ref={audioRef}
                src={streamUrl}
                loop
                crossOrigin="anonymous"
                onError={() => setAudioError(true)}
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
