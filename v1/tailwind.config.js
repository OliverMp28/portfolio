export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        fontFamily: {
            sans: ['"Inter"', 'sans-serif'], // Fuente predeterminada para "font-sans"
          },
        extend: {
            keyframes: {
                'spin-slow': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
                },
            },
            animation: {
                'spin-slow': 'spin-slow 10s linear infinite',
            },
            colors: {
                primary: "#1a202c",  // Ejemplo: color primario oscuro
                secondary: "#2d3748",
                accent: "#6366f1",
              },
        },
    },
    plugins: [],
  };
