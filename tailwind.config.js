/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                coffee: {
                    100: '#EBE5DF',
                    200: '#D6C8BB',
                    300: '#BFA896',
                    400: '#A98973',
                    500: '#8C6A54',
                    600: '#6F4E3C',
                    700: '#55392B',
                    800: '#3D281E',
                    900: '#2B1C15',
                    950: '#1A110D',
                },
                bronze: {
                    400: '#CD7F32',
                    500: '#B87333',
                    600: '#A0522D',
                },
                amber: {
                    500: '#F59E0B',
                    900: '#78350F',
                }
            },
            fontFamily: {
                mono: ['"JetBrains Mono"', 'monospace'],
                display: ['"Courier New"', 'monospace'],
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
