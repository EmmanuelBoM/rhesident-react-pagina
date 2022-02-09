import React from 'react'
import '../styles/base.css'
import '../styles/ModalMiembro.css'
import '../styles/ModalTaller.css'
import '../styles/ModalResponsive.css'

function ModalResponsive(props) {
    function hideModal(){
        props.setModalVisibility(false);
        sessionStorage.setItem('modalLanding', true)
    }
    

    return (
        <div>
            <div className="modal-bg">
                <div className='cont-modal-responsive'>
                    <img src={props.img} alt="" className='img-modal'/>
                    <i class="fa-solid fa-xmark icono-cerrar-modal" onClick={hideModal}></i>
                </div>
            </div>
        </div>
    )
}

export default ModalResponsive
