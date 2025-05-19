import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const TemaToogle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Al montarse, comprueba la preferencia almacenada o la del sistema
  useEffect(() => {
    const storedTheme = localStorage.getItem("currentTheme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      
      // No hay preferencia almacenada, usar la del sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("currentTheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("currentTheme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-md focus:outline-none overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute inset-0 transition-colors duration-300 ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          darkMode ? "opacity-100" : "opacity-0"
        }`}
      >
        <FaMoon className={`text-gray-300 text-lg`} />
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          darkMode ? "opacity-0" : "opacity-100"
        }`}
      >
        <FaSun className={`text-gray-700 text-lg`} />
      </div>
    </button>
  );
};

export default TemaToogle;


// import { useState, useEffect } from "react";
// import { FaSun, FaMoon } from "react-icons/fa";

// const TemaToogle = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   // Al montarse, comprueba la preferencia almacenada o la del sistema
//   useEffect(() => {
//     const storedTheme = localStorage.getItem("currentTheme");
//     if (storedTheme === "dark") {
//       setDarkMode(true);
//       document.documentElement.classList.add("dark");
//     } else if (storedTheme === "light") {
//       setDarkMode(false);
//       document.documentElement.classList.remove("dark");
//     } else {
      
//       // No hay preferencia almacenada, usar la del sistema
//       const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//       setDarkMode(prefersDark);
//       document.documentElement.classList.toggle("dark", prefersDark);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     if (newMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("currentTheme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("currentTheme", "light");
//     }
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="relative w-16 h-16 rounded-full focus:outline-none overflow-hidden"
//       aria-label="Toggle theme"
//     >
//       <div
//         className={`absolute inset-0 transition-colors duration-500 ${
//           darkMode ? "bg-indigo-900" : "bg-yellow-400"
//         }`}
//       />
//       <div
//         className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
//           darkMode ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <FaMoon className="text-white text-2xl" />
//       </div>
//       <div
//         className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
//           darkMode ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         <FaSun className="text-white text-2xl" />
//       </div>
//       {[...Array(20)].map((_, i) => (
//         <span
//           key={i}
//           className={`absolute w-1 h-1 bg-white rounded-full transition-all duration-700 ease-out ${
//             darkMode ? "opacity-0 scale-0" : "opacity-100 scale-100"
//           }`}
//           style={{
//             top: `${50 + Math.random() * 50 * (Math.random() > 0.5 ? 1 : -1)}%`,
//             left: `${50 + Math.random() * 50 * (Math.random() > 0.5 ? 1 : -1)}%`,
//             transform: `translate(-50%, -50%) ${
//               darkMode ? "scale(0)" : `scale(${1 + Math.random()})`
//             }`,
//             transition: `all ${700 + Math.random() * 500}ms cubic-bezier(0.25, 0.1, 0.25, 1) ${
//               Math.random() * 200
//             }ms`,
//           }}
//         />
//       ))}
//     </button>
//   );
// };

// export default TemaToogle;