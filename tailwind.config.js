/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: '2rem',
    },
    screens: {
      'xss': '320px',
      // => @media (min-width: 360px) { ... } size layar dari 321 - 415
      'xs': '415px',
      // => @media (min-width: 414px) { ... } size layar dari 416 - 640
      'sm': '640px',
      // => @media (min-width: 640px) { ... } size layar dari 641 -880

      'md': '880px',
      // => @media (min-width: 768px) { ... } size layar dari 780 - 1028

      'lg': '1028px',
      // => @media (min-width: 1024px) { ... } size layar dari 1025 - 1280
      'xl': '1280px',
      // => @media (min-swidth: 1280px) { ... } size layar dari 1281 - 1536

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... } size layar dari 1536 >
    }
  },
  plugins: [],
}
