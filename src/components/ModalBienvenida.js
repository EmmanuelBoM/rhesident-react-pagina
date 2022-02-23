import React from "react";
import "../styles/base.css";
import "../styles/ModalMiembro.css";
import "../styles/ModalesAdmin.css";
import { Link } from "react-router-dom";

function ModalBienvenida(props) {
  return (
    <div>
      <div className="modal-bg">
        <div className="cont-modal-admin">
          <div className="modal-admin-barra rhesident"></div>
          <p className="texto-modal-admin"> ¡Bienvenido, Administrador!</p>
          <p className="subt-modal-admin">Inicio de sesión correcto.</p>
          <div className="btns-modal-exito">
            <Link to={props.rutaContinuar}>
              <button className="btn-modal-admin-confirmar">Continuar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalBienvenida;
