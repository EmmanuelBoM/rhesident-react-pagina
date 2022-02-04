import React from 'react'
import miembroCompleta from '../assets/miembro_completa.png'
import '../styles/base.css'
import '../styles/ModalMiembro.css'
import iconoCerrar from '../assets/icono_cerrar.svg'

function ModalMiembro(props) {
    function hideModal(){
        props.setModalVisibility(false);
    }

    const stylesImgCompleta ={
        backgroundImage : `url(${props.miembro.imgCompletaURL})`
    }

    return (
        <div>
            <div className="modal-bg">
                <div className='cont-modal-miembro'>
                    <div className="imagen-completa-miembro" style={stylesImgCompleta}>
                    </div>
                    <div className="modal-contenido">
                        <div className="close-btn-cont">
                            <img src={iconoCerrar} alt="" className='btn-cerrar' onClick={hideModal}/>
                        </div>
                        <h2 className="nombre-miembro-modal verde">{props.miembro.nombre}</h2>
                        <p className="descripcion-miembro-modal negro">{props.miembro.descripcion}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalMiembro
