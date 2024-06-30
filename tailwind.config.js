/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'naranja-unimet': '#FF8200',
        'beige-granier': '#AD986E',
        'azul-oscuro-granier': '#34394B',
        'paypal': '#003087',
        'gris-campo': '#444444',
        'azul-claro-granier': '#00A3E0',	
        'azul-producto': '#4D546E',
        'blanco-hueso': '#D9D9D6',

      },
      fontFamily: {
        robotoRegular:['Regular'],
        robotoMedium:['Medium'],
        robotoBold:['Bold'],
      }
    },
  },
  plugins: [],
}

