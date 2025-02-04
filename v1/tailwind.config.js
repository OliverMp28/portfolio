// tailwind.config.js
export default {
  darkMode: "class", // Se usará la clase "dark" para activar el modo oscuro
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#1a202c",
        secondary: "#2d3748",
        accent: "#6366f1",
        // Puedes definir o extender más colores, tanto para el tema claro como para el oscuro
      },
    },
  },
  plugins: [],
};
