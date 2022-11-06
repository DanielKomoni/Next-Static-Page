/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      width:{
        1920: "1920px",
        650:"650px",
      },
      height:{
        1080: "1080px",
        94:"94px",
      }
  
     
    },
  },
  plugins: [],
}
