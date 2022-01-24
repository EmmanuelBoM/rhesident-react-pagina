import React from 'react'
import miembroCompleta from '../assets/miembro_completa.png'
import '../styles/base.css'
import '../styles/ModalMiembro.css'
import '../styles/ModalTaller.css'
import iconoCerrar from '../assets/icono_cerrar.svg'
import imgTaller from '../assets/cultura.png'

function ModalTaller(props) {
    function hideModal(){
        props.setModalVisibility(false);
    }
    return (
        <div>
            <div className="modal-bg">
                <div className='cont-modal-taller'>
                    <div className="close-btn-cont">
                        <img src={iconoCerrar} alt="" className='btn-cerrar' onClick={hideModal}/>
                    </div>
                    <div className="modal-taller-top">
                        <div className="cont-taller">
                            <svg className='taller-svg' width="261" height="261" viewBox="0 0 261 261" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id='imgMiembro' patternUnits='userSpaceOnUse' x="0" y="0" width="261" height="261">
                                        <image href={imgTaller} width="410" height="280" />             
                                    </pattern>
                                </defs>
                                <path d="M258.806 120.756C272.582 60.5354 211.893 -4.75401 174.289 0.685922C43.2306 19.6444 6.74284 107.498 2.27494 145.663C-12.0223 244.395 81.3317 262.635 129.982 260.157C207.053 249.748 253.858 142.385 258.806 120.756Z" fill="url(#imgMiembro)"/>
                            </svg>
                        </div>
                        <div className="taller-info-principal">
                            <h3 className="nombre-taller">Reforestación Consciente</h3>
                            <div className="etiquetas-taller">
                                <div className="etiqueta-taller"><p>Sustentabilidad</p></div>

                            </div>
                            <p className="taller-modalidad"><span className="p-300">Modalidad:</span> Presencial</p>
                            <p className="taller-descripcion negro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor magni autem totam veritatis amet voluptatibus cupiditate! Ea similique inventore animi dolorem tempore pariatur mollitia vel?</p>
                        </div>
                    </div>
                    <div className="modal-taller-bottom">
                        <div className="detalle-taller">
                            <div className="titulo-detalle-taller">
                                <i class="fa-solid fa-calendar"></i>
                                <h4 className="negro">Fechas de inicio</h4>
                            </div>
                            <ul className="lista-fechas-taller">
                                <li><p className="negro">12 de diciembre de 2022</p></li>
                                <li><p className="negro">12 de diciembre de 2022</p></li>
                                <li><p className="negro">12 de diciembre de 2022</p></li>
                            </ul>
                        </div>
                        <div className="detalle-taller">
                            <div className="titulo-detalle-taller">
                                <i class="fa-solid fa-clock"></i>
                                <h4 className="negro">Duración</h4>
                            </div>
                            <p className="negro">25 horas</p>
                        </div>
                    </div>
                    <button className="btn-registro-taller">Regístrate</button>
                </div>
            </div>
        </div>
    )
}

export default ModalTaller
