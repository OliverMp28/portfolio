// App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const [selectedTech, setSelectedTech] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Obtén la posición del scroll vertical
      const scrollY = window.scrollY;
      // Ajusta la opacidad: cuando el scroll es 0, opacidad 1; a medida que se hace scroll, opacidad baja hasta 0
      const newOpacity = Math.max(0, 2 - scrollY / 400);
      setFadeOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      {/* Pasamos la función y el estado a Skills */}
      <Skills 
        onSelectTech={(tech) => setSelectedTech(tech)} 
        selectedTech={selectedTech}
      />
      {/* En Projects se filtra según selectedTech */}
      <Projects selectedTech={selectedTech} />
      <Contact />

      <div
        style={{ opacity: fadeOpacity }}
        className="pointer-events-none fixed bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50  transition-opacity duration-300"
      />
    </div>
  );
}

export default App;
