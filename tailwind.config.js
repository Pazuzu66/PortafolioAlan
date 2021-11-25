module.exports = {  
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {    
    extend: {
      colors: {
        'primary': '#608AF5',        
      },
      backgroundImage: {
        'imgBg' : "url('./images/Bg.png')"
      },
      fontFamily:{
        'montserrat': ['Montserrat'],
        'poppins': ['Poppins'],        
      },
      textColor: {
        'title': '#172774',
        'text': '#14279B'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
}
