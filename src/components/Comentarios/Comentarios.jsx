import { Card } from "react-bootstrap";
import './styleComentario.css'

const Comentarios = () => {
    return (
      <div className="comentariodiv">
        <Card className="cardcomentario">
        <img id="imageniconocoment" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VGNrcGcxKCGuhwj92bYotw6TScyNSCHqH1JyNChDoZlFihM-eOyJNzg24tGIgBKCWz4&usqp=CAU" alt="" />
      <Card.Body>
        <div className="cardcomentario2 mb-1">
        <Card.Title className="text-center mb-1">Diego Olmi</Card.Title>
        <Card.Subtitle className="text-muted text-center nombrecomentarios">@DiegoOlmi912 | 04/09</Card.Subtitle>
        </div>
        <i class="bi bi-star-fill"></i>
        <Card.Text>
        Muy buena la atencion, excelente trato de los medicos profesionales y muy linda pagina!
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    )
  }
  
  export default Comentarios;
