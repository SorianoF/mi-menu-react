import { useState } from "react";

function Traductor() {
  const [numero, setNumero] = useState("");
  const [texto, setTexto] = useState("");

  const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
  const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
  const centenas = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

  const convertir = (n) => {
    if (n === 0) return "cero";
    if (n === 1000) return "mil";
    let resultado = "";
    let c = Math.floor(n / 100);
    let d = Math.floor((n % 100) / 10);
    let u = n % 10;
    if (c > 0) resultado += centenas[c] + " ";
    if (d > 0) resultado += decenas[d] + " ";
    if (u > 0) resultado += unidades[u];
    return resultado.trim();
  };

  const handleTraducir = () => {
    const n = parseInt(numero);
    if (isNaN(n) || n < 1 || n > 1000) {
      setTexto("Número fuera de rango (1-1000)");
    } else {
      setTexto(convertir(n));
    }
  };

  return (
    <div className="page">
      <h2>Traductor de Números a Letras</h2>
      <input 
        type="number" 
        placeholder="Número del 1 al 1000"
        value={numero} 
        onChange={(e) => setNumero(e.target.value)} 
      />
      <button onClick={handleTraducir}>Traducir</button>
      {texto && <p><strong>Resultado:</strong> {texto}</p>}
    </div>
  );
}

export default Traductor;