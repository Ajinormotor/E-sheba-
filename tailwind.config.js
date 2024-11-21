/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "README.md"
  ],
  theme: {
    extend: {
      fontFamily:{
        ibm: ["IBM Plex Sans, sans-serif"]
      },
      colors: {
        lightBlue: ["#E1EEFF"],
        darkBlue: ["#021526]"],
        realBlue:['#0360D9'],
        normalBlue: ["#0360D9"],
        shadyBlue: ["#0D2B46"],
        blurBlue: ["#163048"],
        moonBlue: ["#A5CCFF"],
        fcBlue: ["#E6F5FC"],
        goldk:["#F5BF00"]
      }
      
    },
  },
  plugins: [],
}

