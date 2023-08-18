import React from "react";
import "./styleLogin.css";

const Login = () => {
  return (
    <div className="row" id="login">
      <div className="col-3 d-flex justify-content-center" id="inicioSesion">
        <form action="" className="formcontrolinicio">
          <h2 className="text-center textoiniciosesion">Inicio Sesion</h2>
          <div className="contenedorDeInput container text-center">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              placeholder="UsuarioVet"
              className="form-control"
              maxLength={5}
              minLength={5}
            />
          </div>
          <div className="contenedorDeInput container mt-2 text-center">
            <label htmlFor="contraseña">Contraseña</label>
            <input
              type="password"
              id="contraseña"
              placeholder="ConstraseñaVet"
              className="form-control"
              maxLength={5}
              minLength={5}
            />
          </div>
          <button
            type="submit"
            className="mt-3 mb-3 btn btn-outline-primary botondelinicio"
            id="botonInicioSesion"
          >
            Acceder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
