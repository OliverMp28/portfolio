import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa"

const contactLinks = [
  { icon: FaGithub, url: "https://github.com/tuusuario", label: "GitHub" },
  { icon: FaLinkedin, url: "https://linkedin.com/in/tuusuario", label: "LinkedIn" },
  { icon: FaEnvelope, url: "mailto:tu@email.com", label: "Email" },
  { icon: FaTwitter, url: "https://twitter.com/tuusuario", label: "Twitter" },
]

const Contact = () => (
  <section
    id="contacto"
    className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-800 dark:to-indigo-900 scroll-reveal"
  >
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Conectemos</h2>
      <div className="flex justify-center items-center">
        <div className="relative w-72 h-72 bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <span className="text-7xl text-blue-500 dark:text-blue-300">:)</span>
            </div>
          </div>
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute w-14 h-14 bg-blue-500 dark:bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              style={{
                top: index === 0 ? "10%" : index === 1 ? "90%" : index === 2 ? "50%" : "50%",
                left: index === 0 ? "50%" : index === 1 ? "50%" : index === 2 ? "10%" : "90%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <link.icon className="text-2xl" />
              <span className="sr-only">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Contact