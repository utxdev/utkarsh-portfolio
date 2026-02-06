import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const GlobalEffects = () => {
    // Custom Cursor Logic
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <>
            {/* SVG Noise Filter using feTurbulence */}
            <div className="fixed inset-0 z-[50] pointer-events-none opacity-20 mix-blend-overlay">
                <svg className='w-full h-full'>
                    <filter id='noiseFilter'>
                        <feTurbulence
                            type='fractalNoise'
                            baseFrequency='0.6'
                            stitchTiles='stitch'
                            numOctaves='3'
                        />
                    </filter>
                    <rect width='100%' height='100%' filter='url(#noiseFilter)' />
                </svg>
            </div>

            {/* Custom Cursor Glow */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 bg-neon-cyan/50 rounded-full blur-lg pointer-events-none z-[9999] mix-blend-screen"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: 12, // Center relative to the glow
                    translateY: 12
                }}
            />
        </>
    );
};

export default GlobalEffects;
