import { Card, Image } from "react-bootstrap";
import prof1 from "../../assets/Images/vet-code profesional.jpg";
import prof2 from "../../assets/Images/vet-code profesional-2.jpg";

import "./profesionales.css";

const Profesionales = () => {
  return (
    <div className=" container-fluid p-3 bodyBg ">
      <div className="d-flex p-5 justify-content-center">
        <h1>NUESTROS PROFESIONALES</h1>
      </div>
      <div className="row justify-content-center">
        <Card className="col-12 col-md-4 m-3 bodyBgprof">
          <Image variant="top" roundedCircle height="500"  className="p-2" src={prof1} />
          <Card.Body>
            <Card.Title>Dra. Juana Carrasco</Card.Title>
            <Card.Text>
              cuenta con mas de 7 años de experiencia en el area de  Oncologia.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-12 col-md-4 m-3 bodyBgprof ">
          <Image variant="top" height="500" roundedCircle className="p-2 " src={prof2} />
          <Card.Body>
            <Card.Title>Dr. John Dolittle</Card.Title>
            <Card.Text>
              cuenta con mas de 4 años de experiencia en el area de cirugia cardiaca.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Profesionales;
