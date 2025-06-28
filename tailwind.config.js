/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        opensans: ['Open Sans', 'sans-serif'],
        delius: ['Delius Swash Caps', 'cursive'],
        tangerine: ['Tangerine', 'cursive'],
        lobster: ['Lobster', 'cursive'],
        sacramento: ['Sacramento', 'cursive'],
        playwrite: ['Playwrite IN', 'cursive'],
        playball: ['Playball', 'cursive'],
        outfit: ['Outfit', 'sans-serif'],
        iceland: ['Iceland', 'sans-serif'],
        lancelot: ['Lancelot', 'cursive'],
        youngSerif: ['Young Serif', 'serif'],
        
      },
      colors: {
        'light-gray': '#e6e6e6',
        'white': '#ffffff',
        'light-blue': '#87cefa',
        'pink-purple-gradient': 'linear-gradient(to right, #ff6f91, #c86dd7)',
      },
    },
  },
  plugins: [],
};
