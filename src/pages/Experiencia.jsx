function Experiencia() {
  return (
    <div className="page">
      <h2>Mi Experiencia</h2>
      <p>Este es el video donde explico mi experiencia realizando la tarea:</p>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/gy1Dvr85IMs"
        title="YouTube video"
        frameBorder="0" 
        allowFullScreen
        style={{ borderRadius: "12px", marginTop: "15px" }}
      ></iframe>
    </div>
  );
}

export default Experiencia;
