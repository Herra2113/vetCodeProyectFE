import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Forms = () =>{
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su Nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su Apellido" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Como podemos Ayudarte?</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

     
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
      <Form.Text className="text-muted">
        No compartiremos su identidad con nadie.
      </Form.Text>
    </Form>
  );
}

export default Forms;
