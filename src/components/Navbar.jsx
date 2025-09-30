import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="flex space-x-6 text-white font-semibold">
        <Link to="/" className="hover:text-yellow-300">Inicio</Link>
        <Link to="/sumadora" className="hover:text-yellow-300">Sumadora</Link>
        <Link to="/traductor" className="hover:text-yellow-300">Traductor</Link>
        <Link to="/multiplicar" className="hover:text-yellow-300">Multiplicar</Link>
        <Link to="/experiencia" className="hover:text-yellow-300">Experiencia</Link>
      </div>
    </nav>
  );
}

export default Navbar;