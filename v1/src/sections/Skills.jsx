// Skills.jsx
import { useState } from "react";
import { SiMediapipe, SiWoo, SiJquery } from "react-icons/si";
import { 
  ReactLight,
  CSSNew,
  JavaScript,
  TypeScript,
  PhpLight,
  Java,
  MySQL,
  TailwindCSS,
  Bootstrap,
  Git,
  WordPress,
  Android,
  Bun,
  Docker
} from "@ridemountainpig/svgl-react";
import PropTypes from 'prop-types';

const skillsData = [
  { name: "React", category: "Frontend", icon: <ReactLight className="w-8 h-8 text-blue-500 fill-current" /> },
  // { name: "HTML", category: "Frontend", icon: <Html5Logo className="w-8 h-8 text-orange-600 fill-current" /> },
  { name: "CSS", category: "Frontend", icon: <CSSNew className="w-8 h-8 text-purple-600 fill-current" /> },
  { name: "JavaScript", category: "Frontend", icon: <JavaScript className="w-8 h-8 text-yellow-500 fill-current" /> },
  { name: "PHP", category: "Backend", icon: <PhpLight className="w-8 h-8 text-blue-600 fill-current" /> },
  { name: "Java", category: "Backend", icon: <Java className="w-8 h-8 text-red-600 fill-current" /> },
  { name: "MySQL", category: "Backend", icon: <MySQL className="w-8 h-8 text-sky-500 fill-current" /> },
  { name: "Tailwind", category: "Frontend", icon: <TailwindCSS className="w-8 h-8 text-sky-500 fill-current" /> },
  { name: "jQuery", category: "Frontend", icon: <SiJquery className="w-8 h-8 text-sky-700 fill-current" /> },
  { name: "Bootstrap", category: "Frontend", icon: <Bootstrap className="w-8 h-8 text-purple-500 fill-current" /> },
  { name: "Git", category: "Otros", icon: <Git className="w-8 h-8 text-orange-600 fill-current" /> },
  { name: "WordPress", category: "Otros", icon: <WordPress className="w-8 h-8 text-sky-600 fill-current" /> },
  { name: "WooCommerce", category: "Otros", icon: <SiWoo className="w-8 h-8 text-purple-600 fill-current" /> },
  // { name: "Estatik", category: "Otros", icon: <Svgl name="home" className="w-8 h-8 text-green-500 fill-current" /> },
  { name: "Android Studio", category: "Otros", icon: <Android className="w-8 h-8 text-green-600 fill-current" /> },
  { name: "Mediapipe", category: "Otros", icon: <SiMediapipe className="w-8 h-8 text-cyan-600 fill-current" /> },
  { name: "TypeScript", category: "Frontend", icon: <TypeScript className="w-8 h-8 text-blue-600 fill-current" /> },
  { name: "Docker", category: "Otros", icon: <Docker className="w-8 h-8 text-blue-500 fill-current" /> },
  { name: "Bun", category: "Otros", icon: <Bun className="w-8 h-8 text-orange-300 " /> },
];

const categories = ["Todas", "Frontend", "Backend", "Otros"];


const Skills = ({ onSelectTech, selectedTech }) => {
  // Estado local para la categoría de filtro en las skills
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  // Filtra las skills en función de la categoría seleccionada
  const filteredSkills =
    selectedCategory === "Todas"
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
