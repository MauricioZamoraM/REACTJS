import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../styles/assets/img/logo.png";

export default function Signin() {
  return (
    <div className="page-sign">
      <Card className="card-sign">
        <Card.Header>
        <Link to="/" className="header-logo mb-5"><img src={logo} alt="Logo de Instacredit" /></Link>
          <Card.Title>Inicio de Sesión</Card.Title>
          Bienvenido! Por favor inicia sesion para continuar.
        </Card.Header>
        <Card.Body>
          <Form method="get" action="/dashboard/finance">
            <div className="mb-4">
              <Form.Label >Correo electrónico</Form.Label>
              <Form.Control type="text" placeholder="Enter your email address" />
            </div>
            <div className="mb-4">
              <Form.Label className="d-flex justify-content-between">Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </div>
            <Button type="submit" variant="primary" className="btn-sign">Iniciar Sesión</Button>

            <hr/>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}