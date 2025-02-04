import { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/40 dark:bg-gray-900/40 shadow-lg" : "bg-transparent"
      } backdrop-blur-lg`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <a href="#" className="text-2xl font-bold text-sky-800 dark:text-sky-100 transition-colors">
          Oliver Llauca
        </a>
        <div className="hidden md:flex gap-6">
          {["inicio", "proyectos", "habilidades", "contacto"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {link}
            </a>
          ))}
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
      {isOpen && (
        <div className="md:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg shadow-lg">
          <ul className="flex flex-col items-center py-4">
            {["inicio", "proyectos", "habilidades", "contacto"].map((link) => (
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