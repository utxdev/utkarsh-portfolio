/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                mono: ['"JetBrains Mono"', 'monospace'], // Suggesting a tech font
            },
            animation: {
                'gradient-x': 'gradient-x 15s ease infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 3s ease-in-out infinite'
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
                    '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
                }
            }
        },
    },
    plugins: [],
}
