import { useState } from "react";

function Sumadora() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [resultado, setResultado] = useState(null);

  return (
    <div className="page">
      <h2>Sumadora</h2>
      <input 
        type="number" 
        placeholder="Primer número" 
        value={a} 
        onChange={(e) => setA(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Segundo número" 
        value={b} 
        onChange={(e) => setB(e.target.value)} 
      />
      <button onClick={() => setResultado(Number(a) + Number(b))}>
        Calcular
      </button>
      {resultado !== null && <p><strong>Resultado:</strong> {resultado}</p>}
    </div>
  );
}

export default Sumadora;
