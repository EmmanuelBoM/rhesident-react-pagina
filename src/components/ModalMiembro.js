import React from 'react'
import miembroCompleta from '../assets/miembro_completa.png'
import '../styles/base.css'
import '../styles/ModalMiembro.css'
import iconoCerrar from '../assets/icono_cerrar.svg'

function ModalMiembro(props) {
    function hideModal(){
        props.setModalVisibility(false);
    }
    return (
        <div>
            <div className="modal-bg">
                <div className='cont-modal-miembro'>
                    <div className="imagen-completa-miembro">
                    </div>
                    <div className="modal-contenido">
                        <div className="close-btn-cont">
                            <img src={iconoCerrar} alt="" className='btn-cerrar' onClick={hideModal}/>
                        </div>
                        <h2 className="nombre-miembro-modal verde">José Arenas Rodríguez</h2>
                        <p className="descripcion-miembro-modal negro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis excepturi veritatis libero fugit asperiores, aperiam sit facere error corrupti aut aliquam, temporibus voluptatibus quidem atque in officiis quae minus qui. Laboriosam tenetur praesentium, debitis earum nam officia voluptates aut inventore voluptatem distinctio saepe minima, minus et doloremque. Corporis voluptate, in, minus deserunt itaque voluptatem maiores nobis adipisci amet doloremque aliquid? Consequuntur asperiores porro odit voluptates? Nobis minus tempora sapiente consequuntur distinctio eos voluptate, ullam incidunt veniam commodi esse hic, totam necessitatibus, illo asperio</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalMiembro
