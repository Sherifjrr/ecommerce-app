/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      width: {
        'custom-1': '30rem',
        'custom-2': '55%',
        'custom-3': '70%',
        'custom-4': '45%',
        'custom-5': '43%',
      },
      flex: {
        2: '2 2 0%',
      },
      backgroundImage: (theme) => ({
        laptopsDS: "url('/src/assets/Laptops.png')",
        laptopsSM: "url('/src/assets/Frame 61.png')",
        phonesDS: "url('/src/assets/smartPhones.png')",
      }),
    },
  },
  plugins: [],
}
