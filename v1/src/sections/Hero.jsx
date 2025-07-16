import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import DownloadCVButton from "../components/DownloadCVButton";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div
        className={`text-center space-y-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="relative inline-block group">
          <div className="absolute inset-0 bg-indigo-200 rounded-full blur-md transform group-hover:scale-110 transition-transform duration-300"></div>
          <img
            src="/img/foto4.jpg"
            alt="Oliver Llauca"
            className="relative w-48 h-48 rounded-full border-4 border-[#6366f1] shadow-xl group-hover:scale-105 transition-all duration-300"
          />
        </div>

        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-blue-300">
          Oliver Llauca Galvez
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300">Programador FullStack | Software Developer</p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/OliverMp28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/oliver-l-233417295/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
          <div className="relative">
            <button
              onClick={() => {
                navigator.clipboard.writeText('olivermppr@gmail.com');
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
              }}
              title="Copiar email"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110 focus:outline-none"
            >
              <FaEnvelope size={28} />
            </button>
            {isCopied && (
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md shadow-lg transition-opacity duration-300">
                ¡Copiado!
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <button
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-full hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 focus:outline-none cursor-pointer transform hover:scale-105 shadow-md hover:shadow-lg"
            onClick={() => {
              document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Ver mis Proyectos
          </button>

          <DownloadCVButton className="px-8 py-3" iconSize={16} />
        </div>
      </div>
    </section>
  )
}

export default Hero

