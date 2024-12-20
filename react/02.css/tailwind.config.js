/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {    
      colors: {
        myColor : {
          100: '#ffb03f'
        },
        spacing : {
          '72' : '18rem',
          '84' : '21rem',
          '96' : '24rem'
        },
      }
   },
  },
  plugins: [],
}

