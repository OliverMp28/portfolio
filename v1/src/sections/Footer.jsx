const Footer = () => {
    return (
      <footer className="py-8 bg-gray-100 dark:bg-gray-800 scroll-reveal">
        <div className="container mx-auto px-4 text-center">
          {/* <div className="mb-4">
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-1 animate-bounce"></span>
            <span
              className="inline-block w-3 h-3 bg-indigo-500 rounded-full mr-1 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></span>
            <span
              className="inline-block w-3 h-3 bg-purple-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></span>
          </div> */}
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Oliver Llauca Galvez | Desarrollador Web Creativo
          </p>
        </div>
      </footer>
    )
  }
  
  export default Footer
