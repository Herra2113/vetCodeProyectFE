import React from "react";
import { Card } from "react-bootstrap";
import Avatar from "../../assets/Images/gatitoPErfil.jpg";
const Cards = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <Card className="bg-dark text-white m-1">
            <Card.Img src={Avatar} alt="Avatar" fluid />

            <Card.Text>PAZ, FRANCO.</Card.Text>
						<Card.Text>ESPECIALISTA ONCOLOGICO.</Card.Text>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="bg-dark text-white m-1">
            <Card.Img src={Avatar} alt="Avatar" fluid />
            <Card.Text>
              SALVATIERRA BARRAZA, VALENTINA. 
							</Card.Text>
							<Card.Text>
							ESPECIALISTA EN TRAUMATOLOGIA.
            	</Card.Text>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="bg-dark text-white m-1">
            <Card.Img src={Avatar} alt="Avatar" fluid />

            <Card.Text>
              CESCA FIGUEROA, VALENTINA.
							</Card.Text>
							<Card.Text>
							ESPECIALISTA DERMATOLOGICO.
            	</Card.Text>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="bg-dark text-white m-1">
            <Card.Img src={Avatar} alt="Avatar" fluid />

            <Card.Text>GONZALO.</Card.Text>
						<Card.Text>ESPECIALISTA EN ANIMALES EXOTICOS.</Card.Text>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="bg-dark text-white m-1">
            <Card.Img src={Avatar} alt="Avatar" fluid />

						<Card.Text>
							SALVATIERRA BARRAZA, VALENTINA. 
							</Card.Text>
							<Card.Text>
							ESPECIALISTA EN TRAUMATOLOGIA.
            	</Card.Text>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="bg-dark text-white m-1">
            <Card.Img src={Avatar} alt="Avatar" fluid />
						<Card.Text>
							SALVATIERRA BARRAZA, VALENTINA. 
							</Card.Text>
							<Card.Text>
							ESPECIALISTA EN TRAUMATOLOGIA.
            	</Card.Text>
          </Card>
        </div>
        |
      </div>
    </div>
  );
};

export default Cards;
