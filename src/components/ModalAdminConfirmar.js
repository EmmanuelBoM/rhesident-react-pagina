import React from 'react';
import '../styles/base.css'
import '../styles/ModalMiembro.css'
import '../styles/ModalesAdmin.css'

function ModalAdminConfirmar(props) {

    function hideModal(){
        props.setModalVisibility(false);
    }

    return (
      <div>
        <div className="modal-bg">
          <div className="cont-modal-admin">
            <div className="modal-admin-barra warning"></div>
            <p className="texto-modal-admin">{`¿Estás segur@ que deseas ${props.accion} ${props.recurso} ${props.nombreRecurso}?`}</p>
            <p className="subt-modal-admin">
              Revisa toda la información antes de continuar.
            </p>
            <div className="btns-modal-admin">
              <button
                className="btn-modal-admin-confirmar"
                onClick={props.runFunction}
              >
                Confirmar
              </button>
              <button className="btn-modal-admin-cancelar" onClick={hideModal}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ModalAdminConfirmar;
