/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Primary Brand Colors
        primary: {
          DEFAULT: '#0571D6',
          dark: '#081AE0',
          light: '#03A8D0',
          blue: '#0822DF',
          cyan: '#048AD3',
          lighter: '#03A7D1',
          navy: '#032289',
        },
        // Background Colors
        bg: {
          light: '#F8FDFF',
          lighter: '#EAF6FF',
          white: '#FFFFFF',
        },
        // Text Colors
        text: {
          primary: '#000000',
          secondary: '#5D5D5D',
          muted: '#7C7C7C',
          light: '#6C6C6C',
          gray: '#5C5C5C',
          dark: '#535151',
          placeholder: '#919191',
        },
        // Border & Line Colors
        border: {
          primary: '#00B5FF',
          gray: '#656565',
          light: '#C5C5C5',
          muted: '#8C8C8C',
        },
        // Icon & Badge Colors
        icon: {
          gray: '#7E7E7E',
          light: '#656464',
          company: '#717171',
        },
        // Star Rating
        star: '#FFB800',
        // Footer Colors
        footer: {
          text: '#DDDDDD',
          bg: '#F3F1F1',
        },
      },
      backgroundImage: {
        // Primary Gradient (Used for buttons, badges, headings)
        'gradient-primary': 'linear-gradient(to right, #081AE0, #0571D6, #03A8D0)',
        // Blue Gradient 1 (Used for service cards - variant 1)
        'gradient-blue-1': 'linear-gradient(to right, #0822DF, #048AD3)',
        // Blue Gradient 2 (Used for service cards - variant 2)
        'gradient-blue-2': 'linear-gradient(to right, #065FD8, #03A8D0)',
        // Blue Gradient 3 (Used for some cards)
        'gradient-blue-3': 'linear-gradient(to right, #065FD8, #03A7D1)',
        // Contact Form Button Gradient
        'gradient-contact': 'linear-gradient(to right, #082CDE, #03A6D0)',
      },
      borderRadius: {
        'card': '15px',
        'badge': '12px',
        'input': '5px',
        'button': '10px',
        'contact-card': '26px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
