import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaCopy, FaCheck } from "react-icons/fa"
import { useState } from "react"

const contactLinks = [
  { icon: FaGithub, 
    url: "https://github.com/OliverMp28", 
    label: "GitHub",
    description: "Repositorios y proyectos"
  },
  { icon: FaLinkedin, 
    url: "https://www.linkedin.com/in/oliver-l-233417295/", 
    label: "LinkedIn",
    description: "perfil profesional"
  },
  {
    icon: FaEnvelope,
    email: "olivermppr@gmail.com",
    label: "Email",
    description: "Clic para copiar"
  },
  // { icon: FaTwitter, url: "https://twitter.com/tusuario", label: "Twitter" },
]

const Contact = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2500); // Reset after 2.5 seconds
    });
  };

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 scroll-reveal"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-900/30 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="grid md:grid-cols-2 gap-0">
            {/* la parte izquierda */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Contacto</h2>
              <p className="text-gray-600 dark:text-blue-200 mb-8 text-lg">Estos son mis canales de contacto</p>
              <div className="flex flex-wrap gap-3 mt-auto">
                {contactLinks.map((link, index) => {
                  const isEmail = link.label === "Email";
                  const Element = isEmail ? 'div' : 'a';
                  const props = {
                    onMouseEnter: () => setActiveLink(index),
                    onMouseLeave: () => setActiveLink(null),
                    'aria-label': link.label,
                    className: "inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-800/80 text-gray-800 dark:text-white transition-all duration-300",
                  };
                  if (isEmail) {
                    props.onClick = () => handleCopyEmail(link.email);
                    props.className += " cursor-pointer";
                  } else {
                    props.href = link.url;
                    props.target = "_blank";
                    props.rel = "noopener noreferrer";
                  }
                  return (
                    <Element key={link.label} {...props}>
                      <link.icon className="text-xl" />
                    </Element>
                  );
                })}
              </div>
            </div>

            {/* la parte derecha */}
            <div className="bg-white/10 dark:bg-gray-800/20 p-8 md:p-12">
              <div className="space-y-6">
                {contactLinks.map((link, index) => {
                  const isEmail = link.label === "Email";
                  const Element = isEmail ? 'div' : 'a';
                  const props = {
                    onMouseEnter: () => setActiveLink(index),
                    onMouseLeave: () => setActiveLink(null),
                    className: `block p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20 dark:hover:border-gray-200/10 ${
                      activeLink === index
                        ? "bg-gray-300 dark:bg-gray-200/30"
                        : "bg-gray-200/60 hover:bg-gray-100/10 dark:bg-gray-200/10 dark:hover:bg-gray-200/10"
                    }`,
                  };
                  if (isEmail) {
                    props.onClick = () => handleCopyEmail(link.email);
                    props.className += " cursor-pointer";
                  } else {
                    props.href = link.url;
                    props.target = "_blank";
                    props.rel = "noopener noreferrer";
                  }
                  return (
                    <Element key={link.label} {...props}>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/90 dark:bg-indigo-600 text-white">
                          <link.icon className="text-lg" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-gray-800 dark:text-white font-medium">{link.label}</h3>
                          <p className="text-gray-600 dark:text-blue-200 text-sm mt-1">
                            {isEmail && copied ? "¡Correo copiado!" : link.description}
                          </p>
                        </div>
                        <div className="ml-auto pl-2">
                          {isEmail ? (
                            copied ? (
                              <FaCheck className="h-5 w-5 text-green-500" />
                            ) : (
                              <FaCopy className={`h-5 w-5 text-gray-800 dark:text-white transition-opacity duration-300 ${activeLink === index ? "opacity-100" : "opacity-0"}`} />
                            )
                          ) : (
                            <FaArrowRight className={`h-5 w-5 text-gray-800 dark:text-white transition-opacity duration-300 ${activeLink === index ? "opacity-100" : "opacity-0"}`} />
                          )}
                        </div>
                      </div>
                    </Element>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact