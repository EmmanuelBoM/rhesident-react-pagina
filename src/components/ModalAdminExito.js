import React from 'react';
import '../styles/base.css'
import '../styles/ModalMiembro.css'
import '../styles/ModalesAdmin.css'
import {Link} from 'react-router-dom'

function ModalAdminExito(props) {

    return (
      <div>
        <div className="modal-bg">
          <div className="cont-modal-admin">
            <div className="modal-admin-barra success"></div>
            <p className="texto-modal-admin">{`${props.recurso} ${props.nombreRecurso} ${props.accion}.`}</p>
            <p className="subt-modal-admin">{props.subt}</p>
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

export default ModalAdminExito;
