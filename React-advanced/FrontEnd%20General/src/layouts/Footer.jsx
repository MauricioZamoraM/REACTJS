import React from "react";
import "../styles/scss/panels/_footer.scss";
import logo from "../styles/assets/img/logo.png";
import costarica from "../styles/assets/img/cr-flag2.png";
import nicaragua from "../styles/assets/img/ni-flag2.png";
import salvador from "../styles/assets/img/bandera-salvador.png";
import panama from "../styles/assets/img/pa-flag2.png";

export default function Footer() {
  return (
    
    <div className="footer align-items-stretch">
      <hr/>
      <div className=" d-flex flex-column justify-content-center align-items-center">
        <img className="footer_logo" src={logo} alt="Logo de Instacredit" />
        <h5 className="footer_texto">Somos una financiera con presencia en 4 países y que aspira a seguir brindándole soluciones a más países de la región.</h5>
      </div>
      <div className="img-fluid footer_banderas">
        <img src={ costarica } alt="Bandera de Costa Rica" />
        <img src={ nicaragua } alt="Bandera de Nicaragua" />
        <img src={ panama } alt="Bandera de Panama" />
        <img src={ salvador } alt="Bandera de El Salvador" />
      </div>
  </div>

  )
}