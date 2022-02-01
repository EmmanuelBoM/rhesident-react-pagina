import React from 'react';
import '../styles/base.css'
import '../styles/ModalMiembro.css'
import '../styles/ModalesAdmin.css'

function ModalAdminEliminar(props) {

    function hideModal(){
        props.setModalVisibility(false);
    }

    return (
        <div>
            <div className="modal-bg">
                <div className='cont-modal-admin'>
                    <div className="modal-admin-barra danger"></div>
                    <p className="texto-modal-admin">{`¿Estás segur@ que deseas eliminar ${props.recurso} ${props.nombreRecurso}?`}</p>
                    <div className="btns-modal-admin">
                        <button className="btn-modal-admin-confirmar"  onClick={props.runFunction}>
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

export default ModalAdminEliminar;
