import React from "react";
import "./styleFooter.css";
import logodepagina from "../../assets/Images/logoicono.png";

const Footer = () => {
  return (
    <div className="row container-fluid" id="footer">
      <div className="col-sm-12 col-md-4 col-lg-3 text-center">
        <ul>
          <h3 className="mt-5 text-dark">Nosotros</h3>
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
      <div className="col-sm-12 col-md-4 col-lg-3 text-center">
        <ul>
          <h3 className="mt-5">Ayuda</h3>
          <li>
            <a href="">¿Cómo comprar?</a>
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
      <div className="col-sm-12 col-md-4 col-lg-4 text-center">
        <a href="" className="iconoA">
          <img
            src={logodepagina}
            alt="logo de la pagina"
            id="imagenlogodefooter"
          />
        </a>
      </div>
      <div className="copyrightFooter">
        <h6 className="copyrightFooterText">©2023-VetCode todos los derechos reservados.</h6>
        <div className="iconosFooter">
          <a href="">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="">
            <i class="bi bi-whatsapp"></i>
          </a>
          <a href="">
            <i class="bi bi-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
