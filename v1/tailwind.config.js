// tailwind.config.js
export default {
    darkMode: "class", // habilita el dark mode mediante la clase 'dark'
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
      extend: {
        // Tus extendidos de colores, animaciones, etc.
        colors: {
          primary: "#1a202c",
          secondary: "#2d3748",
          accent: "#6366f1",
        },
      },
    },
    plugins: [],
  };
  