const Hero = () => (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <img
        src="/images/avatar.jpg"
        alt="Tu avatar"
        className="w-32 h-32 rounded-full mb-6"
      />
      <h1 className="text-5xl font-bold text-gray-900">Tu Nombre</h1>
      <p className="mt-4 text-xl text-gray-600">Desarrollador Frontend</p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Ver proyectos
      </a>
    </section>
  );
  
  export default Hero;