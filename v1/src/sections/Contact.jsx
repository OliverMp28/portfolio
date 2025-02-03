import { FaGithub, FaLinkedin } from "react-icons/fa";


const Contact = () => (
    <section id="contacto" className="py-12 bg-blue-600 scroll-reveal">
      <h2 className="text-3xl font-bold text-center text-white">Contacto</h2>
      <div className="mt-8 flex justify-center gap-6">
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-white hover:text-blue-200 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-white hover:text-blue-200 transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );

  export default Contact;