// Por ejemplo, en un archivo llamado scrollReveal.js o directamente en index.js
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");
    
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
  });
  