/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {    
      colors: {
        myColor : {
          100: '#ffb03f'
        }
      }
   },
  },
  plugins: [],
}

