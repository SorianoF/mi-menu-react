import { useState } from "react";

function Multiplicar() {
  const [numero, setNumero] = useState("");
  const [tabla, setTabla] = useState([]);

  const generarTabla = () => {
    const n = parseInt(numero);
    if (isNaN(n)) return;
    const result = [];
    for (let i = 1; i <= 13; i++) {
      result.push(`${n} × ${i} = ${n * i}`);
    }
    setTabla(result);
  };

  return (
    <div className="page">
      <h2>Tabla de Multiplicar</h2>
      <input 
        type="number" 
        placeholder="Número base"
        value={numero} 
        onChange={(e) => setNumero(e.target.value)} 
      />
      <button onClick={generarTabla}>Generar</button>
      <ul>
        {tabla.map((linea, i) => (
          <li key={i}>{linea}</li>
        ))}
      </ul>
    </div>
  );
}

export default Multiplicar;