/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "white": "#ffffff",
      "bright-blue": "hsl(220, 98%, 61%)",
      "gradient-color-start": "hsl(192, 100%, 67%)",
      "gradient-color-stop": "hsl(280, 87%, 65%)",
      // light theme color scheme
      "light-theme-gray": "hsl(0, 0%, 98%)",
      "light-theme-blue-100": "hsl(236, 33%, 92%)",
      "light-theme-blue-200": "hsl(233, 11%, 84%)",
      "light-theme-blue-300": "hsl(236, 9%, 61%)",
      "light-theme-blue-400": "hsl(235, 19%, 35%)",
      // dark theme color scheme
      "dark-theme-blue-100": "hsl(234, 39%, 85%)",
      "dark-theme-blue-hover": "hsl(236, 33%, 92%)",
      "dark-theme-blue-200": "hsl(234, 11%, 52%)",
      "dark-theme-blue-300": "hsl(233, 14%, 35%)",
      "dark-theme-blue-400": "hsl(237, 14%, 26%)",
      "dark-theme-blue-500": "hsl(235, 21%, 11%)",
      "dark-theme-blue-des": "hsl(235, 24%, 19%)",

      // normal color for check errors
      "black": "#000",
      "crimson": "#990000", 
    },
    fontFamily:{
      josefin: ["Josefin Sans", "sans-serif"],
    },
    fontSize: {
      "size-400": ["14px", "1.4em"],
      "size-500": ["16px", "1.4em"],
      "size-600": ["18px", "1.4em"],
      "size-700": ["22px", "1.5em"],
      "size-800": ["25px", "1.6em"],
    },
    extend: {
      width:{
        clamp: "clamp(22rem, 50vw, 60rem)"
      },
      backgroundImage: {
        "mobile-light": "url('../src/assets/bg-mobile-light.jpg')",
        "mobile-dark": "url('../src/assets/bg-mobile-dark.jpg')",
        "desktop-light": "url('../src/assets/bg-desktop-light.jpg')",
        "desktop-dark": "url('../src/assets/bg-desktop-dark.jpg')",
      },
      screens: {
        '840': '840px',
      },
    },
  },
  plugins: [],
}

