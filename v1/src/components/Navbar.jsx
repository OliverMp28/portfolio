const Navbar = () => (
    <nav className="fixed top-0 w-full backdrop-blur-lg bg-white/30 z-50 shadow-sm">
    <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <a href="#" className="text-2xl font-bold text-indigo-600">TuNombre</a>
        <div className="flex gap-6">
        {['#inicio', '#proyectos', '#habilidades', '#contacto'].map((link) => (
            <a key={link} href={link} className="hover:text-indigo-600 transition-colors">
            {link.replace('#', '')}
            </a>
        ))}
        </div>
    </div>
    </nav>
);



export default Navbar;