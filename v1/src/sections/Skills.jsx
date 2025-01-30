import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";

const Skills = () => (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-900">Habilidades</h2>
      <div className="mt-8 grid grid-cols-4 md:grid-cols-6 gap-6 px-6">
        <div className="flex flex-col items-center">
          <FaReact className="text-4xl text-blue-600" />
          <p className="mt-2 text-sm text-gray-600">React</p>
        </div>
        {/* Más iconos aquí */}
      </div>
    </section>
  );

  export default Skills;