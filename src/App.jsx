import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sumadora from "./pages/Sumadora";
import Traductor from "./pages/Traductor";
import Multiplicar from "./pages/Multiplicar";
import Experiencia from "./pages/Experiencia";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sumadora" element={<Sumadora />} />
          <Route path="/traductor" element={<Traductor />} />
          <Route path="/multiplicar" element={<Multiplicar />} />
          <Route path="/experiencia" element={<Experiencia />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;