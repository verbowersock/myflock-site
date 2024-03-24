/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '415px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1050px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      height: {
        128: '32rem',
        160: '40rem',
        200: '50rem',
      },
      width: {
        128: '32rem',
      },
      lineHeight: {
        12: '3rem',
      },
      colors: {
        myflockGreen: '#4d8744',
        myflockPurple: '#9C27B0',
        myflockBrown: '#C2875A',
      },
      fontFamily: {
        //    head: ["Amatic", "sans-serif"],
        //  body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
