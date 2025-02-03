import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div
        className={`text-center space-y-8 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="relative inline-block group">
          <img
            src="/images/avatar.jpg"
            alt="Oliver Llauca"
            className="w-48 h-48 rounded-full border-4 border-white shadow-xl group-hover:scale-105 transition-all duration-300"
          />
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent animate-spin-slow"
            style={{ borderTopColor: "#6366f1" }}
          ></div>
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Oliver Llauca
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Programador FullStack | Software Developer</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:your@email.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
            <FaEnvelope size={24} />
          </a>
        </div>
        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Ver mi trabajo
        </button>
      </div>
    </section>
  )
}

export default Hero

