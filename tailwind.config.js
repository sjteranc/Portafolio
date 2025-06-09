/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./public/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        'rosa-pastel': '#F9A7B0',
        'morado-oscuro': '#6B4F8B',
        'lila-suave': '#D9C6EB',
        'azul-gris': '#A0AEC0',
        'negro-suave': '#2D3748'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif']
      },
      backdropBlur: {
        'glass': '16px',
      }
    },
  },
  plugins: [],
} 