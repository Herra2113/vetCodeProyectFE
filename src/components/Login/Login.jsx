/* eslint-disable no-unused-vars */
import React from "react";
import "./styleLogin.css";
import { useForm } from "react-hook-form";
import {contraseña} from "../Login/validar"
import {usuario} from "../Login/validar"
const Login = () => {
  function insertar(data) {
    console.log(data);
    reset();
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  return (
    <div className="row" id="login">
      <div className="col-3 d-flex justify-content-center" id="inicioSesion">
        <form onSubmit={handleSubmit(insertar)} className="formcontrolinicio">
          <h2 className="text-center textoiniciosesion">Inicio Sesion</h2>
          <div className="contenedorDeInput container text-center">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              placeholder="UsuarioVet"
              className="form-control"
              {...register("usuario", {
                required: true,
                minLength: 5,
                maxLength: 5,
                validate:usuario
              })}
              
            />
            {errors.usuario?.type === "required" && (
          <p>Ingrese su Usuario. Por favor. </p>
        )}
          {errors.usuario && (
          <p> Usuario Incorrecto.</p>
        )}
        {errors.usuario?.type === "minLength" && (
          <p>Ingrese como minimo 5 caracteres. Por favor. </p>
        )}
        {errors.usuario?.type === "maxLength" && (
          <p>Ingresó el maximo de caracteres. </p>
        )}
          </div>
          <div className="contenedorDeInput container mt-2 text-center">
            <label htmlFor="contraseña">Contraseña</label>
            <input
              type="password"
              id="contraseña"
              placeholder="ConstraseñaVet"
              className="form-control"
              {...register("contraseña", {
                required: true,
                minLength: 5,
                maxLength: 5,
                validate:contraseña
              })}
              
            />
                {errors.contraseña?.type === "required" && (
          <p>Ingrese su Contraseña. Por favor. </p>
        )}
        {errors.contraseña && (
          <p>Contraseña Incorrecta. Prueba otra vez. </p>
        )}
        {errors.contraseña?.type === "minLength" && (
          <p>Ingrese como minimo 5 caracteres. Por favor. </p>
        )}
        {errors.contraseña?.type === "maxLength" && (
          <p>Ingresó el maximo de caracteres para una contraseña. </p>
        )}
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
