// Projects.jsx
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "Descripción breve del proyecto.",
    fullDescription:
      "Esta es una descripción extendida del Proyecto 1, donde se explica en detalle la funcionalidad, tecnologías utilizadas y el proceso de desarrollo.",
    image: "/images/project1.jpg",
    technologies: ["React", "Tailwind"],
    link: "https://github.com/tuusuario/proyecto1",
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Otro proyecto que usa HTML, CSS y JavaScript.",
    fullDescription:
      "En este proyecto se implementa una interfaz web usando HTML, CSS y JavaScript, con un enfoque en la usabilidad y un diseño responsivo.",
    image: "/images/project2.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/tuusuario/proyecto2",
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Proyecto backend hecho con Node.js y Python.",
    fullDescription:
      "Proyecto 3 es un servicio backend desarrollado en Node.js y Python, que incluye API REST y procesamiento de datos en tiempo real.",
    image: "/images/project3.jpg",
    technologies: ["Node.js", "Python"],
    link: "https://github.com/tuusuario/proyecto3",
  },
  // Agrega más proyectos según necesites
];

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <img
        src={project.image}
        alt={`Proyecto ${project.id}`}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="flex flex-col flex-grow mt-4">
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        <p className="mt-2 text-gray-600">
          {expanded ? project.fullDescription : project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t flex items-center justify-between">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-indigo-600 hover:underline focus:outline-none"
          >
            {expanded ? "Ver menos" : "Ver más"}
          </button>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline text-sm"
            >
              Ver Repositorio
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = ({ selectedTech }) => {
  // Si no hay filtro (selectedTech vacío), muestra todos; de lo contrario, filtra
  const filteredProjects = selectedTech
    ? projectsData.filter((project) =>
        project.technologies.includes(selectedTech)
      )
    : projectsData;

  return (
    <section id="projects" className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900">Proyectos</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
