// Skills.jsx
import { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaPython } from "react-icons/fa";

const skillsData = [
  { name: "React", category: "Frontend", icon: <FaReact className="text-4xl text-blue-600" /> },
  { name: "HTML", category: "Frontend", icon: <FaHtml5 className="text-4xl text-orange-600" /> },
  { name: "CSS", category: "Frontend", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
  { name: "JavaScript", category: "Frontend", icon: <FaJsSquare className="text-4xl text-yellow-500" /> },
  { name: "Node.js", category: "Backend", icon: <FaNode className="text-4xl text-green-600" /> },
  { name: "Python", category: "Backend", icon: <FaPython className="text-4xl text-blue-400" /> },
  // Puedes agregar más skills según necesites
];

const categories = ["All", "Frontend", "Backend"];

const Skills = ({ onSelectTech, selectedTech }) => {
  // Estado local para la categoría de filtro en las skills
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtra las skills en función de la categoría seleccionada
  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="habilidades" className="py-12 bg-gray-50 dark:bg-gray-900 scroll-reveal">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-200">Habilidades</h2>

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
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 ${
              selectedTech === skill.name ? "ring-2 ring-indigo-500 rounded bg-gray-50 dark:bg-indigo-900" : ""
            }`}
            // Al hacer click, si ya está seleccionado, lo deselecciona (vuelve a mostrar todos)
            onClick={() =>{
                onSelectTech(selectedTech === skill.name ? "" : skill.name)
                document.getElementById('habilidades').scrollIntoView({ behavior: 'smooth' })
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

export default Skills;


