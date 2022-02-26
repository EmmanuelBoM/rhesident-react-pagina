import React from 'react'
import '../styles/base.css'
import '../styles/ModalMiembro.css'
import '../styles/ModalTaller.css'
import iconoCerrar from '../assets/icono_cerrar.svg'
import { Link } from 'react-router-dom'

function ModalTaller(props) {
    function hideModal(){
        props.setModalVisibility(false);
    }
    const imgBg = {
        backgroundImage : `url(${props.taller.imgURL})`
    }

    return (
      <div>
        <div className="modal-bg">
          <div className="cont-modal-taller">
            <div className="close-btn-cont">
              <img
                src={iconoCerrar}
                alt=""
                className="btn-cerrar"
                onClick={hideModal}
              />
            </div>
            <div className="modal-taller-top">
              <div className="img-taller" style={imgBg}></div>
              <div className="taller-info-principal">
                <h3 className="nombre-taller">{props.taller.nombre}</h3>
                <div className="etiquetas-taller">
                  {props.taller.ejesAccion.map((eje) => {
                    return (
                      <div className="etiqueta-taller">
                        <p>{eje}</p>
                      </div>
                    );
                  })}
                </div>

                <p className="taller-modalidad">
                  <span className="p-300">Modalidad:</span>{" "}
                  {props.taller.modalidad}
                </p>
                <p className="taller-descripcion negro">
                  {props.taller.descripcion}
                </p>
                <div className="etiquetas-taller">
                  {props.taller.etiquetas.map((etiqueta) => {
                    return <p className="verde etiqueta">{etiqueta}</p>;
                  })}
                </div>
              </div>
            </div>
            <div className="modal-taller-bottom">
              <div className="detalle-taller">
                <div className="titulo-detalle-taller">
                  <i class="fa-solid fa-calendar"></i>
                  <h4 className="negro">Fechas de inicio</h4>
                </div>
                <ul className="lista-fechas-taller">
                  {props.taller.fechasInicio.map((fecha) => {
                    return (
                      <li>
                        <p className="negro">{fecha}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="detalle-taller">
                <div className="titulo-detalle-taller">
                  <i class="fa-solid fa-clock"></i>
                  <h4 className="negro">Duración</h4>
                </div>
                <p className="negro">{`${props.taller.duracion} horas`}</p>
              </div>
            </div>
            {props.taller.estatus === "Abierto" ? (
              <Link
                to={`/registro-taller/${props.taller.id}`}
                className="btn-registro-taller"
              >
                Regístrate
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    );
}

export default ModalTaller
