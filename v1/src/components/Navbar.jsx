// Navbar.jsx
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-lg bg-white/30 z-50 shadow-sm dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <a href="#" className="text-2xl font-bold text-indigo-200 ">
          Oliver Llauca
        </a>
        {/* Para pantallas medianas en adelante se muestran los enlaces */}
        <div className="hidden md:flex gap-6 dark:text-gray-300">
          {["inicio", "proyectos", "habilidades", "contacto"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="hover:text-indigo-600 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        {/* Botón menú en pantallas pequeñas */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none text-gray-800 dark:text-gray-200 hover:bg-indigo-400">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Menú desplegable para pantallas pequeñas */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg shadow-lg dark:text-gray-300">
          <ul className="flex flex-col items-center py-4">
            {["inicio", "proyectos", "habilidades", "contacto"].map((link) => (
              <li key={link} className="py-2">
                <a
                  href={`#${link}`}
                  className="hover:text-indigo-600 transition-colors"
                  onClick={() => setIsOpen(false)} 
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
