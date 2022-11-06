/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#0DB2B2',
                secondary: '#E53D00',
                text: '#1B3838',
                bg: '#F7F9F9',
                lightBg: '#F4F7F7',
                lightText: '#294545',
            },
        },
    },
    plugins: [],
};
