import React from "react";
import "./styleLogin.css";

const Login = () => {
  return (
    <div className="container-fluid row" id="login">
      <div className="col-3 d-flex justify-content-center" id="inicioSesion">
        <form action="">
          <h2 className="text-center mt-4">Inicie sesion</h2>
          <div className="contenedorDeInput">
            <label htmlFor="usuario">Usuario</label>
            <input type="text" id="usuario" placeholder="UsuarioVet"/>
          </div>
          <div className="contenedorDeInput">
            <label htmlFor="contraseña">Contraseña</label>
            <input type="password" id="contraseña" placeholder="ConstraseñaVet"/>
          </div>
          <button type="submit" className="mx-5 mt-3 btn btn-primary" id="botonInicioSesion">Acceder</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
