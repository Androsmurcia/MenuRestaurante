/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Colores personalizados
        // 'red': '#CC3300', // Descomenta si necesitas este color
        pink: "rgb(127 29 29)",
        orange: "#f5e2da",
      },
      margin: {
        margin: "0 0.5rem",
      },
      textUnderlineOffset: {
        custom: "3rem", // Puedes ajustar este valor
      },
      maxWidth: {
        "custom-1170": "1170px",
      },
      fontSize: {
        "custom-h4": "0.875rem",
        "3xl": "2rem",
        // Define un nuevo tamaño de fuente
      },
      display: {
        unset: "unset",
      },
      backgroundImage: {
        restauranteImg: "url('public/images/restaurante.jpg')",
      },
    },
  },
  plugins: [],
};
