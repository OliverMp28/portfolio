import { useState } from "react"
import { FaGithub, FaExpandAlt, FaCompressAlt, FaGlobe, FaExternalLinkAlt } from "react-icons/fa"

const projectsData = [
  {
    id: 1,
    title: "Stellargia",
    description: "App android sobre el espacio.",
    fullDescription:
      "Esta es una app echa en android studio, fue una app basica a fin de aprender y probar el entorno multiplataforma, esta app esta enfocada a mostrar datos curiosos de planetas y constelaciones. ",
    image: "/img/Stellargia.jpg",
    technologies: ["Android Studio"],
    links: [
      { type: "drive", url: "https://drive.google.com/file/d/1g98UHf-8d10PhX9Q9FE6trH8AA9SDMLL/view?usp=drive_link" },
    ],
    
  },
  {
    id: 2,
    title: "Web tienda de perfumes",
    description: "Tienda basica para venta de perfumes.",
    fullDescription:
      "Esta web fue echa para un vendedor de perfumes arabes echo en wordpress",
    image: "/img/webperfumes.png",
    technologies: ["WordPress"],
    links: [
      { type: "web", url: "https://esenciadeoriente.com/" },
      // { type: "github", url: "https://github.com/OliverMp28/proyecto_vision" },
    ],
  },
  {
    id: 3,
    title: "Daino",
    description: "Juego del dinosaurio",
    fullDescription:
      "Este es el juego del dinosaurio de google adaptado a web con html, css, js y php. Fue el primer proyecto que hice por gusto propio y por curiosidad de aprender, desarrollado en mis inicios",
    image: "/img/daino2.png",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git"],
    links: [
      { type: "github", url: "https://github.com/OliverMp28/olivermppr" },
    ],
  },
  {
    id: 4,
    title: "Tout play cam detection",
    description: "web de minijuegos con deteccion de gestios por camara.",
    fullDescription:
      "Basada en la libreria mediapipe, esta web fue echa a fin de probar el potencial de la deteccion por camara, adaptandola a mover ciertos personajes o controles con los gestos de rostro",
    image: "/img/tout3.png",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "PHP", "Mediapipe", "MySQL", "Git"],
    links: [
      // { type: "web", url: "https://proyecto3.com" },
      { type: "github", url: "https://github.com/OliverMp28/proyecto_vision" },
    ],
  },
  // Agrega más proyectos según necesites
]

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false)

  const getLinkIcon = (type) => {
    switch (type) {
      case "github":
        return <FaGithub />
      case "web":
        return <FaGlobe />
      default:
        return <FaExternalLinkAlt />
    }
  }

  const getLinkText = (type) => {
    switch (type) {
      case "github":
        return "Repositorio"
      case "web":
        return "Sitio Web"
      case "drive":
        return "Google Drive"
      default:
        return "Enlace"
    }
  }

  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={`Proyecto ${project.id}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{project.title}</h3>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {expanded ? project.fullDescription : project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            {expanded ? (
              <>
                <FaCompressAlt /> Ver menos
              </>
            ) : (
              <>
                <FaExpandAlt /> Ver más
              </>
            )}
          </button>
          <div className="flex gap-4">
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
              >
                {getLinkIcon(link.type)} {getLinkText(link.type)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = ({ selectedTech }) => {
  const filteredProjects = selectedTech
    ? projectsData.filter((project) => project.technologies.includes(selectedTech))
    : projectsData

  return (
    <section id="proyectos" className="py-16 bg-gray-50 dark:bg-gray-900 scroll-reveal">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
