import React from "react";
import Cards from "react-bootstrap/Card";
import Enfermero from "../../assets/Images/Enfermero.png";
import Cirujano from "../../assets/Images/Cirujano.png";
import Graduado from "../../assets/Images/Graduado.png";
import { Link } from "react-router-dom";
import "./WorkWithUs.css";
const WorkWithUs = () => {
  return (
    <div className="containerWorkWithUs d-flex justify-content-center h-100">
      <div className="row">
        <h2 className="display-4 text-center">
          Desarrolle su carrera con nosotros en VetCode
        </h2>
        <div className="cardsOportunidades col-md-4 text-center">
          <Cards.Img className="cardImg" src={Cirujano} alt="Cirujano" fluid />
          <Cards.Body className="cardsBody">
            <Cards.Title>Oportunidades de cirujano veterinario</Cards.Title>
            <Cards.Text>
              Nuestro objetivo es ayudarlo a encontrar el rol y la práctica que
              mejor se adapte a usted... un lugar que simplemente se sienta
              bien, donde pueda prosperar y continuar desarrollando su carrera.
            </Cards.Text>
            
            <Link to="/Contacto" className= "btn btn-dark rounded-0">Mas Info!</Link>
              
            
          </Cards.Body>
        </div>
        <div className="cardsOportunidades col-md-4 text-center">
          <Cards.Img
            className="cardImg"
            src={Enfermero}
            alt="Enfermero"
            fluid
          />
          <Cards.Body className="cardsBody">
            <Cards.Title>Oportunidades de enfermero veterinario</Cards.Title>
            <Cards.Text>
              Conocemos la enorme contribución que hacen las enfermeras
              veterinarias el bienestar de los animales. Estamos comprometidos a
              reconocer estas contribuciones y a brindarles a nuestros colegas
              de enfermería oportunidades de aprendizaje específicas.
            </Cards.Text>
            <Link to="/Contacto" className= "btn btn-dark rounded-0">Mas Info!</Link>
          </Cards.Body>
        </div>
        <div className="cardsOportunidades col-md-4 text-center">
          <Cards.Img className="cardImg" src={Graduado} alt="Graduado" fluid />
          <Cards.Body className="cardsBody">
            <Cards.Title>Programa de Desarrollo de Graduados</Cards.Title>
            <Cards.Text>
              Nuestro galardonado Programa de Graduados está diseñado para
              ayudarlo a desarrollar su potencial y brindarle el mejor comienzo
              posible en todos los sentidos.
            </Cards.Text>
            <Link to="/Contacto" className= "btn btn-dark rounded-0">Mas Info!</Link>
          </Cards.Body>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
