/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cyber: {
                    DEFAULT: '#2D0B5A',
                    900: '#1A0536',
                    950: '#0F0220',
                    light: '#5B2A8C',
                    glass: 'rgba(45, 11, 90, 0.4)',
                },
                neon: {
                    cyan: '#00F0FF',
                    pink: '#FF003C',
                    purple: '#BD00FF',
                    violet: '#7DF9FF', // New Electric Violet
                    blue: '#0047FF'
                },
                void: {
                    DEFAULT: '#050014',
                    purple: '#1a0b2e', // Deep Space Purple
                },
                gold: {
                    DEFAULT: '#FFD700', // Holographic Gold
                    dim: '#C5A000'
                }
            },
            fontFamily: {
                mono: ['"Space Mono"', 'monospace'],
                display: ['Orbitron', 'sans-serif'],
                body: ['Syne', 'sans-serif'],
            },
            animation: {
                'scanline': 'scanline 8s linear infinite',
                'glitch': 'glitch 1s linear infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 3s ease-in-out infinite'
            },
            keyframes: {
                scanline: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' }
                },
                glitch: {
                    '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
                    '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
                    '62%': { transform: 'translate(0,0) skew(5deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
