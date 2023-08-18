import React from "react";
import "./styleLogin.css";

const Login = () => {
  return (
    <div className="row" id="login">
      <div className="col-3 d-flex justify-content-center" id="inicioSesion">
        <form action="">
          <h2 className="text-center">Inicie sesion</h2>
          <div className="contenedorDeInput container">
            <label htmlFor="usuario">Usuario</label>
            <input type="text" id="usuario" placeholder="UsuarioVet" className="form-control"/>
          </div>
          <div className="contenedorDeInput container mt-2">
            <label htmlFor="contraseña">Contraseña</label>
            <input type="password" id="contraseña" placeholder="ConstraseñaVet" className="form-control"/>
          </div>
          <button type="submit" className="mx-5 mt-3 btn btn-outline-primary" id="botonInicioSesion">Acceder</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
