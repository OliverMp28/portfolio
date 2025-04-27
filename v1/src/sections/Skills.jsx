// Skills.jsx
import { useState } from "react";
import { FaReact, FaJsSquare, FaJava } from "react-icons/fa";
import { 
  SiCsswizardry, 
  SiPhp, 
  SiGit, 
  SiWordpress, 
  SiWoo,
  SiTailwindcss, 
  SiJquery, 
  SiBootstrap, 
  SiMysql, 
  SiAndroidstudio, 
  SiMediapipe 
} from "react-icons/si";
import PropTypes from 'prop-types';

const skillsData = [
  { name: "React", category: "Frontend", icon: <FaReact className="text-4xl text-blue-500" /> },
  // { name: "HTML", category: "Frontend", icon: <FaHtml5 className="text-4xl text-orange-600" /> },
  { name: "CSS", category: "Frontend", icon: <SiCsswizardry className="text-4xl text-purple-600" /> },
  { name: "JavaScript", category: "Frontend", icon: <FaJsSquare className="text-4xl text-yellow-500" /> },
  { name: "PHP", category: "Backend", icon: <SiPhp className="text-4xl text-blue-600" /> },
  { name: "Java", category: "Backend", icon: <FaJava className="text-4xl text-red-600" /> },
  { name: "MySQL", category: "Backend", icon: <SiMysql className="text-4xl text-sky-500" /> },
  { name: "Tailwind", category: "Frontend", icon: <SiTailwindcss className="text-4xl text-sky-500" /> },
  { name: "jQuery", category: "Frontend", icon: <SiJquery className="text-4xl text-sky-700" /> },
  { name: "Bootstrap", category: "Frontend", icon: <SiBootstrap className="text-4xl text-purple-500" /> },
  { name: "Git", category: "Otros", icon: <SiGit className="text-4xl text-orange-600" /> },
  { name: "WordPress", category: "Otros", icon: <SiWordpress className="text-4xl text-sky-600" /> },
  { name: "WooCommerce", category: "Otros", icon: <SiWoo className="text-4xl text-purple-600" /> },
  // { name: "Estatik", category: "Otros", icon: <FaHome className="text-4xl text-green-500" /> },
  { name: "Android Studio", category: "Otros", icon: <SiAndroidstudio className="text-4xl text-green-600" /> },
  { name: "Mediapipe", category: "Otros", icon: <SiMediapipe className="text-4xl text-cyan-600" /> },
];

const categories = ["All", "Frontend", "Backend", "Otros"];


const Skills = ({ onSelectTech, selectedTech }) => {
  // Estado local para la categoría de filtro en las skills
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtra las skills en función de la categoría seleccionada
  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="habilidades" className="py-1 bg-gray-50 dark:bg-gray-900 scroll-reveal">
      <h2 className="py-2 text-3xl font-bold text-center text-gray-900 dark:text-gray-200">Habilidades</h2>
      <p className="text-md font-small text-gray-700 dark:text-gray-400 text-center">
        Selecciona alguna y verá los proyectos hechos con la tecnologia seleccionada.
      </p>

      {/* Barra de categorías */}
      <div className="flex justify-center gap-4 mt-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              // Opcional: Puedes resetear el filtro de proyecto al cambiar de categoría
              // onSelectTech("");
            }}
            className={`px-4 py-2 rounded cursor-pointer transition-colors ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-indigo-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de skills filtradas */}
      <div id="lista-habilidades" className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 px-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 ${
              selectedTech === skill.name ? "ring-2 ring-indigo-500 rounded bg-gray-50 dark:bg-indigo-900" : ""
            }`}
            // Al hacer click, si ya esta seleccionado, lo deselecciona (vuelve a mostrar todos)
            onClick={() =>{
                document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' })
                onSelectTech(selectedTech === skill.name ? "" : skill.name)
              }
            }
          >
            {skill.icon}
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

Skills.propTypes = {
  onSelectTech: PropTypes.func.isRequired,
  selectedTech: PropTypes.string,
};

export default Skills;
