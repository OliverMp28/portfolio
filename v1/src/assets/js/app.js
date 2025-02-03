// Por ejemplo, en un archivo llamado scrollReveal.js o directamente en index.js
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal");
            observer.unobserve(entry.target); // Deja de observar una vez revelado
          }
        });
      },
      { threshold: 0.3 } // Ajusta el umbral según tus necesidades
    );
    
    revealElements.forEach((el) => observer.observe(el));
  });
  