import { FaCode, FaCoffee, FaLightbulb } from "react-icons/fa"

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="py-16 bg-gray-50 dark:bg-gray-900 scroll-reveal">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          El Desarrollador Detrás de la interfaz y el codigo.
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-64 h-64 relative">
            <div className="w-full h-full bg-blue-500 dark:bg-blue-700 rounded-lg transform rotate-3 absolute top-0 left-0"></div>
            <div className="w-full h-full bg-indigo-500 dark:bg-indigo-700 rounded-lg transform -rotate-3 absolute top-0 left-0"></div>
            <img
              src="/img/escritorio.jpg?height=256&width=256"
              className="w-full h-full object-cover rounded-lg relative z-10"
            />
          </div>
          <div className="max-w-md">
            <p className="text-gray-600 dark:text-gray-200 mb-6">
              Soy un desarrollador de software apasionado por crear soluciones innovadoras y eficientes. Mi experiencia se basa mas que nada en la practica
              mas que de la laboral, de cierta forma disfruto encontrar errores en el codigo, claro esto si los logro resolver despues. 
              Mi objetivo es combinar creatividad y escalabilidad para desarrollar aplicaciones.
            </p>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <FaCode className="text-3xl text-blue-500 dark:text-blue-400 mb-2 mx-auto" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Codigo estructurado</p>
              </div>
              <div className="text-center">
                <FaCoffee className="text-3xl text-indigo-500 dark:text-indigo-400 mb-2 mx-auto" />
                <p className="text-sm text-gray-600 dark:text-gray-400">No amante del Café</p>
              </div>
              <div className="text-center">
                <FaLightbulb className="text-3xl text-yellow-500 dark:text-yellow-400 mb-2 mx-auto" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Ideas Creativas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe