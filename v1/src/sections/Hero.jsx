const Hero = () => (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="relative inline-block">
          <img 
            src="/images/avatar.jpg" 
            className="w-48 h-48 rounded-full border-4 border-white shadow-xl hover:scale-105 transition-transform"
          />
          <div className="absolute inset-0 rounded-full border-4 border-transparent animate-spin-slow" 
              style={{borderTopColor: '#6366f1'}}></div>
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Tu Nombre
        </h1>
        <p className="text-xl text-gray-600">Desarrollador Full Stack</p>
      </div>
    </section>
  );
  
  export default Hero;