const Projects = () => (
    <section id="projects" className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900">Proyectos</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {/* Ejemplo de tarjeta */}
        <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/images/project1.jpg"
            alt="Proyecto 1"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">Proyecto 1</h3>
          <p className="mt-2 text-gray-600">Descripción breve del proyecto.</p>
          <div className="mt-4 flex gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded">React</span>
            <span className="px-2 py-1 bg-green-100 text-green-600 rounded">Tailwind</span>
          </div>
        </div>
      </div>
    </section>
  );

  export default Projects;