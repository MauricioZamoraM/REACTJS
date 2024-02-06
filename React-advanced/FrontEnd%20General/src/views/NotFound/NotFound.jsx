import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import pageSvg from "../../styles/assets/svg/server_down.svg"
import logo from "../../styles/assets/img/logo.png"

export default function NotFound() {
  
  document.body.classList.remove("sidebar-show");

  return (
    <div className="page-error">
      <div className="header">
        <Container>
          <Link to="/"><img src={logo} alt="Logo de Instacredit" /></Link>
          <Nav className="nav-icon">
            <Nav.Link href=""><i className="ri-twitter-fill"></i></Nav.Link>
            <Nav.Link href=""><i className="ri-github-fill"></i></Nav.Link>
            <Nav.Link href=""><i className="ri-dribbble-line"></i></Nav.Link>
          </Nav>
        </Container>
      </div>

      <div className="content">
        <Container>
          <Row className="gx-5">
            <Col lg="5" className="d-flex flex-column align-items-center">
              <h1>Error encontrado</h1>
              <h2 className="error-title">Página no encontrada, Error interno del Servidor, Servicio no disponible, Acceso no autorizado</h2>
              <p>Oopps. Espacio para explicar error encontrado en caso necesario.</p>
              <Link to="/" className="btn btn-primary btn-error">Regresar</Link>
            </Col>
            <Col xs="8" lg="6" className="mb-5 mb-lg-0">
              <object type="image/svg+xml" data={pageSvg} className="w-100" aria-label="svg image"></object>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}