import { useState } from "react";

const Formulario = () => {
  //Estados del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const [error, setError] = useState("");
  const [verificacion, setVerificacion] = useState("");

  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleAlert = (message, type) => {
    setAlertMessage(message);
    setAlertType(type);
  };

  const handleRegister = (message, type) => {
    setAlertMessage(message);
    setAlertType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@") || contraseña !== confirmarContraseña) {
      // Mostrar error
      handleRegister("Error: Verifica tus datos.", "danger");
      setError(true);
      setVerificacion(false);
      return;
    }
    // Procesar registro
    // Aquí podrías enviar los datos a un servidor, etc.
    handleRegister("¡Registro exitoso!", "success");
    setError(false);
    setVerificacion(true)
    // Limpiar campos
    setNombre("");
    setEmail("");
    setContraseña("");
    setConfirmarContraseña("");
  };

  return (
    <>
      <form className="formulario" onSubmit={handleSubmit}>
        {error ? <p className="error">Error: Verifica tus datos.</p> : null}

        {verificacion ? <p className="verificacion">Registro exitoso!!!</p> : null}        

        <div className="form-group mt-3">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="text"
            name="contraseña"
            className="form-control"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
        </div>
        <div className="form-group">
          <label>Confirmar Contraseña</label>
          <input
            type="text"
            name="confirmar contraseña"
            className="form-control"
            onChange={(e) => setConfirmarContraseña(e.target.value)}
            value={confirmarContraseña}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Enviar
        </button>
      </form>
    </>
  );
};
export default Formulario;
