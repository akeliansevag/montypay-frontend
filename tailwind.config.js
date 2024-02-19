const colors = require('tailwindcss/colors');

module.exports = {
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            colors: {
                primary: '#FFFFFF',
                secondary: '#00F7F7',
                tertiary: '#47FDA5',
                quaternary: '#0F0C22',
            },
            screens: {
                '2xl': '1536px',
                '3xl': '1792px',
                '4xl': '2048px',
                '5xl': '2304px',
                '6xl': '2688px',
                '7xl': '3072px',
                '8xl': '3584px',
                '9xl': '4096px',
            },
            animation: {
                'blob': 'blob 40s infinite',
            },
            keyframes: {
                blob: {
                    '0%, 100%': { transform: 'translate(0) scale(2) rotate(0deg)' },
                    '25%': { transform: 'translate(50%) scale(2.5) rotate(90deg)' },
                    '50%': { transform: 'translate(100%) scale(3) rotate(180deg)' },
                }
            },
        }
    },
    important: true,
}