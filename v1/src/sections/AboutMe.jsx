import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Typewriter effect para simular escritura y borrado de código
const Typewriter = ({ texts, prefix = '// ', speed = 150 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const contentLength = texts[index].length;
    if (subIndex === contentLength && !reverse) {
      const timeout = setTimeout(() => setReverse(true), speed * 5);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      const timeout = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }, speed * 2);
      return () => clearTimeout(timeout);
    }
    const typingTimeout = setTimeout(
      () => setSubIndex((prev) => prev + (reverse ? -1 : 1)),
      reverse ? speed / 5 : speed
    );
    return () => clearTimeout(typingTimeout);
  }, [subIndex, index, reverse, speed, texts]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return (
    <span>
      <span className="text-green-600">{prefix}</span>
      <span className="text-green-600">{texts[index].substring(0, subIndex)}</span>
      <span className="text-gray-400">{blink ? '|' : ''}</span>
    </span>
  );
};

Typewriter.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  prefix: PropTypes.string,
  speed: PropTypes.number,
};

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
              src="/img/portada3.jpg?height=256&width=256"
              className="w-full h-full object-cover rounded-lg relative z-10"
            />
          </div>
          <div className="max-w-md">
            <p className="text-gray-600 dark:text-gray-200 mb-6 text-justify">
              Soy programador web con formación oficial, complementada con estudio autodidacta y un año de experiencia. Disfruto diseñar interfaces en el frontend y desarrollar la lógica en el backend para crear aplicaciones creativas y escalables.
            </p>
            <div className="mt-4 h-6 overflow-hidden whitespace-nowrap font-mono text-gray-700 dark:text-gray-300 text-lg">
              <Typewriter
                texts={[
                  'System.out.println("Mira mis proyectos");',
                  'console.log("Hola mundo");',
                  'echo "Programador web";'
                ]}
                prefix="// "
                speed={100}
              />
            </div>
            {/* <div className="flex justify-center gap-6 flex-wrap">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <FaUsers className="text-3xl text-blue-500 dark:text-blue-400 mb-1 mx-auto" />
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Trabajo en equipo</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <FaCoffee className="text-3xl text-amber-500 dark:text-amber-400 mb-1 mx-auto" />
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Café y creatividad</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe