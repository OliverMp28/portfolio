import { useState, useEffect } from "react";
import PropTypes from "prop-types";

//typewriter effect para simular escritura y borrado de codigo
const Typewriter = ({ texts, varDecls, prefix = '', speed = 150 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Efecto de escritura y borrado
  useEffect(() => {
    const currentText = texts[textIndex];
    let timer;

    if (!isDeleting && charIndex < currentText.length) {
      timer = setTimeout(() => setCharIndex((prev) => prev + 1), speed);
    } else if (!isDeleting && charIndex === currentText.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => setCharIndex((prev) => prev - 1), speed / 3);
    } else if (isDeleting && charIndex === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts, speed]);

  // Parpadeo del cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="w-full overflow-hidden min-w-0 text-sm">
      <div className="h-6 mb-1 font-mono text-gray-700 dark:text-gray-300 truncate">
        {varDecls[textIndex]}
      </div>
      <div className="h-6 font-mono truncate">
        <span className="text-green-600 dark:text-green-300">{prefix}</span>
        <span className="text-blue-600 dark:text-blue-400">{texts[textIndex].substring(0, charIndex)}</span>
        <span className="text-gray-400">{blink ? '|' : ''}</span>
      </div>
    </div>
  );
};

Typewriter.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  varDecls: PropTypes.arrayOf(PropTypes.string).isRequired,
  prefix: PropTypes.string,
  speed: PropTypes.number,
};

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="py-16 bg-gray-50 dark:bg-gray-900 scroll-reveal overflow-x-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          El Programador detrás de la interfaz y el código.
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden">
          <div className="w-64 h-64 relative">
            <div className="w-full h-full bg-blue-500 dark:bg-blue-700 rounded-lg transform rotate-3 absolute top-0 left-0"></div>
            <div className="w-full h-full bg-indigo-500 dark:bg-indigo-700 rounded-lg transform -rotate-3 absolute top-0 left-0"></div>
            <img
              src="/img/portada3.jpg?height=256&width=256"
              className="w-full h-full object-cover rounded-lg relative z-10"
            />
          </div>
          <div className="w-full max-w-md min-w-0 md:flex-1">
            <p className="text-gray-600 dark:text-gray-200 mb-6 text-justify break-words">
              Soy programador web con formación oficial, complementada con estudio autodidacta y un año de experiencia. Disfruto diseñar interfaces en el frontend y desarrollar la lógica en el backend para crear aplicaciones creativas y escalables.
            </p>
            <div className="mt-4 font-mono text-gray-700 dark:text-gray-300 text-base w-full overflow-hidden min-w-0">
              <Typewriter
                texts={[
                  'System.out.println(text);',
                  'console.log(text);',
                  'echo $text;'
                ]}
                varDecls={[
                  'String text = "Mira mis proyectos";',
                  'let text: string = "desarrollo";',
                  '$text = "Programador web";'
                ]}
                speed={90}
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