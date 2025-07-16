import { useState, useEffect } from "react"
import { FaBars, FaTimes } from 'react-icons/fa';
import DownloadCVButton from './DownloadCVButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showCvButton, setShowCvButton] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

    useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8; // Approx height of hero
      setScrolled(window.scrollY > 20)
      setShowCvButton(window.scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/55 dark:bg-gray-900/40 shadow-lg" : "bg-transparent"
      } backdrop-blur-lg`}
    >
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex-1 flex justify-start">
          <a href="#" className="text-2xl font-bold text-sky-800 dark:text-sky-100 transition-colors">
            Oliver Llauca
          </a>
        </div>

        <div className="hidden md:flex flex-1 justify-center gap-8">
          {["inicio", "estudios", "habilidades", "proyectos", "contacto"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="capitalize text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex-1 flex justify-end items-center">
          <div className="hidden md:block">
            <DownloadCVButton 
              className={`px-4 py-2 text-sm ${showCvButton ? 'opacity-100' : 'opacity-0'}`}
              iconSize={14} 
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none text-gray-800 dark:text-gray-200 hover:bg-indigo-400 hover:bg-opacity-20 rounded-full p-2 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg shadow-lg">
          <ul className="flex flex-col items-center py-4">
            {["inicio", "estudios", "habilidades", "proyectos", "contacto"].map((link) => (
              <li key={link} className="py-2">
                <a
                  href={`#${link}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
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
  )
}

export default Navbar