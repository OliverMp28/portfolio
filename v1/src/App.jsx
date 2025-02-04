// App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Studies from "./sections/Studies";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import TemaToogle from "./components/temaToogle";

function App() {
  const [selectedTech, setSelectedTech] = useState("");

  // Efecto para el scroll reveal
  useEffect(() => {
    const revealElements = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    revealElements.forEach((el) => observer.observe(el));

    // Limpieza del observer
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth dark:bg-gray-900" id="inicio">
      <Navbar />
      <Hero />
      <AboutMe />
      <Studies />
      <Skills 
        onSelectTech={(tech) => setSelectedTech(tech)} 
        selectedTech={selectedTech}
      />
      <Projects selectedTech={selectedTech} />
      <Contact />
      <Footer />


      <div className="fixed bottom-5 right-5 flex flex-col space-y-4">
        <TemaToogle />
      </div>
    </div>
  );
}

export default App;
