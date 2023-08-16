import React from "react";
import "./styleFooter.css";
import logodepagina from '../../assets/Images/logodepagina.jpg'

const Footer = () => {
  return (
    <div className="container-fluid row" id="footer">
      <div className="col-sm-12 col-md-4 col-lg-3">
        <h3>Nosotros</h3>
        <ul>
          <li>
            <a href="">Quienes somos</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
          <li>
            <a href="">Productos</a>
          </li>
          <li>
            <a href="">Medicos</a>
          </li>
          <li>
            <a href="">Direccion</a>
          </li>
        </ul>
      </div>
      <div className="col-sm-12 col-md-4 col-lg-3">
        <h3>Ayuda</h3>
        <ul>
          <li>
            <a href="">¿Como comprar?</a>
          </li>
          <li>
            <a href="">Preguntas frecuentes</a>
          </li>
          <li>
            <a href="">Terminos y Condiciones</a>
          </li>
          <li>
            <a href="">Politicas de devolucion</a>
          </li>
          <li>
            <a href="">Planes Sociales</a>
          </li>
        </ul>
      </div>
      <div className="col-sm-12 col-md-4 col-lg-3">
        <img src={logodepagina} alt="logo de la pagina" />
      </div>
    </div>
  );
};

export default Footer;
