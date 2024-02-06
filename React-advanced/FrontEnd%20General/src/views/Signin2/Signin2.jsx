import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import bg1 from "../../styles/assets/img/bg1.jpg";
import logo from "../../styles/assets/img/logo.png";

export default function Signin2() {
  return (
    <div className="page-sign d-block py-0">
      <Row className="g-0">
        <Col md="7" lg="5" xl="4" className="col-wrapper">
          <Card className="card-sign">
            <Card.Header>
              <Link to="/" className="header-logo mb-5"><img src={logo} alt="Logo de Instacredit" /></Link>
              <Card.Title>Inicio de Sesión</Card.Title>
              Bienvenido! Por favor inicia sesion para continuar.
            </Card.Header>
            <Card.Body>
              <Form method="get" action="/dashboard/finance">
                <div className="mb-4">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="text" placeholder="Enter your email address" />
                </div>
                <div className="mb-4">
                  <Form.Label className="d-flex justify-content-between">
                    Contraseña
                  </Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" />
                </div>
                <Button type="submit" className="btn-sign">Iniciar Sesión</Button>

                <hr/>

                
              </Form>
            </Card.Body>
  
          </Card>
        </Col>
        <Col className="d-none d-lg-block">
          <img src={bg1} className="auth-img" alt="" />
        </Col>
      </Row>
    </div>
  )
}